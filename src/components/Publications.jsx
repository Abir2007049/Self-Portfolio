import React, { useEffect, useState } from 'react';
import { getPublications } from '../contentful';

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      const data = await getPublications();
      if (data && data.length > 0) {
        const formatted = data.map((item, index) => ({
          id: index + 1,
          title: item.title || 'Untitled Publication',
          venue: item.venue || 'Unknown Venue',
          year: item.year || '—',
          authors: Array.isArray(item.authors) ? item.authors : (item.authors ? [item.authors] : []),
          link: item.link || '#',
          summary: item.summary || ''
        }));
        setPublications(formatted);
      }
    };
    fetchPublications();
  }, []);

  return (
    <section id="publications" className="py-20 bg-[#0b0b10]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Publications and Achievements
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {publications.length === 0 ? (
            <div className="bg-[#12121c] border border-violet-500/10 rounded-xl p-6 text-center text-slate-400">
              Not added yet
            </div>
          ) : (
            publications.map((pub) => (
              <div key={pub.id} className="bg-[#12121c] border border-violet-500/10 rounded-xl p-6 hover:border-violet-400/40 transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-slate-300">
                      {pub.venue} · {pub.year}
                    </p>
                    {pub.authors.length > 0 && (
                      <p className="text-slate-400 mt-2">
                        {pub.authors.join(', ')}
                      </p>
                    )}
                    {pub.summary && (
                      <p className="text-slate-300 mt-3">
                        {pub.summary}
                      </p>
                    )}
                  </div>
                  {pub.link && pub.link !== '#' && (
                    <div className="shrink-0">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition"
                      >
                        View Publication →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
