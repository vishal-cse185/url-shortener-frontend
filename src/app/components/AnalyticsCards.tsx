import { useEffect, useState } from 'react';
import axios from 'axios';

interface Url {
  id: number;
  category: string;
  riskLevel: string;
  clickCount: number;
}

export function AnalyticsCards() {
  const [totalLinks, setTotalLinks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [highRiskLinks, setHighRiskLinks] = useState(0);
  const [technologyLinks, setTechnologyLinks] = useState(0);

  useEffect(() => {
    axios
      .get('https://url-shortener-backend-s2uq.onrender.com/api/url/all')
      .then((response) => {
        const data: Url[] = response.data;

        setTotalLinks(data.length);

        setTotalClicks(
          data.reduce(
            (sum, link) => sum + link.clickCount,
            0
          )
        );

        setHighRiskLinks(
          data.filter(
            (link) => link.riskLevel === 'HIGH'
          ).length
        );

        setTechnologyLinks(
          data.filter(
            (link) => link.category === 'Technology'
          ).length
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const cards = [
    {
      title: 'Total Links',
      value: totalLinks,
    },
    {
      title: 'Total Clicks',
      value: totalClicks,
    },
    {
      title: 'High Risk Links',
      value: highRiskLinks,
    },
    {
      title: 'Technology Links',
      value: technologyLinks,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-gray-400 text-sm mb-2">
              {card.title}
            </h3>

            <p className="text-4xl font-bold text-white">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}