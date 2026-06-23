import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Folder } from "lucide-react";
import { projects } from "../../data/projects";

const ProjectVideo = ({ src, poster, title }) => {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <video
        src={shouldLoad ? src : undefined}
        poster={poster}
        autoPlay={shouldLoad}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${title} project preview`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-4"
      >
        # Projects
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
      >
        Featured Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl"
      >
        A selection of projects I've built, from concept to production.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group"
          >
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                {project.video ? (
                  <ProjectVideo
                    src={project.video}
                    poster={project.poster}
                    title={project.title}
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 p-2 rounded-lg bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                  {project.icon}
                </div>
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0">
                  {project.webDemo && (
                    <a
                      href={project.webDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} demo`}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-black hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-black hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="text-slate-300 dark:text-slate-600 flex-shrink-0 opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                  />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-mono border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-md text-xs font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {project.webDemo && (
                    <a
                      href={project.webDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                    >
                      <ExternalLink size={12} /> Demo
                    </a>
                  )}
                  {project.mobileDemo && (
                    <a
                      href={project.mobileDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink size={12} /> Mobile
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Github size={12} /> Code
                    </a>
                  )}
                  {!project.github && !project.webDemo && !project.mobileDemo && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                      <Folder size={12} /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/OuThorninvithyea?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-sm"
        >
          <Github size={16} />
          View All on GitHub
          <ArrowUpRight size={14} className="opacity-60" />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
