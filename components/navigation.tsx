"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Download, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentSection: number
  sections: string[]
  scrollToSection: (index: number) => void
}

export default function Navigation({ currentSection, sections, scrollToSection }: NavigationProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
      {/* 왼쪽 영역 - 비워둠 */}
      <div className="w-[200px]"></div>

      {/* 중앙 영역 - 네비게이션 버튼들 */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200 dark:border-gray-800">
        <ul className="flex gap-6 text-sm font-medium">
          {sections.map((section, index) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(index)}
                className={`relative px-2 py-1 ${
                  currentSection === index ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {section}
                {currentSection === index && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                    initial={false}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* 오른쪽 영역 - 다크모드 토글과 이력서 다운로드 */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="rounded-full flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
        >
          <Download size={14} />
          이력서 다운로드
        </Button>
      </div>
    </header>
  )
}
