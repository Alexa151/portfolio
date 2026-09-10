/**
 * data.js
 * ------------------------------------------------------------------
 * All personal content for the site lives here, in one place, so the
 * site can be updated without touching HTML/CSS/JS logic.
 
 * ------------------------------------------------------------------
 */

const SITE_DATA = {
  person: {
    name: "Alexa",
    tagline: ["Software Engineer", "Python Developer", "Web Developer"],
    location: "Nigeria",
    email: "dralyz46@gmail.com",
  },

  socials: {
    github: "https://github.com/Ale-xa",
    linkedin: "https://www.linkedin.com/in/habibat-awoyomi-33757b400",
    // Set "show" to false to remove X/Twitter from the site entirely.
    x: {
      show: true,
      url: "https://x.com/DarkRalyz",
    },
  },

  hero: {
    intro:
      "I build useful, clean, and creative digital experiences — from web apps to Android apps — with a focus on solving real problems simply.",
  },

  about: {
    bio: "I'm a Software Engineering student and developer who enjoys building practical applications, experimenting with new technologies, and turning ideas into working software. I work primarily with Python and web technologies, while exploring mobile development and modern software engineering.",
    focusAreas: [
      "Software Engineering",
      "Python Development",
      "Web Development",
      "Problem Solving",
      "UI/UX Interest",
    ],
    education: {
      degree: "B.Sc. Software Engineering",
      school: "Obafemi Awolowo University",
      period: "2025 — Present",
    },
    // Every value below is derived from real content elsewhere on this
    // page (project count, skills count) — nothing here is invented.
    facts: [
      { value: "05", label: "Projects built" },
      { value: "17", label: "Technologies used" },
      { value: "2025", label: "B.Sc. Software Engineering, OAU — started" },
    ],
  },

  skills: [
    {
      group: "Languages",
      items: ["Python", "JavaScript", "Kotlin", "C"],
    },
    {
      group: "Web",
      items: ["HTML", "CSS", "JavaScript", "Flask"],
    },
    {
      group: "Mobile",
      items: ["Kotlin", "Jetpack Compose"],
    },
    {
      group: "Tools",
      items: ["Git", "GitHub", "VS Code", "Android Studio", "Figma"],
    },
    {
      group: "Other",
      items: ["Firebase", "REST APIs", "Basic SQL", "Responsive Design"],
    },
  ],

  projects: [
    {
      name: "AnonChat",
      file: "anonchat.py",
      type: "web app",
      description:
        "An anonymous messaging web application focused on allowing users to communicate without revealing their identity.",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      github: "TODO: https://github.com/your-username/anonchat",
      demo: "",
    },
    {
      name: "Easy Givings Log",
      file: "givings-log.py",
      type: "web app",
      description:
        "A concept application for recording and organizing receipts and giving records, with downloadable PDF records.",
      tech: ["Python", "Web Technologies"],
      github: "TODO: https://github.com/your-username/easy-givings-log",
      demo: "",
    },
    {
      name: "Student CGPA Calculator",
      file: "cgpa_calculator.py",
      type: "web app",
      description:
        "A student-focused application for calculating and tracking CGPA across sessions and semesters.",
      tech: ["Python", "Web Technologies"],
      github: "TODO: https://github.com/your-username/cgpa-calculator",
      demo: "",
    },
    {
      name: "Personal Journal",
      file: "Journal.kt",
      type: "android app",
      description:
        "A private journal application designed for writing and organizing personal entries, built for Android.",
      tech: ["Kotlin", "Jetpack Compose", "Room Database"],
      github: "TODO: https://github.com/your-username/personal-journal",
      demo: "",
    },
    {
      name: "To-Do Web Application",
      file: "todo.py",
      type: "web app",
      description:
        "A simple productivity application for creating, managing, and tracking daily tasks.",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      github: "TODO: https://github.com/your-username/todo-web-app",
      demo: "",
    },
  ],

  journey: [
    {
      date: "Step 01",
      title: "Started programming",
      description:
        "First steps into writing code and understanding how software actually works under the hood.",
      current: false,
    },
    {
      date: "Step 02",
      title: "Learned Python",
      description:
        "Went deeper into Python as a primary language — building logic, working through problems, and getting comfortable with the fundamentals.",
      current: false,
    },
    {
      date: "Step 03",
      title: "Web development",
      description:
        "Picked up HTML, CSS, JavaScript and Flask to start building for the browser — from static pages to small full-stack apps.",
      current: false,
    },
    {
      date: "Step 04",
      title: "Mobile development",
      description:
        "Started building for Android with Kotlin and Jetpack Compose, applying the same problem-solving approach to a new platform.",
      current: false,
    },
    {
      date: "2025 — Present",
      title: "B.Sc. Software Engineering, OAU",
      description:
        "Studying Software Engineering at Obafemi Awolowo University, building a formal foundation under real-world practice.",
      current: false,
    },
    {
      date: "Now",
      title: "Current projects & learning goals",
      description:
        "Building real-world applications, sharpening problem-solving fundamentals, and exploring UI/UX alongside coursework.",
      current: true,
    },
  ],

  contact: {
    invite:
      "I'm always open to interesting projects, collaborations, or a good technical conversation. Feel free to reach out.",
  },

  footer: {
    tagline: "Building clean, useful software — one project at a time.",
  },
};
