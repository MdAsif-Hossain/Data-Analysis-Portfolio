
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard analyzing sales trends, customer segmentation, and revenue forecasting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Power BI", "SQL", "Python", "Excel"],
      category: "Business Intelligence"
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn with 94% accuracy using ensemble methods",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "Financial Risk Assessment",
      description: "Comprehensive risk analysis model for loan default prediction and portfolio optimization",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["R", "Python", "SQL", "Tableau"],
      category: "Finance"
    },
    {
      id: 4,
      title: "E-commerce Analytics",
      description: "End-to-end analytics solution for online retail including web scraping and real-time reporting",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Python", "BeautifulSoup", "Streamlit", "PostgreSQL"],
      category: "Web Analytics"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing real-world data analysis projects and their business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
              <img
                src={projects.find(p => p.id === selectedProject)?.image}
                alt=""
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 mb-4">
                {projects.find(p => p.id === selectedProject)?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects.find(p => p.id === selectedProject)?.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
