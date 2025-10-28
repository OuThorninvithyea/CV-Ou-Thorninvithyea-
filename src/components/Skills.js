import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      gradient: "from-gray-300 to-gray-500",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Node.js", level: 65 },
      ],
    },
    {
      title: "Software Engineering",
      gradient: "from-gray-400 to-gray-600",
      skills: [
        { name: "Problem Solving", level: 85 },
        { name: "Data Structures & Algorithms", level: 75 },
        { name: "Design Patterns", level: 70 },
        { name: "Code Debugging", level: 85 },
        { name: "API Integration (REST)", level: 80 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      title: "Development Tools",
      gradient: "from-gray-500 to-gray-700",
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Chrome DevTools", level: 80 },
        { name: "NPM / Package Management", level: 85 },
        { name: "Testing (Jest)", level: 70 },
        { name: "ESLint / Prettier", level: 80 },
      ],
    },
    {
      title: "Software Development Lifecycle",
      gradient: "from-gray-600 to-gray-800",
      skills: [
        { name: "Agile / Scrum", level: 80 },
        { name: "Code Reviews", level: 75 },
        { name: "Requirements Analysis", level: 70 },
        { name: "Documentation", level: 75 },
        { name: "Version Control", level: 85 },
        { name: "Team Collaboration", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.gradient} mr-3`}
                ></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Software Development",
              "Web Development",
              "Database Design",
              "Performance Optimization",
              "Code Refactoring",
              "Debugging & Troubleshooting",
              "Unit Testing",
              "Cross-Browser Compatibility",
              "Technical Documentation",
              "Continuous Learning",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-black text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
