"use client";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSequelize,
  SiJavascript,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiExpress,
  SiReactquery,
  SiRedux,
} from "react-icons/si";
import { FaDatabase, FaAws } from "react-icons/fa";
import { useState, useEffect } from "react";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs color="#000000" size={64} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={64} /> },
  { name: "React", icon: <SiReact color="#61DAFB" size={64} /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" size={64} /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" size={64} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" size={64} /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={64} /> },
  { name: "Sequelize", icon: <SiSequelize color="#52B0E7" size={64} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={64} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={64} /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" size={64} /> },
  { name: "Git", icon: <SiGit color="#F05032" size={64} /> },
  { name: "GitHub", icon: <SiGithub color="#181717" size={64} /> },
  { name: "AWS", icon: <FaAws color="#FF9900" size={64} /> },
  { name: "Express.js", icon: <SiExpress color="#000000" size={64} /> },
  { name: "React Query", icon: <SiReactquery color="#FF4154" size={64} /> },
  { name: "Zustand", icon: <span className="text-6xl">🐻</span> },
];

const TechIcons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedTechStack = [...techStack, ...techStack];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % techStack.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden p-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / 6)}%)`,
        }}
      >
        {duplicatedTechStack.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-none w-1/3 sm:w-1/4 md:w-1/6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center">
              {tech.icon}
              <p className="mt-2 text-center text-sm font-semibold">
                {tech.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;
