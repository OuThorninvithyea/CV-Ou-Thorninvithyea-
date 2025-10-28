import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Innovators",
      location: "Phnom Penh, Cambodia",
      period: "2023 - Present",
      description:
        "Design, develop, and maintain scalable web applications using React and modern JavaScript. Participate in full software development lifecycle including requirements analysis, system design, coding, testing, debugging, and deployment.",
      achievements: [
        "Develop and maintain responsive web applications serving thousands of users",
        "Write clean, well-documented code following industry best practices and coding standards",
        "Debug and resolve complex software defects using debugging tools and systematic troubleshooting",
        "Collaborate with cross-functional teams in agile environment with daily standups and sprint planning",
        "Conduct code reviews and provide constructive feedback to maintain code quality",
        "Implement automated testing and use Git for version control and collaborative development",
      ],
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Git/GitHub",
      ],
    },
    {
      title: "Junior Front-End Developer",
      company: "Digital Solutions Cambodia",
      location: "Phnom Penh, Cambodia",
      period: "2022 - 2023",
      description:
        "Developed responsive user interfaces and implemented features for web applications. Participated in agile development processes and learned software engineering fundamentals through hands-on coding and mentorship.",
      achievements: [
        "Developed reusable UI components and integrated RESTful APIs for dynamic applications",
        "Participated in daily standups, sprint planning, and retrospectives following agile methodology",
        "Fixed bugs and optimized code to improve application performance and user experience",
        "Learned and applied software design patterns, data structures, and algorithms",
        "Collaborated with senior developers through pair programming and code reviews",
        "Assisted in database schema design and wrote SQL queries for data management",
      ],
      technologies: [
        "React",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Next.js",
        "Git",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-black rounded-full hidden md:block border-4 border-white shadow-lg"></div>

                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                  >
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-black font-semibold mb-1">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-500 mb-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-black mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
