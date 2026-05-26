import React from "react";
import { motion } from "framer-motion";
import { skillCategories, futureReadyCompetencies } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-4">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Technical Skills</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Technologies and tools I work with daily to build exceptional digital experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: categoryIndex * 0.08 }} viewport={{ once: true, margin: "-50px" }} className="group">
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-black" />
                  <h3 className="text-lg font-bold text-black">{category.title}</h3>
                </div>
                <div className="space-y-3.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: skillIndex * 0.03 }} viewport={{ once: true }} className="relative group/skill">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 0.8, delay: categoryIndex * 0.08 + skillIndex * 0.04, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className="h-full rounded-full bg-black relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-700" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="mt-16 text-center">
          <h3 className="text-xl font-bold text-black mb-6">Future-Ready Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {futureReadyCompetencies.map((skill, index) => (
              <motion.span key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 }} viewport={{ once: true }} whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 shadow-sm hover:bg-black hover:text-white hover:border-black transition-all duration-200">{skill}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
