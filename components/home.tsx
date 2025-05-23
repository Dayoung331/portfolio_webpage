"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaArrowRight } from "react-icons/fa"

export default function Home() {
  // 애니메이션 변수
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="max-w-3xl px-4 text-center">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold mb-16">
          안녕하세요, 풀스택 개발자
          <br />
          <motion.div className="mt-2">
            <motion.span
              className="text-cyan-500 text-7xl inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2,
                ease: "easeOut"
              }}
            >
              정다영
            </motion.span>
            <span className="text-4xl md:text-5xl font-bold">입니다</span>
          </motion.div>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-20">
          앱 개발 경험을 바탕으로, 프론트엔드 개발을 주로 담당해왔습니다.
          <br />
          백엔드도 공부하며 풀스택 개발자로 확장 중입니다.
          <br />
          좋은 사람들과 함께 성장하며, 나날이 발전하는 멋진 개발자가 되고 싶어요.
        </motion.p>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <a 
            href="https://github.com/Dayoung331" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="rounded-full border-gray-300 dark:border-gray-700">
              <FaGithub className="mr-2 inline-block" />
              GitHub 프로필
              <FaArrowRight className="ml-2 inline-block" />
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* 배경 장식 요소 */}
      <motion.div
        className="absolute -z-10 w-72 h-72 rounded-full bg-cyan-300/10 dark:bg-cyan-700/10 blur-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          top: "20%",
          left: "15%",
        }}
      />
      <motion.div
        className="absolute -z-10 w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-700/10 blur-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        style={{
          bottom: "15%",
          right: "10%",
        }}
      />
    </div>
  )
}

// 버튼 컴포넌트
function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
}: {
  children: React.ReactNode
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50"

  const variantClasses = {
    default: "bg-cyan-500 text-white hover:bg-cyan-600",
    outline: "border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </button>
  )
}
