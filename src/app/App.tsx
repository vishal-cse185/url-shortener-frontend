import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LinkGenerator } from './components/LinkGenerator';
import { ResultCard } from './components/ResultCard';
import { AnalyticsCards } from './components/AnalyticsCards';
import { RecentLinks } from './components/RecentLinks';

export default function App() {
  const [generatedLink, setGeneratedLink] = useState<any>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>

        {/* Hero */}
        <Hero />

        {/* URL Generator */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <LinkGenerator
            onLinkGenerated={setGeneratedLink}
          />

          {generatedLink && (
            <ResultCard data={generatedLink} />
          )}
        </section>

        {/* Analytics */}
        <AnalyticsCards />

        {/* Recent Links */}
        <RecentLinks />

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-500">
            URL Shortener • Built with React, Spring Boot & PostgreSQL
          </p>
        </div>
      </footer>
    </div>
  );
}