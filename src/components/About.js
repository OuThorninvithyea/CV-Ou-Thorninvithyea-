import React from "react";
import { motion } from "framer-motion";
import { User, Target, Award, Coffee } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Coffee className="w-6 h-6" />,
      number: "2+",
      label: "Years Experience",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "15+",
      label: "Projects Completed",
    },
    {
      icon: <Target className="w-6 h-6" />,
      number: "100%",
      label: "Client Satisfaction",
    },
    {
      icon: <User className="w-6 h-6" />,
      number: "5+",
      label: "Team Collaborations",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-black/10 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Professional Summary
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Passionate Software Engineer with 2+ years of experience in
                  designing, developing, and maintaining web applications. I
                  specialize in React and JavaScript, with strong skills in
                  problem-solving, debugging, and software architecture. My work
                  involves writing clean code, conducting code reviews, and
                  collaborating with teams to deliver scalable solutions.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  My expertise includes full software development lifecycle,
                  from requirements gathering and system design to
                  implementation, testing, and deployment. I work with version
                  control systems, participate in agile methodologies, optimize
                  application performance, and continuously learn new
                  technologies to stay current in the field.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Redux/Zustand",
                    "ESLint/Prettier",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-black rounded-xl mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
