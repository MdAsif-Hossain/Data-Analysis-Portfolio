
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2024",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=300&h=200&fit=crop",
      credentialId: "ABC123456"
    },
    {
      title: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2023",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      credentialId: "DEF789012"
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      credentialId: "GHI345678"
    },
    {
      title: "Python for Data Science and AI",
      issuer: "IBM",
      date: "2022",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop",
      credentialId: "JKL901234"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <Award className="inline-block w-12 h-12 text-purple-400 mr-4" />
            Certificates
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications validating expertise in data analysis and related technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mb-3">{cert.date}</p>
                
                <button className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors text-xs">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
