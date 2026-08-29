import React from "react";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";
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
    title: "Full Stack Developer & Product Owner",
    location: "DataBeat, Hyderabad",
    description:
      "Product owner for DataBeat's in-house ETL platform, scaling data-source integrations from 3 to 45+ APIs. Diagnosed a core scaling bottleneck and proposed migrating the import pipeline to Google Cloud Run Jobs for parallel, pay-per-use processing. Led remediation of 17 vulnerabilities across two independent security audits (penetration test + source code review), covering authentication, input validation, and application hardening. Also built an internal sales & finance dashboard adopted by directors and C-level stakeholders, and an internal ticketing system replacing a paid third-party tool.",
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
] as const;

export const projectsData = [
  {
    title: "SpeakIn",
    description:
      "Architected and developed a microservices-based language learning platform using Docker and Kubernetes.",
    tags: ["Python", "DRF", "React", "Redux", "Tailwind", "WebSocket", "RabbitMQ", "gRPC"],
    imageUrl: speakinImg,
    link: "https://github.com/hamrazhakeem/speakin",
  },
  {
    title: "BestView",
    description:
      "Developed a monolithic e-commerce application with secure PayPal integration and deployed it on AWS.",
    tags: ["Python", "Django", "Bootstrap", "AWS", "NGINX"],
    imageUrl: bestviewImg,
    link: "https://github.com/hamrazhakeem/bestview-ecommerce",
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Django",
  "Microservices",
  "ORM",
  "PostgreSQL",
  "DRF",
  "JWT (RS256)",
  "Google reCAPTCHA",
  "Django Channels",
  "Celery",
  "Celery Beat",
  "Redis",
  "RabbitMQ",
  "gRPC",
  "Stripe",
  "PayPal",
  "Firebase",
  "Pandas",
  "React",
  "Next.js",
  "Redux",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "HTML",
  "CSS",
  "WebSocket",
  "Docker",
  "Kubernetes",
  "Nginx",
  "CI/CD",
  "SonarQube",
  "Git",
  "GitHub Actions",
  "Postman",
  "AWS (EC2, EKS, RDS, ALB, S3)",
  "Google BigQuery",
  "Google Cloud Storage (GCS)",
  "Google Cloud Run Jobs",
  "Claude Code",
  "GitHub Copilot",
  "Cursor",
  "OpenAI Codex",
] as const;