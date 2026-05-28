import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Folder } from "lucide-react";
import { projects } from "../../data/projects";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A selection of projects I've built, from concept to production</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true, margin: "-50px" }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="group">
              <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-video bg-gray-100">
                  {project.video ? (
                    <video src={project.video} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 p-2 rounded-xl bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.icon}</div>
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.webDemo && <a href={project.webDemo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-black hover:bg-white transition-colors" onClick={(e) => e.stopPropagation()}><ExternalLink size={14} /></a>}
                    {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-black hover:bg-white transition-colors" onClick={(e) => e.stopPropagation()}><Github size={14} /></a>}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-black group-hover:text-gray-600 transition-colors duration-200">{project.title}</h3>
                    <ArrowUpRight size={16} className={`text-gray-300 flex-shrink-0 transition-all duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0 translate-x-1 -translate-y-1"}`} />
                  </div>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md text-xs font-medium border border-gray-100">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && <span className="px-2.5 py-1 bg-gray-50 text-gray-400 rounded-md text-xs">+{project.technologies.length - 4}</span>}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
                    {project.webDemo && <a href={project.webDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-black text-white hover:bg-gray-800 transition-all"><ExternalLink size={12} />Demo</a>}
                    {project.mobileDemo && <a href={project.mobileDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"><ExternalLink size={12} />Mobile</a>}
                    {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-900 text-white hover:bg-gray-800 transition-all"><Github size={12} />Code</a>}
                    {!project.github && !project.webDemo && !project.mobileDemo && <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-400"><Folder size={12} />Coming Soon</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="https://github.com/OuThorninvithyea?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:shadow-lg">
            <Github size={18} />View All on GitHub<ArrowUpRight size={16} className="opacity-60" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
