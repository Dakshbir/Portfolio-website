import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Users, Award, Code, Building2 } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      company: 'Microsoft',
      role: 'Software Engineering Intern (Upcoming)',
      duration: 'Summer 2025',
      location: 'India',
      description: 'Selected for the prestigious Microsoft internship program. Will be working on cutting-edge AI/ML and cloud technologies.',
      achievement: 'One of the select few chosen from thousands of applicants across the country.',
      techStack: ['AI/ML', 'Cloud', 'Research'],
      link: '#',
      icon: Building2,
      highlight: true,
    },
    {
      company: 'Open Climate Fix',
      role: 'Google Summer of Code Contributor',
      duration: 'June 2025 - August 2025',
      location: 'Remote',
      description: 'Implemented a high-performance, cloud-native data streaming solution for an 860GB satellite imagery dataset by integrating Ice-Chunk and Zarr, resulting in a throughput of 31,281.96 MB/s—a 2.09x improvement over standard Zarr streaming.',
      achievement: 'Authored a comprehensive benchmarking suite to fine-tune data access patterns, including chunking strategies and memory management.',
      techStack: ['Ice Chunk', 'Zarr 3', 'xarray', 'Dask', 'Google Cloud Storage'],
      link: 'https://www.openclimatefix.org/community',
      icon: Award,
      highlight: false,
    },
    {
      company: 'Sabudh Organisation',
      role: 'Data Science Intern',
      duration: 'Previous Experience',
      location: 'Remote/On-site',
      description: 'Worked on data science projects involving data analysis, machine learning model development, and visualization. Gained hands-on experience with real-world datasets and industry-standard tools.',
      achievement: 'Contributed to meaningful data-driven solutions and improved analytical skills.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization'],
      link: 'https://sabudh.org/',
      icon: Briefcase,
      highlight: false,
    },
    {
      company: 'SCG Foundation (Now Brillied)',
      role: 'Intern',
      duration: 'Previous Experience',
      location: 'Remote/On-site',
      description: 'Contributed to various projects at SCG Foundation, gaining valuable industry experience in technology and research-oriented work.',
      achievement: 'Developed practical skills and understanding of organizational workflows.',
      techStack: ['Research', 'Data Analysis', 'Project Management'],
      link: 'https://www.brillied.in/',
      icon: Building2,
      highlight: false,
    },
  ];

  const positions = [
    {
      title: 'Placement Coordinator (PC)',
      organization: 'Training and Placement NSUT',
      icon: Briefcase,
    },
    {
      title: 'Tech and Research Lead',
      organization: 'Enactus NSUT',
      icon: Code,
    },
    {
      title: 'Tech Team Member',
      organization: 'IIF NSUT',
      icon: Users,
    },
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div 
            className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h2 className="section-title">
              EXPERIENCE <span>& WORK</span>
            </h2>
            <div className="w-24 h-1 bg-[#c0f748] mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience Cards */}
            <div className="lg:col-span-2 space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className={`card-dark h-full group ${exp.highlight ? 'border-[#c0f748]/50' : ''}`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${exp.highlight ? 'bg-[#c0f748]/20 border-[#c0f748]/50' : 'bg-gradient-to-br from-[#c0f748]/20 to-[#c0f748]/5 border-[#c0f748]/30'}`}>
                          <exp.icon className="w-7 h-7 text-[#c0f748]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#c0f748] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            {exp.company}
                          </h3>
                          <p className="text-[#c0f748] font-medium">{exp.role}</p>
                        </div>
                      </div>
                      {exp.link !== '#' && (
                        <a 
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#161616] border border-[#2a2a2a] text-gray-400 hover:text-[#c0f748] hover:border-[#c0f748]/50 transition-all duration-300"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#c0f748]" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#c0f748]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="p-4 rounded-lg bg-[#c0f748]/5 border border-[#c0f748]/20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          <span className="text-[#c0f748] font-semibold">Achievement: </span>
                          {exp.achievement}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="tech-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Positions of Responsibility */}
            <div 
              className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                POSITIONS OF <span className="text-[#c0f748]">RESPONSIBILITY</span>
              </h3>
              
              {positions.map((position, index) => (
                <div 
                  key={index}
                  className="card-dark group hover:translate-x-2 transition-all duration-300"
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c0f748]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c0f748]/20 transition-colors">
                      <position.icon className="w-5 h-5 text-[#c0f748]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-[#c0f748] transition-colors">
                        {position.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{position.organization}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Badges */}
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#c0f748]/20 to-[#c0f748]/5 border border-[#c0f748]/30 text-center">
                  <Award className="w-8 h-8 text-[#c0f748] mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">Google Summer of Code</p>
                  <p className="text-[#c0f748] text-xs">2025 Contributor</p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 text-center">
                  <Building2 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">Microsoft</p>
                  <p className="text-blue-400 text-xs">Upcoming Intern 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
