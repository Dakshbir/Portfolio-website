import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  Network, 
  Cpu, 
  MessageSquare, 
  GitBranch,
  Terminal,
  Box,
  Microscope
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Languages & Core',
      icon: Code2,
      skills: ['Python', 'C++ (DSA)', 'NLP', 'Data Science'],
      color: '#c0f748',
    },
    {
      title: 'AI & ML',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'CNN', 'RNN', 'Object Detection'],
      color: '#c0f748',
    },
    {
      title: 'Generative AI',
      icon: MessageSquare,
      skills: ['LLMs', 'RAG', 'LangChain', 'Prompt Engineering'],
      color: '#c0f748',
    },
    {
      title: 'Research',
      icon: Microscope,
      skills: ['Data Analysis', 'Research Methods', 'Academic Writing', 'Experiment Design'],
      color: '#c0f748',
    },
    {
      title: 'Cloud & Data',
      icon: Database,
      skills: ['Google Cloud', 'Zarr', 'xarray', 'Dask', 'Ice Chunk'],
      color: '#c0f748',
    },
    {
      title: 'Core Concepts',
      icon: Cpu,
      skills: ['OOPS', 'DBMS', 'OS', 'DSA', 'Computer Networks'],
      color: '#c0f748',
    },
  ];

  const tools = [
    { name: 'GitHub', icon: GitBranch },
    { name: 'Hugging Face', icon: Network },
    { name: 'Docker', icon: Box },
    { name: 'Linux', icon: Terminal },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#c0f748]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c0f748]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div 
            className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="section-title">
              SKILLS <span>& TOOLS</span>
            </h2>
            <div className="w-24 h-1 bg-[#c0f748] mt-4 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience in AI/ML, 
              research, cloud computing, and software development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`card-dark group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#c0f748]/10 flex items-center justify-center group-hover:bg-[#c0f748]/20 transition-colors">
                    <category.icon className="w-6 h-6 text-[#c0f748]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#c0f748] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-gray-300 text-sm hover:border-[#c0f748]/50 hover:text-[#c0f748] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="text-xl font-semibold text-white text-center mb-8" style={{ fontFamily: 'Oswald, sans-serif' }}>
              TOOLS <span className="text-[#c0f748]">& PLATFORMS</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#161616] border border-[#2a2a2a] hover:border-[#c0f748]/50 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#c0f748]/10 flex items-center justify-center group-hover:bg-[#c0f748]/20 transition-colors">
                    <tool.icon className="w-7 h-7 text-[#c0f748]" />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Level Indicator */}
          <div 
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            {[
              { label: 'Machine Learning', level: '90%' },
              { label: 'Deep Learning', level: '85%' },
              { label: 'Research', level: '80%' },
              { label: 'Data Processing', level: '88%' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#c0f748] mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {item.level}
                </div>
                <div className="text-gray-400 text-sm">{item.label}</div>
                <div className="mt-3 h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#c0f748] to-[#8bc34a] rounded-full transition-all duration-1000"
                    style={{ width: isVisible ? item.level : '0%', transitionDelay: `${1200 + index * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
