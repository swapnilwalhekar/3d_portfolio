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
      "Project Collaboration",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Technological Expertise",
      "Client Communication",
    ],
    points: [
      "Collaborated with diverse clients to understand their unique business requirements and translate them into interactive and responsive web applications.",

      "Ensured optimal user experiences by implementing responsive design principles, making websites accessible across various devices and screen sizes.",

      "Ensured cross-browser compatibility to guarantee a seamless user experience across different browsers, maintaining a consistent and polished look.",

      "Leveraged my expertise in HTML, CSS, and JavaScript to develop and implement user interfaces that not only met but exceeded client expectations.",

      "Maintained clear and effective communication with clients throughout the development process, providing regular updates and incorporating feedback to ensure alignment with project goals.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Crescendo Worldwide Pvt. Ltd.",
    icon: crescendo,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Feb 2024",
    pointTitle: [
      "Collaborative UI Development",
      "Reusable Component Development",
      "State Management Expertise",
      "MERN Stack Application Development",
      "Responsive Web Design Implementation",
      "Feature Development and Enhancement",
      "Collaboration with UX/UI Design",
      "MERN Stack Integration and Communication",
    ],
    points: [
      "Collaborating with the development team to create captivating user interfaces using ReactJS, HTML, CSS, and JavaScript.",

      "Developing reusable and modular components to enhance the overall efficiency and maintainability of the codebase.",

      "Utilizing React Hooks and Redux for state management, resulting in a seamless user experience.",

      "Harnessing the power of the MERN Stack to build robust and scalable applications, leveraging MongoDB for flexible data storage, Express.js for streamlined server-side development, ReactJS for dynamic and interactive user interfaces, and Node.js for high-performance server-side execution.",

      "Implementing responsive web designs, ensuring optimal performance across various devices and screen sizes.",

      "Contributing to the development of new features and improvements in line with project requirements and deadlines.",

      "Working closely with UX/UI designers to transform wireframes and mockups into functional web interfaces.",

      "Implementing end-to-end solutions in the MERN Stack, ensuring seamless integration and communication between frontend and backend components for a unified and efficient application architecture.",
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
