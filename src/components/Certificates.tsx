
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2024",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=300&h=200&fit=crop",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/2ZF06XQSNIVK?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      date: "2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/UMCRL8FMKFAM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
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
            Professional certifications validating expertise in data analysis and programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-400 text-base font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
