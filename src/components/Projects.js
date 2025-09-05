import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Zap, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin analytics dashboard",
        "Mobile-responsive design",
      ],
      github: "#",
      demo: "#",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-gray-300 to-gray-500",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Socket.io",
        "PostgreSQL",
        "Docker",
      ],
      features: [
        "Real-time collaboration",
        "Advanced project analytics",
        "Team permission management",
        "Automated reporting",
      ],
      github: "#",
      demo: "#",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-gray-400 to-gray-600",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Interactive dashboard for data visualization and analytics with real-time data processing and custom reporting.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      features: [
        "Interactive data visualization",
        "Real-time data processing",
        "Custom report generation",
        "API integration",
      ],
      github: "#",
      demo: "#",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-gray-500 to-gray-700",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gray-300 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`inline-flex p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-black`}
                    >
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.github}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-xs sm:text-sm font-medium"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r ${project.gradient} text-black rounded-lg hover:shadow-lg transition-all duration-200 text-xs sm:text-sm font-medium`}
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
