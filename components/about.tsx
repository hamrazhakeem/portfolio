"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
  <SectionHeading>About me</SectionHeading>
  <p className="mb-3">
    I’m Hamraz Hakeem, a self-taught Full Stack Developer passionate about building scalable and efficient solutions. My journey into tech wasn’t traditional—I started with a BBA but left college to fully focus on software development, turning curiosity into real skills through hands-on learning.
  </p>

  <p className="mb-3">
    I’ve gained practical experience with Python, Django, React, PostgreSQL, Docker, Kubernetes, and RESTful APIs. Comfortable working across both frontend and backend, I enjoy creating clean, efficient code and reliable, maintainable systems.
  </p>

  <p>
    Currently, I develop software solutions in the data domain, building features, integrating systems, and managing data workflows. This role has strengthened my ability to solve problems holistically while deepening my knowledge and passion for impactful software solutions.
  </p>
    </motion.section>
  );
}