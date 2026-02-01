import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, FileText, Sparkles, Database, Dumbbell } from 'lucide-react';

const Projects = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'DeepSeaAI',
      subtitle: 'AI-powered Marine eDNA Biodiversity Discovery System',
      description: 'An open-set CNN + clustering pipeline classifying 80k+ species from 20M+ eDNA reads and flagging low-confidence sequences as novel-taxa candidates.',
      achievement: 'Developed a high-throughput TFRecord-based genomics and 3D analytics workflow cutting compute by ~60-70% and enabling uncertainty-aware biodiversity mapping.',
      status: 'Ongoing Research Paper',
      research: true,
      image: './images/deepseaai.jpg',
      icon: Sparkles,
      featured: true,
      techStack: ['TensorFlow', 'CNN', 'Clustering', 'TFRecord', '3D Analytics', 'Research'],
      links: {
        demo: 'https://www.youtube.com/watch?v=WOB1sP4JKfU',
        paper: '#'
      }
    },
    {
      title: 'AI-SQL Query Agent',
      subtitle: 'LLM-based SQL Generation System',
      description: 'LLM-based backend for automated SQL generation and correction using Groq API, few-shot learning, and async processing.',
      research: false,
      image: './images/ai-sql.jpg',
      icon: Database,
      featured: false,
      techStack: ['Groq API', 'LLM', 'Few-shot Learning', 'Async Processing'],
      links: {
        demo: 'https://sql-query-agent.vercel.app/',
        github: 'https://github.com/Dakshbir/SQL-Query-Agent'
      }
    },
    {
      title: 'Fitness Chatbot',
      subtitle: 'RAG-enabled Fitness AI',
      description: 'RAG-enabled fitness chatbot with LangChain and Llama2 API for health and fitness guidance.',
      research: false,
      image: './images/fitness-chatbot.jpg',
      icon: Dumbbell,
      featured: false,
      techStack: ['RAG', 'LangChain', 'Llama2 API', 'Generative AI'],
      links: {
        demo: 'https://www.youtube.com/watch?v=WOB1sP4JKfU',
        github: 'https://github.com/Dakshbir/Basic-Fitness-Chatbot'
      }
    }
  ];

  return (
    <section 
      id="projects" 
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
              FEATURED <span>PROJECTS</span>
            </h2>
            <div className="w-24 h-1 bg-[#c0f748] mt-4 rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl">
              Showcasing my research work and passion projects in AI/ML, 
              deep learning, and generative AI.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Project - DeepSeaAI */}
            <div 
              className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="card-dark group overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={projects[0].image}
                      alt={projects[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616]/90 lg:bg-gradient-to-l" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#c0f748] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider">
                      Featured
                    </div>
                    
                    {/* Research Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold uppercase tracking-wider">
                      Research
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#c0f748]/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[#c0f748]" />
                      </div>
                      <span className="text-[#c0f748] text-sm font-medium uppercase tracking-wider">
                        Research Project
                      </span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-[#c0f748] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      {projects[0].title}
                    </h3>
                    <p className="text-gray-400 mb-4">{projects[0].subtitle}</p>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {projects[0].description}
                    </p>
                    
                    <div className="p-4 rounded-lg bg-[#c0f748]/5 border border-[#c0f748]/20 mb-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="text-[#c0f748] font-semibold">Impact: </span>
                        {projects[0].achievement}
                      </p>
                    </div>
                    
                    {/* Ongoing Research Notice */}
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 mb-6">
                      <p className="text-purple-400 text-sm flex items-center gap-2">
                        <FileText size={16} />
                        <span className="font-medium">{projects[0].status}</span>
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[0].techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={projects[0].links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-gray-300 hover:text-[#c0f748] hover:border-[#c0f748]/50 transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Demo</span>
                      </a>
                      <a 
                        href={projects[0].links.paper}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors"
                      >
                        <FileText size={18} />
                        <span className="text-sm">Paper</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects */}
            {projects.slice(1).map((project, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="card-dark group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl -mx-6 -mt-6 mb-6">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#c0f748]/10 flex items-center justify-center">
                      <project.icon className="w-4 h-4 text-[#c0f748]" />
                    </div>
                    <span className="text-[#c0f748] text-xs font-medium uppercase tracking-wider">
                      Passion Project
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#c0f748] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag text-xs">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] text-gray-300 hover:text-[#c0f748] hover:border-[#c0f748]/50 transition-all duration-300 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
