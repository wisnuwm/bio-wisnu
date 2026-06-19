"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Award, Code2, Workflow } from "lucide-react"

const statistics = [
  { id: 1, value: 5, suffix: "+", label: "Years Experience", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
  { id: 2, value: 50, suffix: "+", label: "Projects Delivered", icon: Award, color: "from-purple-500 to-pink-500" },
  { id: 3, value: 10, suffix: "+", label: "Automation Frameworks", icon: Code2, color: "from-orange-500 to-red-500" },
  { id: 4, value: 15, suffix: "+", label: "CI/CD Implementations", icon: Workflow, color: "from-green-500 to-emerald-500" },
]

function StatCard({ value, suffix, label, icon: Icon, color }: { value: number; suffix: string; label: string; icon: any; color: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const incrementTime = duration / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative"
    >
      <div className="relative p-8 bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="relative mb-4"
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        {/* Animated Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-5xl font-bold mb-2"
        >
          <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {count}
          </span>
          <span className="text-3xl text-primary">{suffix}</span>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-muted-foreground text-sm font-medium"
        >
          {label}
        </motion.div>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </div>
    </motion.div>
  )
}

export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impact in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of excellence in quality engineering and automation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatCard key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} icon={stat.icon} color={stat.color} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}