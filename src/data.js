export const projects = [
    {
        title: "NYU BITS Lab — Video Platform",
        subtitle: "Node.js, Express, React, Firebase",
        description:
            "Engineered a real-time video conferencing platform for NYU's BITS Lab supporting 1,000+ concurrent users. Built a secure REST API with Node.js and Express for authentication and session management, and integrated the Vonage Video SDK with React for multi-user video/audio calls.",
        image: "./jfromentrudder.gif",
        link: null,
        tags: ["Node.js", "Express", "React", "Firebase", "Vonage SDK"],
    },
    {
        title: "Phuc Labs — Full-Stack Migration",
        subtitle: "Next.js, Python, FastAPI, Docker, GCP",
        description:
            "Led the full-stack migration of a legacy Java Spring Boot application to Next.js, redesigning RESTful API endpoints for improved performance. Architected a data automation service with Python and FastAPI that reduced processing time by 90%, and built a CI/CD pipeline with Docker and GCP.",
        image: "./phuclabs.gif",
        link: null,
        tags: ["Next.js", "Python", "FastAPI", "Docker", "GCP"],
    },
    {
        title: "Massrealty.com",
        subtitle: "Next.js, TypeScript, and Firestore",
        description:
            "The production website for MassRealty, a real estate company. Migrated from a legacy Java/Spring Boot architecture to Next.js and TypeScript, and owned the API layer handling requests with the Firestore database on Google Cloud Platform.",
        image: "./massrealty.gif",
        link: "https://www.massrealty.com/",
        tags: ["Next.js", "TypeScript", "Firestore", "GCP"],
    },
    {
        title: "jfromentrudder.github.io",
        subtitle: "React and Tailwind CSS",
        description:
            "This personal portfolio site, built from scratch with React and Tailwind CSS. Features scroll-based animations, responsive design, and a contact form integration.",
        image: "./jfromentrudder.gif",
        link: "https://github.com/jfromentrudder/jfromentrudder.github.io",
        tags: ["React", "Tailwind CSS"],
    },
];

export const experience = [
    {
        company: "NYU BITS Lab",
        role: "Full-Stack Software Engineer (Contract)",
        period: "Jun 2023 — Mar 2024",
        location: "Remote",
        bullets: [
            "Engineered a secure REST API using Node.js and Express to manage user authentication and video streaming sessions, supporting over 1,000 concurrent users.",
            "Integrated the Vonage Video SDK with React to enable real-time multi-user video/audio calls with dynamically generated secure session links.",
            "Optimized Firebase Firestore queries for low-latency session management and designed system architecture using UML diagrams.",
        ],
    },
    {
        company: "Phuc Labs",
        role: "Junior Full-Stack Software Engineer",
        period: "Nov 2021 — Aug 2022",
        location: "Remote",
        bullets: [
            "Architected a data automation service using Python and FastAPI, replacing manual workflows and reducing processing time by 90%.",
            "Led the full-stack migration of a legacy Java Spring Boot application to Next.js, redesigning RESTful API endpoints.",
            "Built and managed a CI/CD pipeline using Docker and GCP with automated deployments triggered by Git release tags.",
        ],
    },
    {
        company: "iD Tech Camps",
        role: "Software Engineering Instructor",
        period: "Feb 2019 — Feb 2022",
        location: "New York, NY",
        bullets: [
            "Taught object-oriented programming principles in Java and Python to over 1,100 students, achieving a 95% client retention rate.",
        ],
    },
];

export const education = {
    school: "Oregon State University",
    degree: "B.S. Computer Science",
    expected: "Aug 2026",
    coursework: [
        "Algorithms",
        "Data Structures",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Mobile Software Development",
        "Intro to Security",
    ],
};

export const skillCategories = [
    {
        category: "Languages",
        skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "SQL", "HTML/CSS"],
    },
    {
        category: "Backend & Cloud",
        skills: ["Node.js", "Express", "FastAPI", "GCP", "Docker", "REST APIs", "Firebase", "MongoDB"],
    },
    {
        category: "Frontend",
        skills: ["React", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
        category: "DevOps & Tools",
        skills: ["Git", "CI/CD Pipelines", "Agile/Scrum", "TDD", "Linux"],
    },
];
