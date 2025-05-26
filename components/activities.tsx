"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function Activities() {
  const activities = [
    {
      title: "한양대학교 앱 개발 동아리 EOS",
      role: "회원, 멘토",
      date: "2022년 3월 - 2025년 1월",
      location: "한양대학교",
      description: "Java 멘토링을 통해 후배들을 가르쳤으며, 동아리 회원들과 함께 Flutter를 활용한 모바일 앱을 개발했습니다.",
    },
    {
      title: "카이스트 몰입캠프",
      role: "참가자",
      date: "2024년 6월 - 2024년 7월",
      location: "카이스트",
      description: "4주 동안 매주 새로운 프로젝트를 진행하며 다양한 사람들과의 협업 경험을 쌓았습니다. 새로운 기술 스택을 도입하고 학습하는 과정에서 기술적 도전의식을 키울 수 있었습니다.",
    },
    {
      title: "신한투자증권 프로 디지털 아카데미",
      role: "참가자",
      date: "2025년 4월 - 현재",
      location: "신한투자증권",
      description: "금융권의 IT 시스템과 개발 프로세스를 학습하며 금융 개발자로 성장하고 있습니다. 금융 서비스 개발에 필요한 전문 지식과 기술을 습득하는 중입니다.",
    },
    /*
    {
      title: "기술 블로그 운영",
      role: "작성자",
      date: "2020년 - 현재",
      location: "온라인",
      description: "프론트엔드 개발 관련 기술 블로그를 운영하고 있습니다.",
    },
    {
      title: "개발자 멘토링 프로그램",
      role: "멘토",
      date: "2022년 - 현재",
      location: "서울 & 온라인",
      description: "주니어 개발자들을 위한 멘토링 프로그램에 참여하고 있습니다.",
    },
    {
      title: "프론트엔드 스터디 그룹",
      role: "리더",
      date: "2021년 - 2023년",
      location: "서울",
      description: "주간 프론트엔드 기술 스터디 그룹을 이끌었습니다.",
    },
    {
      title: "개발자 컨퍼런스 참여",
      role: "참가자",
      date: "2019년 - 현재",
      location: "국내외",
      description: "다양한 개발자 컨퍼런스에 정기적으로 참여하고 있습니다.",
    },
    */
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

  return (
    <div className="max-w-4xl w-full px-4">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        외부 활동
      </motion.h2>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              x: 5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <motion.h3
                  className="text-xl font-semibold mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {activity.title}
                </motion.h3>

                <motion.p
                  className="text-cyan-500 font-medium mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {activity.role}
                </motion.p>

                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {activity.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05, x: 2 }}>
                    <Calendar size={16} />
                    {activity.date}
                  </motion.div>
                  <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05, x: 2 }}>
                    <MapPin size={16} />
                    {activity.location}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
