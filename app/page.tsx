"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Navigation from "@/components/navigation"
import Home from "@/components/home"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Activities from "@/components/activities"
import Contact from "@/components/contact"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // 부드러운 스크롤 진행도
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [currentSection, setCurrentSection] = useState(0)
  const sections = ["홈", "기술", "프로젝트", "외부 활동", "이력"]
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  // 스크롤 위치에 따라 현재 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        const section = sectionRefs[i].current
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setCurrentSection(i)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // 다음 섹션으로 스크롤하는 함수
  const scrollToNextSection = () => {
    const nextSection = Math.min(currentSection + 1, sections.length - 1)
    sectionRefs[nextSection].current?.scrollIntoView({ behavior: "smooth" })
  }

  // 특정 섹션으로 스크롤하는 함수 (Navigation에서 사용)
  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navigation currentSection={currentSection} sections={sections} scrollToSection={scrollToSection} />

      {/* 스크롤 진행 표시기 */}
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1 bg-cyan-500/30 z-50"
        style={{ scaleY: smoothScrollYProgress, transformOrigin: "top" }}
      />

      {/* 홈 섹션 */}
      <section ref={sectionRefs[0]} className="min-h-screen flex items-center justify-center relative py-20">
        <Home />

        <motion.button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-gray-200/20 text-gray-700 dark:text-gray-300 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </section>

      {/* 기술 섹션 */}
      <section ref={sectionRefs[1]} className="min-h-screen flex items-center justify-center relative py-20">
        <Skills />

        <motion.button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-gray-200/20 text-gray-700 dark:text-gray-300 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </section>

      {/* 프로젝트 섹션 */}
      <section ref={sectionRefs[2]} className="min-h-screen flex items-center justify-center relative py-20">
        <Projects />

        <motion.button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-gray-200/20 text-gray-700 dark:text-gray-300 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </section>

      {/* 외부 활동 섹션 */}
      <section ref={sectionRefs[3]} className="min-h-screen flex items-center justify-center relative py-20">
        <Activities />
      </section>

      {/* 연락하기 섹션 */}
      <section ref={sectionRefs[4]} className="min-h-screen flex items-center justify-center relative py-20">
        <Contact />
      </section>

    </div>
  )
}
