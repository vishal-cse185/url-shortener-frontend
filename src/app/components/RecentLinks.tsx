import { useEffect, useState } from 'react';
import axios from 'axios';

interface Url {
  id: number;
  shortCode: string;
  category: string;
  riskLevel: string;
  clickCount: number;
}

export function RecentLinks() {
  const [links, setLinks] = useState<Url[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/url/all')
      .then((response) => {
        setLinks(response.data.reverse());
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Recent Links
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 text-gray-400">Short Code</th>
                <th className="py-3 text-gray-400">Category</th>
                <th className="py-3 text-gray-400">Risk</th>
                <th className="py-3 text-gray-400">Clicks</th>
              </tr>
            </thead>

            <tbody>
              {links.map((link) => (
                <tr
                  key={link.id}
                  className="border-b border-white/5"
                >
                  <td className="py-4 text-white">
                    {link.shortCode}
                  </td>

                  <td className="py-4 text-gray-300">
                    {link.category || 'N/A'}
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        link.riskLevel === 'HIGH'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {link.riskLevel || 'N/A'}
                    </span>
                  </td>

                  <td className="py-4 text-white">
                    {link.clickCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}