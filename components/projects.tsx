"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "포트폴리오 웹사이트",
      description: "Next.js와 Framer Motion을 활용한 반응형 포트폴리오 웹사이트입니다. 다크모드 지원, 애니메이션 효과, 반응형 디자인을 구현했습니다.",
      tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
    {
      title: "STUDULER",
      description: "Flutter와 AWS를 활용한 종합 과외 관리 애플리케이션입니다. 과외 일정 관리, 선생님-학부모 연동, 학생 피드백 시스템, 자동 정산 알림 및 정산 기능을 제공합니다. 학부모는 자녀의 학습 현황을 실시간으로 확인할 수 있고, 선생님은 효율적인 과외 관리를 할 수 있습니다.",
      tech: ["Flutter", "Dart", "AWS", "Node.js", "MySQL", "Firebase", "Git", "Figma"],
      image: "/studuler.png",
      github: "https://github.com/STUDULER",
      demo: "https://dayoung331.github.io/studuler_webpage/",
    },
    {
      title: "예비 프로젝트2",
      description: "OpenWeather API를 활용한 날씨 정보 제공 웹 애플리케이션입니다.",
      tech: ["JavaScript", "HTML/CSS", "REST API"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
  ]

  // 애니메이션 변수
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="max-w-6xl w-full px-4">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        프로젝트
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={projectVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <motion.div className="h-48 overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="p-6">
              <motion.h3
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
