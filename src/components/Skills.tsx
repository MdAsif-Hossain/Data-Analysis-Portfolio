
import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, Database, Brain, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', level: 95, icon: <Brain className="w-6 h-6" /> },
    { name: 'SQL', level: 90, icon: <Database className="w-6 h-6" /> },
    { name: 'Data Visualization', level: 88, icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Machine Learning', level: 85, icon: <TrendingUp className="w-6 h-6" /> },
    { name: 'Pandas', level: 92, icon: <Database className="w-6 h-6" /> },
    { name: 'Power BI', level: 87, icon: <BarChart3 className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise in cutting-edge data analysis tools and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-purple-400 mr-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
                <div
                  className={`h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out ${
                    isVisible ? 'animate-scale-x' : 'w-0'
                  }`}
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
              <div className="text-right text-purple-400 font-semibold">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
