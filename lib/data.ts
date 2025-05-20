import React from "react";
import { FaLaptopCode, FaUniversity, FaBriefcase } from "react-icons/fa";
import bestviewImg from "@/public/bestview.png";
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Analyst",
    location: "DataBeat, Hyderabad",
    description:
      "Currently contributing to building software solutions in a data-focused domain, where I build features, develop and integrate APIs, and work with internal systems and data workflows. This role has strengthened my understanding of real-world product development and cross-functional collaboration in a professional environment.",
    icon: React.createElement(FaBriefcase),
    date: "2025 - Present",
  },
] as const;

export const educationData = [
  {
    title: "Full Stack Development Bootcamp",
    location: "Brototype, Calicut",
    description:
      "I completed a 32-week full-stack program, built two full-scale projects, mentored junior developers, provided technical guidance, and assisted in workshops.",
    icon: React.createElement(FaLaptopCode),
    date: "2023 - 2025",
  },
  {
    title: "BBA in Aviation and Logistics",
    location: "Yenepoya University, Mangalore",
    description:
      "I completed foundational coursework in business administration, strengthening my analytical and problem-solving skills.",
    icon: React.createElement(FaUniversity),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "SpeakIn",
    description:
      "Architected and developed a microservices-based language learning platform using Docker and Kubernetes.",
    tags: ["Python", "DRF", "React", "Redux", "Tailwind", "WebSocket", "RabbitMQ", "gRPC"],
    imageUrl: speakinImg,
    link: "https://github.com/hamrazhakeem/speakin",
    // link: "https://speakin.hamrazhakeem.tech",
  },
  {
    title: "BestView",
    description:
      "Developed a monolithic e-commerce application with secure PayPal integration and deployed it on AWS.",
    tags: ["Python", "Django", "Bootstrap", "AWS", "NGINX"],
    imageUrl: bestviewImg,
    link: "https://github.com/hamrazhakeem/bestview-ecommerce",
    // link: "https://bestview.hamrazhakeem.tech",
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
  "Data Ingestion"
] as const;