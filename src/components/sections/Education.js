import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import { education, certifications } from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-4">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">Education & <span className="text-gray-400">Certifications</span></h2>
        </motion.div>

        <div className="mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-black text-white"><GraduationCap className="w-5 h-5" /></div>
            <h3 className="text-2xl font-bold text-black">Academic Background</h3>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-black mb-2">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{edu.institution}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{edu.period}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="font-medium text-gray-700">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{edu.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm font-semibold text-black mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-gray-400" />Relevant Coursework</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, ci) => (
                          <span key={ci} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">{course}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-black mb-3 flex items-center gap-2"><Award className="w-4 h-4 text-gray-400" />Achievements</h5>
                      <ul className="space-y-1.5">
                        {edu.achievements.map((a, ai) => (
                          <li key={ai} className="flex items-center gap-2 text-sm text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-black text-white"><Award className="w-5 h-5" /></div>
            <h3 className="text-2xl font-bold text-black">Professional Certifications</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-center group">
                <div className="inline-flex p-3 rounded-xl bg-black text-white shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                <h4 className="font-bold text-black mb-1.5 text-sm">{cert.name}</h4>
                <p className="text-gray-500 text-xs mb-3">{cert.issuer}</p>
                {cert.description && <p className="text-gray-400 text-xs mb-3 leading-relaxed">{cert.description}</p>}
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
