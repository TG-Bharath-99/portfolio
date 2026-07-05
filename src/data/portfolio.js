import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Trophy,
  Award,
  Flame,
  Users,
  Star,
} from "lucide-react";

export const personalInfo = {
  name: "Ummadi Bharath",
  roles: [
    "Full Stack MERN Developer",
    "Web Developer",
    "Software Developer",
  ],
  tagline:
    "Building scalable, responsive, and user-focused web applications with the MERN Stack.",
  about:
    "I am a third-year Computer Science Engineering student at SASTRA Deemed University with a strong passion for full-stack web development and problem solving. I specialize in building scalable, responsive, and modern web applications using the MERN stack. I enjoy transforming ideas into real-world products while continuously improving my Data Structures & Algorithms skills and learning new technologies to become a better software engineer.",
};

export const contactInfo = {
  email: "ummadibharath07@gmail.com",
  phone: "+91 8019704685",
  location: "Proddatur, Andhra Pradesh, India",
  github: "https://github.com/TG-Bharath-99",
  linkedin: "https://www.linkedin.com/in/bharath-ummadi-0a0998378",
};

export const education = {
  university: "SASTRA Deemed University",
  degree: "Bachelor of Technology (Computer Science Engineering)",
  year: "Third Year",
  cgpa: "8.65",
};

export const stats = [
  { label: "LeetCode Problems", value: "296+" },
  { label: "LeetCode Rating", value: "1481" },
  { label: "CGPA", value: "8.65" },
  { label: "Projects Built", value: "5+" },
];

export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "C++", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Neon Database"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Cloudinary",
      "Vercel",
      "Netlify",
      "Render",
    ],
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const projects = [
  {
    title: "FreelanceHub",
    description:
      "A MERN-based freelance marketplace connecting clients and developers with real-time collaboration features.",
    features: [
      "JWT Authentication",
      "Role-Based Login",
      "Project Posting",
      "Proposal/Bidding System",
      "Notifications",
      "Search & Filters",
      "Cloudinary Uploads",
      "Responsive UI",
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "LMS Portal",
    description:
      "A full-stack Learning Management System with authentication, course enrollment, and progress tracking.",
    features: [
      "JWT Authentication",
      "Course Enrollment",
      "Progress Tracking",
      "Dashboard",
      "Responsive UI",
    ],
    techStack: ["FastAPI", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
];

export const achievements = [
  {
    icon: Trophy,
    title: "296+ LeetCode Problems",
    description:
      "Solved 296+ problems on LeetCode, building strong problem-solving and algorithmic skills.",
  },
  {
    icon: Star,
    title: "LeetCode Rating: 1481",
    description:
      "Achieved a contest rating of 1481 on LeetCode through consistent competitive programming practice.",
  },
  {
    icon: Award,
    title: "2× Code Clash Winner",
    description:
      "Won the Code Clash coding competition twice, demonstrating competitive programming excellence.",
  },
  {
    icon: Users,
    title: "GFG Campus Mantri",
    description:
      "Selected as GeeksforGeeks Campus Mantri, leading coding culture and community building on campus.",
  },
  {
    icon: Flame,
    title: "GeekStreak60 Completed",
    description:
      "Successfully completed the NPCI × GeeksforGeeks GeekStreak60 challenge with a 60-day coding streak.",
  },
];

export const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Achievements", href: "achievements" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];
