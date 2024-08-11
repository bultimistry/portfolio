import project1 from '../assets/projects/project1.jpg'
import project2 from "../assets/projects/product2.jpg"
import project3 from "../assets/projects/project3.jpg"
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Experienced Full Stack Developer with a strong background in developing robust web applications. Proficient in both front-end and back-end technologies, with a passion for creating efficient, scalable, and user-friendly solutions. Adept at working in fast-paced environments and collaborating with cross-functional teams to deliver high-quality software.`;

export const ABOUT_TEXT = `I am a motivated and innovative developer with a Master's degree in Computer Applications from Kalinga University. With a strong foundation in both frontend and backend technologies, I have successfully led projects like an Online Examination System, where I spearheaded the design and development of a user-friendly interface using HTML, CSS, and JavaScript. My technical skills span across React.js, Tailwind CSS, Node.js, and various databases like PostgreSQL and MongoDB. I am passionate about creating efficient, scalable applications, as demonstrated by my recent work on an AI Summarizer web application. I thrive in collaborative environments and am eager to contribute to impactful projects that challenge my skills and allow me to grow as a professional`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    
  },
  {
    year: "2022 - 2023",  
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Product_List",
    image: project1,
    description:
      "The website Product List is a web application for displaying a list of products The primary use of this website is to showcase a list of products, potentially for an e-commerce or catalog application, allowing users to view product details in a clean, responsive interface",
   
      technologies: ["React js", "Vercel", "CSS Modules", "JavaScript"],
      link: 'https://product-list-drab.vercel.app/', 
      
  },
  {
    title: "Movieland",
    image: project2,
    description:
      "The website Movieland is a web application designed for browsing and discovering movies The site allows users to search for movies, view details, and explore movie-related information in an interactive and user-friendly interface. ",
    technologies: ["React js ", "CSS Modules", "CSS Modules", "JavaScript", "APIs"],

    link: 'https://movieland-silk-seven.vercel.app/'
  },
  {
    title: "AI-Summarizer",
    image: project3,
    description:
      "The AI Summarize is a web application designed to generate concise summaries of large text inputs ",
    technologies: ["React.JS", "Tailwind CSS", "Node.js", "Express.js", "APIs"],
    link: 'https://ai-summarize-five.vercel.app/'
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "shitla para pakhanjore kanker chattisgarh",
  phoneNo: "+91 8305346082 ",
  email: "bultimistry1122@gmail.com",
};
