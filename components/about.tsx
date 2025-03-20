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
    I'm <span className="font-medium">Hamraz Hakeem</span>, a self-taught <span className="font-medium">Full Stack Developer</span> passionate about building scalable solutions. My journey wasn't traditional—I started with a <span className="font-medium">BBA</span> before leaving college to pursue software development at <span className="font-medium">Brototype</span>, where I transformed my passion into expertise.
  </p>

  <p className="mb-3">
    At Brototype, I built two major projects: an <span className="font-medium">E-commerce Platform</span> with authentication and payments, and a microservices-based <span className="font-medium">Booking Application</span> for session scheduling. Through these and other mini projects, I mastered <span className="font-medium">Python, Django, React, PostgreSQL, Docker, and Kubernetes</span>.
  </p>

  <p>
    I thrive on continuous learning and solving complex challenges. I'm passionate about writing clean, scalable code and building efficient systems. I'm currently seeking <span className="font-medium">Full Stack Developer</span> roles where I can contribute to innovative projects, collaborate with skilled teams, and further enhance my expertise in software development.
  </p>
    </motion.section>
  );
}