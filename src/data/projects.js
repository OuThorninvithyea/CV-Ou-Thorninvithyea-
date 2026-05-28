import { Code, Zap, Database } from "lucide-react";

export const projects = [
  {
    title: "bongthom Admin API",
    description:
      "Early-stage admin API built from the ground up with Clean Architecture principles. Features real-time WebSocket communication for live updates, a PostgreSQL-backed data layer with sqlx, and comprehensive i18n/localization via go-i18n \u2014 laying a scalable foundation for production backend systems.",
    technologies: [
      "Go",
      "Fiber v3",
      "PostgreSQL",
      "WebSocket",
      "go-i18n",
      "sqlx",
      "zerolog",
    ],
    features: [
      "Clean Architecture (layered)",
      "Real-time WebSocket events",
      "i18n multi-language support",
      "Structured logging (zerolog)",
    ],
    github: "https://github.com/OuThorninvithyea/bongthom_v1",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    title: "HappyHourHunt",
    description:
      "Premium nightlife discovery platform for Phnom Penh. Features a real-time 'Swarm Map', custom data pipelines for venue scraping, and a high-performance universal UI.",
    video: "/assets/videos/NightLifeapp.MP4",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Tamagui",
      "Google Maps",
    ],
    features: [
      "🌍 Web Version: Instant browser access",
      "📱 Mobile Demo: Android & iOS via Expo Go",
      "🔍 Real-time venue discovery map",
      "✨ Premium dark-mode optimized UI",
    ],
    github: "#",
    webDemo: "https://happyhourhunt.expo.app",
    mobileDemo: "https://expo.dev/@cheashawn/happyhourhunt",
    instructions:
      "Install Expo Go, open the Mobile link, and scan the QR code.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Interactive Web Experience",
    description:
      "A premium, motion-rich web experience showcasing advanced frontend animations and interactive design patterns.",
    video: "/assets/videos/MockUpvideo3.mp4",
    technologies: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Video Integration",
    ],
    features: [
      "Advanced Animations",
      "Smooth Transitions",
      "Interactive UI",
      "Performance Optimized",
    ],
    github: "#",
    webDemo: "https://anatomyclub.store/",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    title: "ANATOMY",
    description:
      "Timeless fashion for the modern individual. Quality craftsmanship meets contemporary design. A premium e-commerce experience.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
    technologies: ["React", "Next.js", "Tailwind CSS", "E-commerce"],
    features: [
      "Premium Collections",
      "Modern Design",
      "Shopping Cart",
      "Responsive Layout",
    ],
    github: "#",
    demo: "https://anatomyclub.store/",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-gray-300 to-gray-500",
  },
  {
    title: "HUSTLE",
    description:
      "Premium Lifestyle & Gear designed for the modern explorer. Brand, Product, and Story woven into one seamless digital experience.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    technologies: ["React", "Next.js", "Vercel", "Framer Motion"],
    features: [
      "Lifestyle Branding",
      "Storytelling UI",
      "High Performance",
      "Interactive Elements",
    ],
    github: "#",
    demo: "https://hustle-website-seven.vercel.app/",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-gray-400 to-gray-600",
  },
  {
    title: "Ecom Web Agency",
    description:
      "High-converting, premium digital experiences that scale. Comprehensive solutions for modern e-commerce brands.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Shopify", "Tailwind CSS", "CRO"],
    features: [
      "Strategy & Design",
      "Custom Development",
      "Growth Optimization",
      "Scalable Storefronts",
    ],
    github: "#",
    demo: "https://website-agency-phi-beryl.vercel.app/",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-gray-500 to-gray-700",
  },
];
