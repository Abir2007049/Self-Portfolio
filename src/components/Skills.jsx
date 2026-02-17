import React, { useState, useEffect } from 'react';
import { getSkills } from '../contentful';

const Skills = () => {
  // Default skills - will be replaced with CMS data when available
  const [skills, setSkills] = useState([
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Laravel', 'Express', 'Django', 'REST APIs'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma'] },
  ]);

  // Fetch skills from Contentful CMS
  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getSkills();
      if (data && data.length > 0) {
        setSkills(data);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.length > 0 ? (
            skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {skillGroup.category || "Skills"}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items && Array.isArray(skillGroup.items) && skillGroup.items.length > 0 ? (
                    skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {skill}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 italic">No skills added yet</li>
                  )}
                </ul>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No skills data available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
