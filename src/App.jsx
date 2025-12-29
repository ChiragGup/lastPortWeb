import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github } from 'lucide-react';
import Contact from './Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React.js', color: 'from-blue-100 to-blue-200 text-blue-700' },
    { name: 'JavaScript', color: 'from-yellow-100 to-yellow-200 text-yellow-700' },
    { name: 'HTML/CSS', color: 'from-orange-100 to-orange-200 text-orange-700' },
    { name: 'Tailwind CSS', color: 'from-teal-100 to-teal-200 text-teal-700' },
    { name: 'Next.js', color: 'from-gray-100 to-gray-200 text-gray-800' },
    { name: 'Git/GitHub', color: 'from-pink-100 to-pink-200 text-pink-700' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Smart Search Dashboard',
      description:
        'A responsive frontend dashboard that fetches data from a public API and supports real-time, case-insensitive search filtering with clean UI.',
      tech: ['React', 'API Integration', 'Tailwind CSS'],
      demo: 'https://search-dash-board.vercel.app/',
      github: 'https://github.com/ChiragGup/search-dashboard',
      image: '/dashboard.png',
    },
   
    {
      id: 2,
      title: 'E-Commerce Website',
      description:
        'A frontend e-commerce application built with React and Context API featuring product listing, add-to-cart functionality, and responsive UI.',
      tech: ['React', 'Context API', 'Tailwind CSS'],
      demo: 'https://e-commerce-red-chi-93.vercel.app/',
      github: 'https://github.com/ChiragGup/e-commerce',
      image: '/ecommerce.png',
    },
     {
      id: 3,
      title: 'Personal Portfolio Website',
      description:
        'A modern, fully responsive personal portfolio website built with React.js and Tailwind CSS, showcasing projects, skills, and contact information in a clean and professional UI.',
      tech: ['Reactjs', 'Tailwind CSS'],
      demo: 'https://last-port-web.vercel.app/',
      github: 'https://github.com/ChiragGup/lastPortWeb',
      image: '/portfolio.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>

            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === section
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
              <a
                href="https://github.com/ChiragGup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <Github size={20} />
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="pt-16 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Chirag Gupta
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Frontend Developer passionate about crafting responsive and
            user-friendly web experiences
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-700">
            I'm an enthusiastic Frontend Developer with hands-on experience in building modern web applications using React.js, Next.js, and Tailwind CSS.

My expertise lies in creating clean UI components, integrating APIs, and optimizing performance for a seamless user experience.

Beyond coding, I focus on writing maintainable code, following best practices, and constantly learning to sharpen my skills as a developer.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/myPhoto.jpg"
              alt="Profile"
              className="w-72 h-72 rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`w-40 h-32 flex items-center justify-center rounded-2xl shadow-lg bg-gradient-to-r ${skill.color} font-semibold`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-4">
          {projects.map((project) => (
            <div key={project.id} className="shadow-lg rounded-xl overflow-hidden">
              <img src={project.image} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <a href={project.demo} target="_blank" className="text-blue-600">
                    <ExternalLink size={16} />
                  </a>
                  <a href={project.github} target="_blank" className="text-gray-800">
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App;
