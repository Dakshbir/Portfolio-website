import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Code2, FileText } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Neural Network Particle Animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }
    
    const particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 150;
    const maxConnections = 4;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    let animationId: number;
    let frameCount = 0;
    
    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance (30fps)
      if (frameCount % 2 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach((particle, i) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(192, 247, 72, ${particle.opacity})`;
          ctx.fill();
          
          // Draw connections (only check every 5th particle for performance)
          if (i % 5 === 0) {
            let connections = 0;
            for (let j = i + 1; j < particles.length && connections < maxConnections; j++) {
              const dx = particles[j].x - particle.x;
              const dy = particles[j].y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < connectionDistance) {
                const opacity = (1 - distance / connectionDistance) * 0.2;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(192, 247, 72, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
                connections++;
              }
            }
          }
        });
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Neural Network Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Hello Text */}
              <div 
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <span className="text-[#c0f748] text-lg font-medium tracking-widest uppercase">
                  Hello, I'm
                </span>
              </div>
              
              {/* Name */}
              <div 
                className={`space-y-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  DAKSHBIR
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight gradient-text" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  SINGH KAPOOR
                </h1>
              </div>
              
              {/* Title */}
              <div 
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '600ms' }}
              >
                <p className="text-xl sm:text-2xl text-gray-300 font-light">
                  AI/ML Research Engineer <span className="text-[#c0f748]">&</span> Data Scientist
                </p>
              </div>
              
              {/* Description */}
              <div 
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '800ms' }}
              >
                <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                  Crafting intelligent systems that bridge the gap between data and discovery. 
                  Specializing in deep learning, generative AI, research, and cloud-native solutions.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '1000ms' }}
              >
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-secondary">
                  Get In Touch
                </a>
              </div>
              
              {/* Social Links */}
              <div 
                className={`flex gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '1200ms' }}
              >
                <a 
                  href="https://www.linkedin.com/in/dakshbir-singh-kapoor-26210b286/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#c0f748] hover:border-[#c0f748] transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/Dakshbir" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#c0f748] hover:border-[#c0f748] transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://leetcode.com/u/Dakshbir/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#c0f748] hover:border-[#c0f748] transition-all duration-300 hover:scale-110"
                >
                  <Code2 size={20} />
                </a>
                <a 
                  href="https://gist.github.com/Dakshbir/4acb5f5d739ef8f92f062b44882b2e1a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#c0f748] hover:border-[#c0f748] transition-all duration-300 hover:scale-110"
                  title="Gist"
                >
                  <FileText size={20} />
                </a>
              </div>
            </div>
            
            {/* Right Side - Decorative Element */}
            <div className="hidden lg:flex justify-center items-center">
              <div 
                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: '600ms' }}
              >
                {/* Glowing Circle */}
                <div className="w-80 h-80 rounded-full border border-[#c0f748]/20 animate-pulse-glow flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-[#c0f748]/30 flex items-center justify-center animate-float">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#c0f748]/20 to-transparent flex items-center justify-center">
                      <span className="text-5xl font-bold text-[#c0f748] text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        GSoC<br/>'25
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-[#161616] border border-[#c0f748]/30 text-[#c0f748] text-sm font-medium animate-float">
                  Microsoft
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-[#161616] border border-[#c0f748]/30 text-[#c0f748] text-sm font-medium animate-float" style={{ animationDelay: '1s' }}>
                  Research
                </div>
                <div className="absolute top-1/2 -right-8 px-4 py-2 rounded-full bg-[#161616] border border-[#c0f748]/30 text-[#c0f748] text-sm font-medium animate-float" style={{ animationDelay: '2s' }}>
                  AI/ML
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-400 hover:text-[#c0f748] transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1500ms' }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </div>
      </button>
    </section>
  );
};

export default Hero;
