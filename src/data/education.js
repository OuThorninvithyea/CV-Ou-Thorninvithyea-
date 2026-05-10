import { Award } from "lucide-react";

export const education = [
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

export const certifications = [
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
