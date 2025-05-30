
import React from 'react';
import { ChevronDown, Linkedin, Github, Facebook, Briefcase } from 'lucide-react';

const Hero = () => {
  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="animate-fade-in">
          {/* Professional Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/e7752c66-0fbf-4853-b8f8-010318ae68a6.png" 
                alt="Asif Hossain - Data Analysis Expert"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl mx-auto"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-6">
            <a
              href="https://www.linkedin.com/in/md-asif-hossain20/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-blue-600/25"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/MdAsif-Hossain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-gray-800/25"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/asifhossain86/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-indigo-600/25"
            >
              <Briefcase className="w-5 h-5" />
            </a>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Asif</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in animation-delay-500">
            Data Analysis Expert
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-1000">
            Transforming complex data into actionable insights through advanced analytics, 
            machine learning, and compelling visualizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
            <button 
              onClick={scrollToSkills}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8 opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
