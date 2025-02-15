export const portfolioData = {
  personal: {
    name: "Sepehr Mobayen",
    title: "Data Anlayst/Web Developer",
    bio: "I'm a data analyst with a web development backgroundm transforming complex data into clear, actionable insights.",
    email: "sepehrxm@gmail.com",
    github: "https://github.com/sepehrxm",
    linkedin: "https://linkedin.com",
    resume: "" // Add your resume URL here
  },
  skills: [
    {
      id: 1,
      category: "Data analysis",
      icon: "Briefcase",
      color: "blue",
      technologies: ["R", "Stata", "Eviews", "Power Bi"]
    },
    {
      id: 2,
      category: "Web Development",
      icon: "Code",
      color: "green",
      technologies: ["Next" ,"React" , "TypeScript", "Tailwind CSS", "HTML5", "CSS3","Node.js", "Express"]
    },
    {
      id: 3,
      category: "Frontend Development",
      icon: "User",
      color: "purple",
      technologies: ["Git", "Docker", "Agile Methodologies"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Weather App",
      description: "A web application built with React",
      image: "/wImg.png",
      link: "../public/wImg.png",
      technologies: ["React", "Node.js"],
      featured: true
    },
    {
      id: 2,
      title: "Movie App",
      description: "A web application built with React and Node.js",
      image: "/mImg.png",
      link: "https://sepehrxm.github.io/movieapp/",
      technologies: ["React", "Node.js"],
      featured: true
    }
  ]
};