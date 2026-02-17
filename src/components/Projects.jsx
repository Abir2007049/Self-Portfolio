import React, { useState, useEffect } from 'react';
import { getProjects } from '../contentful';

const Projects = () => {
  // Default projects - will be replaced with CMS data when available
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Real Life Fraud Detection App',
      description: 'Civic Monitoring App for fraud protection and detection in real-life scenarios with comprehensive monitoring features.',
      technologies: ['React', 'Node.js', 'Machine Learning', 'MongoDB'],
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Fraud+Detection',
      github: 'https://github.com/Abir2007049/Civic-Monitoring-App-5-Civic-Fraud-Protection.git',
      demo: 'https://github.com/Abir2007049/Civic-Monitoring-App-5-Civic-Fraud-Protection.git'
    },
    {
      id: 2,
      title: 'Quiz Website for University',
      description: 'An interactive quiz platform designed for university students with real-time scoring and question management.',
      technologies: ['React', 'Express', 'MongoDB', 'JavaScript'],
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Quiz+Website',
      github: 'https://github.com/Abir2007049/QuizWebsite.git',
      demo: 'https://github.com/Abir2007049/QuizWebsite.git'
    },
    {
      id: 3,
      title: "Doctor's Portfolio & Appointment System",
      description: 'A comprehensive portfolio and appointment booking system for doctors with patient management features.',
      technologies: ['React', 'Node.js', 'MySQL', 'REST APIs'],
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Doctor+Portfolio',
      github: 'https://github.com/Abir2007049/Doctor_Portfolio.git',
      demo: 'https://github.com/Abir2007049/Doctor_Portfolio.git'
    },
    {
      id: 4,
      title: 'Lung X-ray Abnormality Detection',
      description: 'Image processing and machine learning system for detecting abnormalities in lung X-rays with high accuracy.',
      technologies: ['Python', 'Machine Learning', 'Image Processing', 'TensorFlow'],
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=X-ray+Detection',
      github: 'https://github.com/Abir2007049/Lung-x-ray-abnormality-detection-Image-processing-and-machine-learning.git',
      demo: 'https://github.com/Abir2007049/Lung-x-ray-abnormality-detection-Image-processing-and-machine-learning.git'
    }
  ]);

  // Fetch projects from Contentful CMS
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      if (data && data.length > 0) {
        const formattedProjects = data.map((project, index) => ({
          id: index + 1,
          title: project.title,
          description: project.description,
          technologies: project.technologies || [],
          image: project.image?.fields?.file?.url || `https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=${encodeURIComponent(project.title)}`,
          github: project.github || '#',
          demo: project.demo || project.github || '#'
        }));
        setProjects(formattedProjects);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="text-gray-600 hover:text-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href={project.demo}
                    className="text-blue-600 hover:text-blue-700 font-medium transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
