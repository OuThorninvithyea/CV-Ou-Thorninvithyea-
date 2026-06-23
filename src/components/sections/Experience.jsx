import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";
import { experience, historyTimeline } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-4"
      >
        # Experience
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-8"
      >
        Work History
      </motion.h2>

      <div className="space-y-10">
        {experience.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {job.role}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 ml-9">
                  <span>{job.company}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 ml-9">
              {job.description}
            </p>

            <div className="ml-9">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {job.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5 ml-9">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-mono border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary-500" />
          Career Timeline
        </h3>

        <div className="relative">
          <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8">
            {historyTimeline.map((entry) => (
              <div key={entry.year} className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-primary-500 bg-white dark:bg-slate-950" />
                <div>
                  <span className="text-xs font-mono text-primary-600 dark:text-primary-400 mb-1 block">
                    {entry.year}
                  </span>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    {entry.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
