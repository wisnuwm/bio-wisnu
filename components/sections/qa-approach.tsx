"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, GitBranch, Cpu, TrendingUp, Users, Sparkles, Lightbulb } from "lucide-react"

const approaches = [
  { id: 1, icon: Shield, title: "Shift Left Testing", description: "Integrate quality practices early in development.", color: "from-blue-500 to-cyan-500" },
  { id: 2, icon: GitBranch, title: "Test Pyramid Strategy", description: "Balance unit, integration, and UI tests.", color: "from-purple-500 to-pink-500" },
  { id: 3, icon: TrendingUp, title: "Continuous Testing", description: "Embed automated testing throughout CI/CD.", color: "from-green-500 to-emerald-500" },
  { id: 4, icon: Cpu, title: "Automation Strategy", description: "Build scalable, maintainable frameworks.", color: "from-orange-500 to-red-500" },
  { id: 5, icon: Users, title: "Quality Culture", description: "Foster collaboration between teams.", color: "from-indigo-500 to-purple-500" }
]

export function QAApproach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.02] to-accent/[0.02]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:72px_72px]" />

      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-accent/20 via-primary/15 to-accent/20 rounded-full blur-3xl"
      />

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Lightbulb className="h-4 w-4 text-primary/70" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              My Approach
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground"
          >
            Building quality into software from the ground up
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {approaches.map((approach, index) => {
            const Icon = approach.icon

            return (
              <motion.div
                key={approach.id}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 25, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative h-full">
                  <motion.div
                    animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    className={`absolute inset-0 bg-gradient-to-br ${approach.color}/15 rounded-xl blur-lg`}
                  />

                  <div className="relative p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 h-full">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${approach.color} w-fit mb-4 shadow-lg`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-foreground mb-2">{approach.title}</h3>
                    <p className="text-sm text-muted-foreground">{approach.description}</p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "30px" }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className={`h-1 bg-gradient-to-r ${approach.color} rounded-full mt-4`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
