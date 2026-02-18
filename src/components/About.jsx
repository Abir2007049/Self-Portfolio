import React, { useState, useEffect } from 'react';
import { getAbout } from '../contentful';

const About = () => {
  const [aboutData, setAboutData] = useState({
    name: 'Sadik Zaman Abir',
    title: 'Full Stack Developer | Problem Solver | Tech Enthusiast',
    bio: "I'm a passionate developer with expertise in building modern web applications. I love creating innovative solutions and bringing ideas to life through code. With a strong foundation in both frontend and backend technologies, I strive to deliver exceptional user experiences.",
    profileImage: 'https://via.placeholder.com/200/3B82F6/FFFFFF?text=SA'
  });

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAbout();
      if (data) {
        setAboutData({
          name: data.name || aboutData.name,
          title: data.title || aboutData.title,
          bio: data.bio || aboutData.bio,
          profileImage: data.profileImage?.fields?.file?.url
            ? `https:${data.profileImage.fields.file.url}`
            : aboutData.profileImage
        });
      }
    };
    fetchAbout();
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <img 
              src={aboutData.profileImage} 
              alt={aboutData.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-violet-400/60 shadow-xl shadow-violet-500/20"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-violet-300">{aboutData.name}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            {aboutData.title}
          </p>
          <p className="text-lg text-slate-200 leading-relaxed">
            {aboutData.bio}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#contact" className="bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-400 transition shadow-lg shadow-violet-500/20">
              Get in Touch
            </a>
            <a href="#projects" className="border-2 border-violet-400/70 text-violet-200 px-6 py-3 rounded-lg hover:bg-violet-500/10 transition">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
