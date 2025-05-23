"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    {
      category: "프론트엔드",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "백엔드",
      items: ["Node.js", "Express", "MongoDB", "Firebase"],
    },
    {
      category: "도구 & 기타",
      items: ["Git", "GitHub", "Figma", "Jest", "Webpack", "VS Code"],
    },
  ]

  // 애니메이션 변수
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="max-w-4xl w-full px-4">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        기술
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">{skillGroup.category}</h3>

            <ul className="space-y-3">
              {skillGroup.items.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * skillIndex, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-cyan-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.1 * skillIndex + 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  />
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
