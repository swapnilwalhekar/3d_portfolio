import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  trinesis,
  crescendo,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Javascript",
    icon: web,
  },
  {
    title: "React JS",
    icon: mobile,
  },
  {
    title: "Redux",
    icon: backend,
  },
  {
    title: "React Three Fiber",
    icon: creator,
  },
  {
    title: "HTML",
    icon: backend,
  },
  {
    title: "CSS",
    icon: creator,
  },
  {
    title: "Java",
    icon: web,
  },
  {
    title: "SQL",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Trinesis Technologies Pvt. Ltd.",
    icon: trinesis,
    iconBg: "#E6DEDD",
    date: "June 2022 - Feb 2023",
    pointTitle: [
      "Frontend Development",
      "Performance Optimization",
      "Cross-Platform Compatibility",
      "Team Collaboration",
    ],

    points: [
      "Developed dynamic and responsive frontend applications using React JS.",
      "Optimized website performance through efficient coding practices, code splitting, lazy loading, and other performance tuning techniques.",
      "Ensured seamless functionality and appearance across multiple platforms and devices, including desktop, mobile, and tablets.",
      "Collaborated effectively with cross-functional teams including designers, backend developers, and project managers to deliver high-quality solutions.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Crescendo Worldwide Pvt. Ltd.",
    icon: crescendo,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    pointTitle: [
      "Collaborative ReactJS Development",
      "Reusable Component Development",
      "State Management Expertise",
      "Responsive Web Design Implementation",
      "Feature Development and Enhancement",
      "React Three Fiber Integration",
    ],
    points: [
      "Collaborating with the development team to create captivating user interfaces using ReactJS, HTML, CSS, and JavaScript.",
      "Developing reusable and modular components to enhance the overall efficiency and maintainability of the codebase.",
      "Utilizing React Hooks for state management, resulting in a seamless user experience.",
      "Implementing responsive web designs, ensuring optimal performance across various devices and screen sizes.",
      "Contributing to the development of new features and improvements in line with project requirements and deadlines.",
      "Integrating and utilizing React Three Fiber for 3D graphics and visualizations within React applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
