import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    // {
    //   degree: "Master of Computer Science",
    //   institution: "Stanford University",
    //   location: "Stanford, CA",
    //   period: "2017 - 2019",
    //   gpa: "3.8/4.0",
    //   description:
    //     "Specialized in Software Engineering and Artificial Intelligence. Completed advanced coursework in algorithms, machine learning, and distributed systems.",
    //   courses: [
    //     "Advanced Algorithms",
    //     "Machine Learning",
    //     "Distributed Systems",
    //     "Software Architecture",
    //   ],
    //   achievements: [
    //     "Dean's List",
    //     "Graduate Research Assistant",
    //     "Published 2 Research Papers",
    //   ],
    // },
    {
      degree: "Bachelor of Software Engineering",
      institution: "Limkokwing University",
      location: "Phnom Penh, Cambodia",
      period: "2024 - 2027",
      gpa: "3.5",
      description:
        "Majoring in Software Engineering with a strong focus on front-end development, UI engineering, and modern web technologies.",
      courses: [
        "Software Engineering",
        "Web Development",
        "Human-Computer Interaction",
        "Data Structures & Algorithms",
      ],
      achievements: [],
    },
  ];

  const certifications = [
    {
      name: "JavaScript Master Certificate",
      issuer: "Udemy",
      date: "2025",
      description:
        "Mastery program covering modern JavaScript (ES6+), asynchronous patterns, modules, tooling, and best practices.",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      name: "Figma UI/UX Design Certificate",
      issuer: "Udemy",
      date: "2024",
      description:
        "Hands-on training in Figma for wireframes, design systems, components, and developer handoff.",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      name: "Data Structures Master Certificate",
      issuer: "Udemy",
      date: "2025",
      description:
        "In-depth course on arrays, hash tables, stacks, queues, trees, and graphs with Big-O analysis.",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-400",
    },
    {
      name: "React Developer Certificate",
      issuer: "Udemy",
      date: "2025",
      description:
        "Building production-grade React apps with Next.js, routing, data fetching, performance, and deployment.",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-sky-500 to-blue-400",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center"
          >
            <GraduationCap className="w-8 h-8 mr-3 text-black" />
            Academic Background
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-black font-semibold mb-1">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-500 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="text-gray-600 font-medium">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-center text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 flex items-center"
          >
            <Award className="w-8 h-8 mr-3 text-black" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${cert.gradient} text-black mb-4`}
                >
                  {cert.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                {cert.description && (
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                )}
                <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
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
