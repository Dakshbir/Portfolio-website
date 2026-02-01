import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#2a2a2a]/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a 
                href="#home" 
                className="text-xl font-bold text-white hover:text-[#c0f748] transition-colors"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                DSK<span className="text-[#c0f748]">.</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <a 
                  href="https://drive.google.com/file/d/1xSampleResumeLink/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#c0f748] transition-colors text-sm"
                >
                  <Download size={16} />
                  CV
                </a>
                <a 
                  href="#contact"
                  className="btn-primary text-sm py-2.5 px-6"
                >
                  Hire Me
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-lg bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#c0f748] hover:border-[#c0f748]/50 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-2xl font-semibold text-white hover:text-[#c0f748] transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                fontFamily: 'Oswald, sans-serif',
                transitionDelay: `${index * 50}ms`
              }}
            >
              {link.label}
            </a>
          ))}
          
          <div className={`flex gap-4 mt-4 transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <a 
              href="https://drive.google.com/file/d/1xSampleResumeLink/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#c0f748] transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
          
          <a 
            href="#contact"
            onClick={handleLinkClick}
            className={`btn-primary mt-4 transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
