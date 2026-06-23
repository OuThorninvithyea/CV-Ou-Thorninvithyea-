import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import { education, certifications } from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-4"
      >
        # Education
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-8"
      >
        Education & Certifications
      </motion.h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary-500" />
            Academic Background
          </h3>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="mb-4">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.institution}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {edu.description}
                </p>
                  <div className={`grid gap-6 ${edu.achievements.length > 0 ? "md:grid-cols-2" : ""}`}>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                            className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-mono border border-slate-200 dark:border-slate-700"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    {edu.achievements.length > 0 && (
                      <div>
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-slate-400" />
                          Achievements
                        </h5>
                        <ul className="space-y-1.5">
                        {edu.achievements.map((a) => (
                          <li
                            key={a}
                              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary-500" />
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center group hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="inline-flex p-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1 text-sm">
                  {cert.name}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">
                  {cert.issuer}
                </p>
                {cert.description && (
                  <p className="text-slate-400 dark:text-slate-500 text-xs mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                )}
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-mono">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
