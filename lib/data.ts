import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bestviewImg from "@/public/bestview.png";
import netflixcloneImg from "@/public/netflixclone.png";
import speakinImg from "@/public/speakin.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects", 
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SpeakIn",
    description:
      "Architected and developed a microservices-based language learning platform using Docker and Kubernetes.",
    tags: ["Python", "DRF", "React", "Redux", "Tailwind", "WebSocket", "RabbitMQ", "gRPC"],
    imageUrl: speakinImg,
  },
  {
    title: "BestView",
    description:
      "Developed a monolithic e-commerce application with secure PayPal integration and deployed it on AWS.",
    tags: ["Python", "Django", "Bootstrap", "AWS", "NGINX"],
    imageUrl: bestviewImg,
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix UI replica built with React, integrating TMDB API for dynamic content rendering.",
    tags: ["React", "TMDB API", "Tailwind"],
    imageUrl: netflixcloneImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "Microservices",
  "ORM",
  "PostgreSQL",
  "DRF",
  "JWT",
  "Django Channels",
  "Redis",
  "RabbitMQ",
  "gRPC",
  "Stripe",
  "PayPal",
  "Firebase",
  "React",
  "Redux",
  "JavaScript",
  "Tailwind",
  "Bootstrap",
  "HTML",
  "CSS",
  "WebSocket",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Git",
  "GitHub Actions",
  "Postman",
  "AWS (EC2, EKS, RDS, ALB)",
] as const;