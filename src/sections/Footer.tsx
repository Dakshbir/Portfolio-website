import { Heart, ArrowUp, Linkedin, Github, Code2, ExternalLink, Youtube, FileText } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dakshbir-singh-kapoor-26210b286/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Dakshbir', label: 'GitHub' },
    { icon: Code2, href: 'https://leetcode.com/u/Dakshbir/', label: 'LeetCode' },
    { icon: ExternalLink, href: 'https://codeforces.com/profile/dakshbir', label: 'Codeforces' },
    { icon: FileText, href: 'https://gist.github.com/Dakshbir/4acb5f5d739ef8f92f062b44882b2e1a', label: 'Gist' },
    { icon: Youtube, href: 'https://www.youtube.com/watch?v=WOB1sP4JKfU', label: 'YouTube' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center mb-12">
            {/* Name */}
            <h3 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text animate-gradient-flow"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              DAKSHBIR SINGH KAPOOR
            </h3>
            
            {/* Tagline */}
            <p className="text-gray-400 mb-6 max-w-lg">
              AI/ML Research Engineer & Data Scientist crafting intelligent systems 
              that bridge the gap between data and discovery.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#c0f748] hover:border-[#c0f748] transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            {/* Quick Links */}
            <nav className="flex flex-wrap justify-center gap-6 mb-8">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#c0f748] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c0f748] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#2a2a2a]">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 Dakshbir Singh Kapoor. All rights reserved.
            </p>
            
            {/* Made With Love */}
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Designed & Built with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </p>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-[#c0f748] transition-colors duration-300 group"
            >
              <span className="text-sm">Back to Top</span>
              <div className="w-8 h-8 rounded-full bg-[#161616] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c0f748] group-hover:bg-[#c0f748]/10 transition-all duration-300">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
