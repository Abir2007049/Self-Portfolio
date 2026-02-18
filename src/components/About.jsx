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
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <img 
              src={aboutData.profileImage} 
              alt={aboutData.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-xl"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">{aboutData.name}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {aboutData.title}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {aboutData.bio}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get in Touch
            </a>
            <a href="#projects" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
