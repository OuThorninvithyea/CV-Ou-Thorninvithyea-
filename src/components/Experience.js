import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications serving 100K+ users. Implemented microservices architecture and improved system performance by 40%.",
      achievements: [
        "Architected and deployed cloud-native applications using AWS services",
        "Mentored junior developers and established code review processes",
        "Reduced deployment time by 60% through CI/CD pipeline optimization",
        "Collaborated with cross-functional teams to deliver features on time",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations LLC",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects, focusing on React frontend and Node.js backend development.",
      achievements: [
        "Built responsive web applications with React and TypeScript",
        "Designed RESTful APIs and integrated third-party services",
        "Improved application performance through code optimization",
        "Participated in agile development processes and sprint planning",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Git",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      description:
        "Started career in a fast-paced startup environment, contributing to various projects and learning modern development practices.",
      achievements: [
        "Contributed to frontend development using React and JavaScript",
        "Assisted in database design and backend API development",
        "Participated in code reviews and learned best practices",
        "Supported deployment and maintenance of web applications",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "MySQL",
        "HTML/CSS",
        "Bootstrap",
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
