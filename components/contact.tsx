"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 폼 제출 로직을 추가할 수 있습니다
    console.log("Form submitted:", formData)
    // 폼 초기화
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "이메일",
      value: "pinga0331@gmail.com",
      href: "mailto:pinga0331@gmail.com",
    },
    {
      icon: Phone,
      label: "전화번호",
      value: "+82 10-1234-5678",
      href: "tel:+821012345678",
    },
    {
      icon: MapPin,
      label: "위치",
      value: "서울, 대한민국",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Dayoung331",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <div className="max-w-6xl w-full px-4">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        이력 및 자격증
      </motion.h2>

      {/* 이력 및 자격증 섹션 */}
      <motion.div
        className="mb-16 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* 이력 및 자격증 */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h3
            className="text-xl font-semibold mb-8 text-cyan-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            이력 및 자격증
          </motion.h3>

          <div className="space-y-8">
            {/* 한양대학교 */}
            <motion.div
              className="grid grid-cols-12 gap-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                <span className="text-gray-500 dark:text-gray-400 mt-1">✦</span>
                <span className="text-gray-500 dark:text-gray-400">2022 –</span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h4 className="text-xl font-semibold mb-2">한양대학교</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">컴퓨터소프트웨어학부 전공</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 dark:text-gray-500 mt-1.5 text-xs">•</span>
                    <span>웹 프로그래밍 기초, 이미지 프로세싱 및 인터랙티브 미디어 프로그래밍 학습</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 dark:text-gray-500 mt-1.5 text-xs">•</span>
                    <span>기초 디자인 및 UI/UX 디자인 학습</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 dark:text-gray-500 mt-1.5 text-xs">•</span>
                    <span>C, Java, 자료구조, 알고리즘 등 기초 CS 지식 학습</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 dark:text-gray-500 mt-1.5 text-xs">•</span>
                    <span>Python, R, 빅데이터 프로그래밍, 코퍼스 언어학 등 데이터 프로그래밍 학습</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            
            {/* 한국디지털미디어고등학교 */}
            {/* <motion.div
              className="grid grid-cols-12 gap-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                <span className="text-gray-400 mt-1">✦</span>
                <span className="text-gray-400">2013 – 2016</span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h4 className="text-xl font-semibold mb-2">한국디지털미디어고등학교</h4>
                <p className="text-gray-300 mb-4">디지털콘텐츠과</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5 text-xs">•</span>
                    <span>컴퓨터 그래픽, 3D 모델링, 영상 편집, 컴퓨터 음악 등 디지털 콘텐츠 제작 기술 교육</span>
                  </li>
                </ul>
              </div>
            </motion.div> */}
          </div>
        </motion.div>

        {/* 자격증 */}
        <motion.div variants={itemVariants}>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="space-y-6">
              {/* 투자자산운용사 */}
              <motion.div
                className="grid grid-cols-12 gap-4 text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                  <span className="text-gray-500 dark:text-gray-400 mt-1">✦</span>
                  <span className="text-gray-500 dark:text-gray-400">2025.07</span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h4 className="text-xl font-semibold mb-1">투자자산운용사</h4>
                  <p className="text-gray-600 dark:text-gray-300">금융위원회</p>
                </div>
              </motion.div>

              {/* 정보처리기사 */}
              <motion.div
                className="grid grid-cols-12 gap-4 text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                  <span className="text-gray-500 dark:text-gray-400 mt-1">✦</span>
                  <span className="text-gray-500 dark:text-gray-400">2025.12</span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h4 className="text-xl font-semibold mb-1">정보처리기사</h4>
                  <p className="text-gray-600 dark:text-gray-300">한국산업인력공단</p>
                </div>
              </motion.div>

              {/* SQLD */}
              <motion.div
                className="grid grid-cols-12 gap-4 text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                  <span className="text-gray-500 dark:text-gray-400 mt-1">✦</span>
                  <span className="text-gray-500 dark:text-gray-400">2025.11</span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h4 className="text-xl font-semibold mb-1">SQLD</h4>
                  <p className="text-gray-600 dark:text-gray-300">한국데이터산업진흥원</p>
                </div>
              </motion.div>

              {/* TOEIC */}
              <motion.div
                className="grid grid-cols-12 gap-4 text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="col-span-12 md:col-span-3 flex items-start gap-2">
                  <span className="text-gray-500 dark:text-gray-400 mt-1">✦</span>
                  <span className="text-gray-500 dark:text-gray-400">2025.12</span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h4 className="text-xl font-semibold mb-1">TOEIC</h4>
                  <p className="text-gray-600 dark:text-gray-300">915점</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 구분선과 여백 */}
      <div className="my-28">
        <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
      </div>

      {/* 연락 정보 및 폼 */}
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        연락하기
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* 연락처 정보 */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              함께 일해요!
            </motion.h3>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              더 궁금한 점이 있으면 언제든 연락주세요!
            </motion.p>
          </div>

          {/* 연락처 정보 목록 */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50 transition-colors">
                  <info.icon size={20} className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="font-medium">{info.label}</p>
                  <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* 소셜 링크 */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 ${social.color} transition-colors`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* 연락 폼 */}
        <motion.div variants={itemVariants}>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              메시지 보내기
            </motion.h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    placeholder="홍길동"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    placeholder="hong@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  제목
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                  placeholder="프로젝트 협업 제안"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
                  placeholder="안녕하세요! 함께 프로젝트를 진행하고 싶어서 연락드립니다..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <Send size={18} />
                메시지 보내기
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>

      {/* 배경 장식 요소 */}
      <motion.div
        className="absolute -z-10 w-64 h-64 rounded-full bg-cyan-300/10 dark:bg-cyan-700/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        style={{
          top: "10%",
          right: "10%",
        }}
      />
      <motion.div
        className="absolute -z-10 w-80 h-80 rounded-full bg-purple-300/10 dark:bg-purple-700/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        style={{
          bottom: "20%",
          left: "5%",
        }}
      />
    </div>
  )
}
