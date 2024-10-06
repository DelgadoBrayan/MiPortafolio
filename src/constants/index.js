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
  carrent,
  jobit,
  tripguide,
  express,
  jsonwebtoken,
  strooper,
  volleyball
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DataBase MSQL",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DataBase MongoDB",
    icon: creator,
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
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name:"Express",
    icon: express
  },
  {
    name:"Json Web Token",
    icon:jsonwebtoken
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Front End and Back End Developer",
    company_name: "Sena",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - September 2024",
    points: [
      "I may not have professional experience yet, but during my training projects, I successfully carried out various tasks and gained valuable hands-on skills",
      "On the backend side, perform the services for the intercenter game mode.",
      "I created the services, which returned the data to show in the graphs.",
      "On the Front End side, I was in charge of the entire player part.",
      "In the Front End I implemented the logic for the intercenter game mode.",
    ],
  }
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
    name: "GO SPORT",
    description:
      "This web and mobile platform is designed for the creation, organization, and real-time monitoring of futsal championships at SENA. It provides a complete experience for both organizers and players, from setting up tournaments to tracking live statistics, ensuring smooth management and a seamless user experience",
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
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DelgadoBrayan/GOSPORT",
  },
  {
    name: "route optimization",
    description:
      "This project is designed to optimize a worker's delivery routes, selecting delivery points and calculating the distance and price for each one. The system takes into account all the selected points and generates an optimal route that passes through all deliveries, minimizing the distance traveled. In addition, it has an authentication system to log in",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Sequalize",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/DelgadoBrayan/OptimizacionDeRutas",
  },
  {
    name: "Document management",
    description:
      "This project aims to solve document management issues in Globant's educational area. Currently, they use Drive, leading to data duplication and access challenges. The system provides a comprehensive solution with roles for administrators, secretaries, and employees, streamlining document handling and access",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Multer",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/DelgadoBrayan/GestionDocumental",
  },
  {
    name: "Strooper",
    description:
      "Strooper is an interactive game where users engage in a modified version of the Stroop test. Players must identify and select the names of colors that are correctly written in their corresponding color, challenging their cognitive processing and attention to detail.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: strooper,
    source_code_link: "https://github.com/DelgadoBrayan/Stroper",
  },
  {
    name: "volleyball points",
    description:
      "This project simplifies scoring in volleyball matches, allowing the scorekeeper to track points, sets, and winners. It also includes a stopwatch and applies rules like extending the game if teams reach 24 points until one wins by two",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: volleyball,
    source_code_link: "https://github.com/DelgadoBrayan/PuntosVoleibol",
  },
];

export { services, technologies, experiences, testimonials, projects };
