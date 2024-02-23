"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
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
        I hold a B.Tech degree in Computer Science Engineering and embarked on
        my professional journey as a Software Engineer Trainee at Dexlock.
        During my tenure, I underwent rigorous training to evolve into a
        proficient Software Engineer. Being immersed in an environment that
        adheres to strict Software Development Lifecycle honed my skills as a
        collaborative team player.
      </p>
      <p className="mb-3">
        After dedicating two fruitful years to Dexlock, I transitioned to Nova
        Labs, a leading technology firm based in Qatar, as a Full-Stack
        Developer. In this role, I adeptly utilized technologies such as React,
        React Native, Node.js, and MongoDB. Through my contributions, I ascended
        to the position of Senior Software Engineer, marking a significant
        milestone in my career.
      </p>
      <p>
        Throughout my journey, I've played pivotal roles in three impactful
        projects. Notably, one project successfully transitioned to production,
        garnering a user base of over 1 million. My trajectory thus far embodies
        not just success, but the promise of greater achievements to come. With
        unwavering determination and a passion for pushing boundaries, I eagerly
        anticipate the challenges and triumphs that lie ahead, ready to make an
        indelible mark in the realm of software engineering."
      </p>
    </motion.section>
  );
}
