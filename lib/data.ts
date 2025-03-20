import React from "react";
import { FaLaptopCode, FaUniversity } from "react-icons/fa";
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Full Stack Development Bootcamp",
    location: "Brototype, Calicut",
    description:
      "I completed a 32-week full-stack program, built two full-scale projects, mentored junior developers, provided technical guidance, and assisted in workshops.",
    icon: React.createElement(FaLaptopCode),
    date: "2023 - Present",
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