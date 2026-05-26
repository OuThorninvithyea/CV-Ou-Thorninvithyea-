import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Target, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, number: "2+", label: "Years Experience" },
    { icon: <Award className="w-5 h-5" />, number: "15+", label: "Projects Completed" },
    { icon: <Target className="w-5 h-5" />, number: "100%", label: "Client Satisfaction" },
    { icon: <Users className="w-5 h-5" />, number: "5+", label: "Team Collaborations" },
  ];

  const techTags = ["React", "TypeScript", "Go", "Laravel", "Fiber", "REST APIs", "Tailwind CSS", "PostgreSQL"];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">Who <span className="text-gray-400">I Am</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-50 rounded-2xl -z-10" />
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-black mb-4">Professional Summary</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">Passionate Software Engineer with 2+ years of experience in full-stack development, specializing in React, Go, Laravel, and modern API engineering. Expert in crafting accessible, performant interfaces that deliver exceptional user experiences and drive business growth.</p>
                <p className="text-gray-600 mb-5 leading-relaxed">My expertise spans the full software development lifecycle — from requirements gathering and system design to implementation, testing, and deployment. I thrive in agile environments and continuously explore emerging technologies.</p>

                <div className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-black mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black" />Engineering in the AI Era (2026)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Embracing the future of software engineering through AI/ML model integration for code generation and automated testing. Focused on MLOps for model lifecycle management, CI/CD for AI pipelines, and explainable AI with strict data governance.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {techTags.map((tech, i) => (
                    <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="px-3.5 py-1.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors cursor-default">{tech}</motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all flex flex-col items-center justify-center text-center">
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center mb-3">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-black mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
