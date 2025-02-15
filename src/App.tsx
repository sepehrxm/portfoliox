import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageSquare } from 'lucide-react';
import { portfolioData } from './data/portfolio';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personal, skills, projects } = portfolioData;

  const iconMap: { [key: string]: React.ReactNode } = {
    Code: <Code className="w-8 h-8 mb-4" />,
    User: <User className="w-8 h-8 mb-4" />,
    Briefcase: <Briefcase className="w-8 h-8 mb-4" />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Portfolio</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">About</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Hi, I'm {personal.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {personal.bio}
              </p>
              <div className="flex space-x-4">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" 
                   className="p-2 text-gray-600 hover:text-gray-900">
                  <Github size={24} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                   className="p-2 text-gray-600 hover:text-gray-900">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${personal.email}`}
                   className="p-2 text-gray-600 hover:text-gray-900">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
                alt="Developer workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.id} className="p-6 bg-gray-50 rounded-lg">
                <div className={`text-${skill.color}-600`}>
                  {iconMap[skill.icon]}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                <p className="text-gray-600">{skill.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-sm rounded-md text-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2" />
                    {personal.email}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Available for freelance opportunities
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <a href={`mailto:${personal.email}`}
                   className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8">
                  Send me a message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p>&copy; 2024 {personal.name}. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personal.email}`}
               className="text-gray-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;