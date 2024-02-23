import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaLayerGroup } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tazweedImage from "@/public/tazweed.png";
import nasehImage from "@/public/naseh.png";
import nojgoImage from "@/public/nojgo.png";

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
    title: "Govt. Engg. College",
    location: "Thrissur, India",
    description:
      "Graduated with a B.Tech in Computer Science Engineering, proficient in advanced technologies and software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Software Engineer Trainee",
    location: "Dexlock, Cochin, India",
    description:
      "I started at Dexlock as a Software Engineer Trainee, receiving training in Java, Python, and JavaScript frameworks. Successfully transitioned to a full-time role as a Software Engineer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Software Engineer",
    location: "Dexlock, Cochin, India",
    description:
      "After completing my training, I was assigned to a dynamic development team, where I served as a frontend developer. Leveraging a suite of cutting-edge technologies including ReactJs, Redux, HTML, CSS, and JavaScript, I contributed to the creation of engaging and user-centric web applications.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Nova Labs, Doha, Qatar",
    description:
      "I joined Nova Labs as a full-stack developer, contributing to product development using Node.js, Express.js, MongoDB, React.js, and React Native. Progressing to a senior role, I led teams and delivered impactful projects.",
    icon: React.createElement(FaLayerGroup),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tazweed",
    description:
      "Tazweed transforms how users buy and sell used cars. As a full-stack developer, I crafted rich listings and intuitive features like real-time messaging. Working closely with the team, we built a secure, scalable platform for seamless user experiences.",
    tags: ["NodeJs", "Express", "MongoDB", "React", "React Native", "Redux"],
    imageUrl: tazweedImage,
  },
  {
    title: "Naseh",
    description:
      "The Naseh streamlines appointment scheduling specifically for legal consultations. Easily book appointments with lawyers and manage your discussions all within one platform.",
    tags: ["NodeJs", "Express", "MongoDB", "React", "Redux"],
    imageUrl: nasehImage,
  },
  {
    title: "Nojgo",
    description:
      "Nojgo is an innovative project that serves as a dynamic marketplace for renting apartments and buildings, catering to both tenants and property owners. With a user-friendly interface and robust features, Nojgo simplifies the process of finding the perfect rental space or listing properties for rent.",
    tags: ["NodeJs", "Express", "MongoDB", "React", "Redux"],
    imageUrl: nojgoImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "MongoDB",
  "Redux",
  "Express",
] as const;
