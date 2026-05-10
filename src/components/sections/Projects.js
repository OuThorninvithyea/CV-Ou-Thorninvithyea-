import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";

const Projects = () => {

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
                {/* Project Image/Video */}
                <div className="relative overflow-hidden aspect-video">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
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

                  {/* Instructions if available */}
                  {project.instructions && (
                    <div className="mb-6 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <p className="text-xs text-blue-800 leading-relaxed font-medium">
                        <span className="font-bold underline decoration-blue-300">
                          How to try it:
                        </span>{" "}
                        {project.instructions}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-xs sm:text-sm font-medium"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}

                    {project.webDemo && (
                      <a
                        href={project.webDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r ${project.gradient} text-black rounded-lg hover:shadow-lg transition-all duration-200 text-xs sm:text-sm font-medium`}
                      >
                        <ExternalLink size={14} />
                        Web Demo
                      </a>
                    )}

                    {project.mobileDemo && (
                      <a
                        href={project.mobileDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-all duration-200 text-xs sm:text-sm font-medium border border-gray-200`}
                      >
                        <ExternalLink size={14} />
                        Mobile App
                      </a>
                    )}

                    {!project.webDemo &&
                      !project.mobileDemo &&
                      project.demo &&
                      project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r ${project.gradient} text-black rounded-lg hover:shadow-lg transition-all duration-200 text-xs sm:text-sm font-medium`}
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}

                    {(!project.github || project.github === "#") &&
                      !project.webDemo &&
                      !project.mobileDemo &&
                      (!project.demo || project.demo === "#") && (
                        <button
                          type="button"
                          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed text-xs sm:text-sm font-medium"
                          aria-disabled="true"
                        >
                          Coming Soon
                        </button>
                      )}
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
            href="https://github.com/OuThorninvithyea?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            aria-label="View All Projects on GitHub"
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
