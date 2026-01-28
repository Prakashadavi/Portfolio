import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer,   FaProjectDiagram, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot,FaMicrochip} from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';
import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.png";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.png";
import projectImg6 from "../assets/project6.png";

export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Javascript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: "Data Structures & Algorithms",
    icon: FaProjectDiagram,
    description:
      "Strong understanding of arrays, linked lists, stacks, queues, trees, graphs, and algorithms.",
    tags: ["DSA", "Problem Solving", "Time Complexity"]
  },
  {
    title: "CS Fundamentals",
    icon: FaMicrochip,
    description:
      "Solid knowledge of Operating Systems, DBMS, Computer Networks, and OOP concepts.",
    tags: ["OS", "DBMS", "CN", "OOP"]
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS Code', 'Vercel', 'MySQL Workbench','Postman','Thunder Client']
  }
];



export const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://my-frontend-vert.vercel.app",
    code: "https://github.com/Prakashadavi/-Ecommerce-website.git",
  },
  {
    title: "Movie Ticket Booking App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Clerk", "Express", "Tailwind CSS", "MongoDB"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://my-quick-book.vercel.app",
    code: "https://github.com/Prakashadavi/Movie-Ticket-Booking.git",
  },
  {
    title: "Social Media App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg3,
    tech: ["WebSockets", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://portfolio-nine-puce-31.vercel.app",
    code: "https://github.com/Prakashadavi/Portfolio.git",
  },
  {
    title: "Chess Game",
    description: "A real-time multiplayer chess game built with WebSockets.",
    image: projectImg5,
    tech: ["Socket.IO", "HTML", "CSS", "Javascript"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "https://github.com/Prakashadavi/Chess.git",
  },
  {
    title: "Movie Recommender System",
    description: "A movie recommender system that suggests personalized movies based on user preferences and similarity algorithms.",
    image: projectImg6,
    tech: ["Python", "Streamlit", "Numpy", "Pandas"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://prakashadavi-movie-recommender-system-app-le2epc.streamlit.app",
    code: "https://github.com/Prakashadavi/Movie-Recommender-System.git",
  }
];


export const workData = [
  {
    role: "Frontend Backend  Developer",
    company: "Pesu  Venture Labs",
    duration: "2026 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mento.",
    color: "purple"
  }
];
