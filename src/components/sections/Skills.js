import React from "react";
import { motion } from "framer-motion";
import { skillCategories, futureReadyCompetencies } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-4"
      >
        # Skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-8"
      >
        Technical Skills
      </motion.h2>

      <div className="md:columns-2 gap-5 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group mb-5 break-inside-avoid-column"
          >
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-primary-500" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                    viewport={{ once: true }}
                    className="relative group/skill"
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.8,
                          delay: categoryIndex * 0.08 + skillIndex * 0.04,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-primary-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider">
          Future-Ready Competencies
        </h3>
        <div className="flex flex-wrap gap-2">
          {futureReadyCompetencies.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-mono border border-slate-200 dark:border-slate-700"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
