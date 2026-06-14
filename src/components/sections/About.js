import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Target, Users } from "lucide-react";

const ABOUT_STATS = [
  { icon: <Briefcase className="w-4 h-4" />, number: "2+", label: "Years Experience" },
  { icon: <Award className="w-4 h-4" />, number: "15+", label: "Projects Completed" },
  { icon: <Target className="w-4 h-4" />, number: "100%", label: "Client Satisfaction" },
  { icon: <Users className="w-4 h-4" />, number: "5+", label: "Team Collaborations" },
];

const ABOUT_TECH_TAGS = ["React", "TypeScript", "Go", "Laravel", "Fiber", "REST APIs", "Tailwind CSS", "PostgreSQL", "JWT", "Redis", "Docker"];

const About = () => {

  return (
    <section id="about" className="py-16 lg:py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-4"
      >
        # About
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-8"
      >
        Who I Am
      </motion.h2>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Professional Summary
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Passionate Software Engineer with 2+ years of experience in full-stack development,
            specializing in React, Go, Laravel, and modern API engineering. Expert in crafting
            accessible, performant interfaces that deliver exceptional user experiences and drive
            business growth.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            My expertise spans the full software development lifecycle — from requirements gathering
            and system design to implementation, testing, and deployment. I thrive in agile
            environments and continuously explore emerging technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center"
            >
              <div className="inline-flex p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-3">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {ABOUT_TECH_TAGS.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-mono border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
