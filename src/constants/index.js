import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  tbc,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcsIcon,
  mysql,
  sequelize,
  ecom,
  warehouseImg,
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
    title: "Software Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Sequelize",
    icon: sequelize,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Software Programmer",
    company_name: "Tata Consultancy Services",
    icon: tcsIcon,
    iconBg: "#383E56",
    date: "October 2020 - June 2022",
    points: [
      "Contributed to various projects involving computer networking, systems management, and server administration.",
      "Worked with Node.js to develop and optimize backend solutions, ensuring high performance and scalability for enterprise-level applications.",
      "Collaborated with teams to design, implement, and maintain backend services for business-critical applications.",
      "Ensured high availability and performance of applications by managing servers and troubleshooting issues.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "The Blu Canton",
    icon: tbc,
    iconBg: "#F5A623",
    date: "March 2024 - December 2024",
    points: [
      "Key backend developer in building the Fashquik product, delivering a seamless quick-commerce experience in fashion.",
      "Integrated Razorpay for seamless payment processing and transaction management.",
      "Implemented various email services for order confirmations and customer notifications.",
      "Developed secure Account Management features and integrated Google Maps API to display products within a 10 km radius, enhancing localized shopping experiences.",
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
    name: "E-commerce Application",
    description:
      "A full-stack e-commerce application where users can browse products, add them to the cart, and proceed to checkout. It includes user authentication, product management, and payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: ecom,
    source_code_link1: "https://github.com/noload/Edgistify_ecom_client.git",
    source_code_link2: "https://github.com/noload/Edgistify_ecom_server.git",
  },
  {
    name: "Warehouse Management System",
    description:
      "A complete MERN stack warehouse management system where users can register, sign in, reset their password, and manage state, city, and warehouse information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
    ],
    image: warehouseImg,
    source_code_link1: "https://github.com/noload/DF_client.git",
    source_code_link2: "https://github.com/noload/DF_server.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
