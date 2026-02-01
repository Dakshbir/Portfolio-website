import { useEffect, useRef, useState } from 'react';
import { Download, Mail, Calendar, Award, Trophy, TrendingUp } from 'lucide-react';

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '8.73', label: 'Current CGPA', icon: Award },
    { value: '3+', label: 'AI Projects', icon: Calendar },
    { value: "GSoC'25", label: 'Achievement', icon: Trophy },
  ];

  const education = [
    {
      degree: 'B.Tech Computer Science',
      institution: 'Netaji Subhas University of Technology, Delhi',
      period: '2023 - 2027',
      score: '8.73 CGPA',
    },
    {
      degree: 'CBSE Class XII',
      institution: 'K.R. Mangalam World School, Vikaspuri',
      period: '2022 - 2023',
      score: '97%',
    },
    {
      degree: 'CBSE Class X',
      institution: 'K.R. Mangalam World School, Vikaspuri',
      period: '2020 - 2021',
      score: '98%',
    },
  ];

  const achievements = [
    { title: 'JEE Mains Percentile', value: '99.37', description: 'Among top performers' },
    { title: 'JEE Advanced Rank', value: '6,147', description: 'IIT entrance examination' },
    { title: 'DSA + CP Problems', value: '500+', description: 'Across platforms' },
    { title: 'School Topper', value: '3+ Years', description: 'Consecutive years' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div 
            className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h2 className="section-title">
              ABOUT <span>ME</span>
            </h2>
            <div className="w-24 h-1 bg-[#c0f748] mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Image & Stats */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div 
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-[#2a2a2a] group">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Dakshbir Singh Kapoor"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#c0f748] text-sm font-medium uppercase tracking-wider mb-1">
                      AI/ML Research Engineer
                    </p>
                    <p className="text-white text-lg font-semibold">
                      NSUT, Delhi
                    </p>
                  </div>
                </div>
                
                {/* Decorative Border */}
                <div className="absolute -inset-3 border border-[#c0f748]/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
              </div>

              {/* Stats Grid */}
              <div 
                className={`grid grid-cols-3 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '400ms' }}
              >
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="card-dark text-center p-5 group hover:border-[#c0f748]/50 transition-all duration-300"
                  >
                    <stat.icon className="w-6 h-6 text-[#c0f748] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl lg:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Bio & Education */}
            <div className="space-y-8">
              {/* Bio */}
              <div 
                className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '300ms' }}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate <span className="text-[#c0f748] font-medium">Computer Science student at NSUT, Delhi</span> with a deep fascination for artificial intelligence, research, and its potential to transform industries. My journey in tech has been driven by curiosity and a desire to build solutions that matter.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  From marine biodiversity discovery systems to high-performance data streaming pipelines, I thrive in challenging environments where I can apply my knowledge of <span className="text-white">deep learning, generative AI, research methodologies, and distributed systems</span> to solve complex problems.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  As a <span className="text-[#c0f748] font-medium">Google Summer of Code 2025 contributor</span> at Open Climate Fix and an upcoming <span className="text-[#c0f748] font-medium">Microsoft intern</span>, I've honed my skills in cloud-native architectures, large-scale data processing, and cutting-edge AI research.
                </p>
              </div>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '500ms' }}
              >
                <a 
                  href="/cv.pdf" 
                  download="Dakshbir_Singh_Kapoor_CV.pdf"
                  className="btn-primary"
                >
                  <Download size={18} className="mr-2" />
                  Download CV
                </a>
                <a href="#contact" className="btn-secondary">
                  <Mail size={18} className="mr-2" />
                  Hire Me
                </a>
              </div>

              {/* Key Achievements */}
              <div 
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '550ms' }}
              >
                <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  KEY <span className="text-[#c0f748]">ACHIEVEMENTS</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="card-dark text-center p-4 group hover:border-[#c0f748]/50 transition-all duration-300"
                    >
                      <TrendingUp className="w-5 h-5 text-[#c0f748] mx-auto mb-2" />
                      <p className="text-xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        {achievement.value}
                      </p>
                      <p className="text-xs text-gray-400">{achievement.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div 
                className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '600ms' }}
              >
                <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  EDUCATION
                </h3>
                
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="card-dark group hover:translate-x-2 transition-all duration-300"
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-[#c0f748] transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400 text-sm">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[#c0f748] font-semibold">{edu.score}</span>
                        <span className="text-gray-500 text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
