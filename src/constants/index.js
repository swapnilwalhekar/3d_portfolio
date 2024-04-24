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
  ecomm,
  natours,
  currency,
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
    title: "Node JS",
    icon: backend,
  },
  {
    title: "Mongo DB",
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
    title: "Redux",
    icon: web,
  },
  {
    title: "React Three Fiber",
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
    name: "Eat & Split",
    description:
      "Eat and Split is a user-friendly web application developed with splitting bills and expenses among friends together. This intuitive application provides a hassle-free way to calculate each individual's share of the total bill.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "virtualdom",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/swapnilwalhekar/eat-n-split",
  },
  {
    name: "Drum Kit",
    description:
      "The Drum Kit project is a responsive web app where users play virtual drums via mouse clicks or keyboard keys. It's made with HTML, CSS, and JavaScript, offering dynamic sound and serving as both an educational tool and portfolio piece.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/swapnilwalhekar/Drum-kit",
  },
  {
    name: "Library Management",
    description:
      "The LMS is a web application developed with ReactJS and Redux, designed to simplify the process of managing books in a library. This intuitive system allows users to add books to their cart and remove them selection process.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/swapnilwalhekar/Library-Management-System",
  },
  {
    name: "E - Commerce ",
    description:
      "I've architected a dynamic e-commerce dashboard solution, harnessing the capabilities of the MERN (MongoDB, Express.js, React.js, Node.js) stack. React serves as the frontend framework, enhanced with custom CSS styling for a polished and intuitive user interface.",
    tags: [
      {
        name: "frontend",
        color: "blue-text-gradient",
      },
      {
        name: "backend",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/swapnilwalhekar/E-Commerce-Frontend",
  },
  {
    name: "Natours",
    description:
      "I have crafted a robust API using Node.js, MongoDB, and advanced Mongoose in conjunction with Express for the Natours application. The development process involved sophisticated data modeling techniques, ensuring the efficiency and scalability of the system.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "backend",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/swapnilwalhekar/natours-projetcs",
  },
  {
    name: "Currency Convertor",
    description:
      "The Currency Converter is a simplify the process of converting currencies from one denomination to another. This versatile tool provides users with real-time exchange rate data and intuitive functionality, allowing for seamless currency conversions with accuracy and efficiency.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: currency,
    source_code_link: "https://github.com/swapnilwalhekar/currency-convertor",
  },
];

export { services, technologies, experiences, testimonials, projects };
