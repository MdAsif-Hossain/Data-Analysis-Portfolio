
import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, Database, Brain, TrendingUp, Code, PieChart } from 'lucide-react';

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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "R", "SQL", "JavaScript", "VBA"]
    },
    {
      title: "Data Analysis Tools",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Pandas", "NumPy", "Jupyter", "Excel", "Google Sheets"]
    },
    {
      title: "Visualization & BI",
      icon: <PieChart className="w-8 h-8" />,
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ["Scikit-learn", "TensorFlow", "Statistical Analysis", "Predictive Modeling"]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "BigQuery"]
    },
    {
      title: "Analytics & Reporting",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: ["Statistical Analysis", "A/B Testing", "KPI Development", "Business Intelligence"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-purple-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set across the entire data analysis lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-purple-400 mr-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-purple-500/30 transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
