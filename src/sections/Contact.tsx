import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code2, ExternalLink, Youtube, FileText } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Store form data in localStorage for viewing
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Log to console for viewing data
    console.log('Contact Form Submissions:', submissions);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dakshbir.singh.ug23@nsut.ac.in', href: 'mailto:dakshbir.singh.ug23@nsut.ac.in' },
    { icon: Phone, label: 'Phone', value: '+91 8130362631', href: 'tel:+918130362631' },
    { icon: MapPin, label: 'Location', value: 'Delhi, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dakshbir-singh-kapoor-26210b286/', color: '#0077b5' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Dakshbir', color: '#c0f748' },
    { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/Dakshbir/', color: '#ffa116' },
    { icon: ExternalLink, label: 'Codeforces', href: 'https://codeforces.com/profile/dakshbir', color: '#c0f748' },
    { icon: FileText, label: 'Gist', href: 'https://gist.github.com/Dakshbir/4acb5f5d739ef8f92f062b44882b2e1a', color: '#c0f748' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/watch?v=WOB1sP4JKfU', color: '#ff0000' },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c0f748]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c0f748]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div 
            className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="section-title">
              GET IN <span>TOUCH</span>
            </h2>
            <div className="w-24 h-1 bg-[#c0f748] mt-4 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Contact Info */}
            <div 
              className={`lg:col-span-2 space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Let's Work <span className="text-[#c0f748]">Together</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Have a project in mind or want to collaborate? I'm always open to discussing 
                  new opportunities and interesting ideas in AI/ML, research, and data science.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#161616] border border-[#2a2a2a] hover:border-[#c0f748]/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#c0f748]/10 flex items-center justify-center group-hover:bg-[#c0f748]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#c0f748]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-[#c0f748] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-500 text-sm mb-4">Follow me on</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#c0f748] hover:border-[#c0f748] transition-all duration-300 hover:scale-110"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div 
              className={`lg:col-span-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <form onSubmit={handleSubmit} className="card-dark">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Project Collaboration / Research Opportunity"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project or research opportunity..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </button>

                {/* View Data Button (for admin) */}
                <button
                  type="button"
                  onClick={() => {
                    const data = localStorage.getItem('contactSubmissions');
                    if (data) {
                      console.log('All Contact Submissions:', JSON.parse(data));
                      toast.info('Check console for submitted data');
                    } else {
                      toast.info('No submissions yet');
                    }
                  }}
                  className="ml-4 text-gray-500 text-sm hover:text-[#c0f748] transition-colors"
                >
                  View Data
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
