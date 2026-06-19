"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Cpu, Code2, Database, Workflow, Zap, Wrench, GitBranch } from "lucide-react"
import skillsData from "@/content/skills.json"

const iconMap: { [key: string]: any } = {
  Bot: Cpu, Database: Database, Code: Code2, Workflow: Workflow,
  Zap: Zap, Wrench: Wrench, GitBranch: GitBranch,
}

const categoryColors: { [key: string]: { from: string; to: string } } = {
  "Test Automation": { from: "from-blue-500", to: "to-cyan-500" },
  "API Testing": { from: "from-purple-500", to: "to-pink-500" },
  "Programming Languages": { from: "from-orange-500", to: "to-red-500" },
  "CI/CD & DevOps": { from: "from-green-500", to: "to-emerald-500" },
  "Performance Testing": { from: "from-yellow-500", to: "to-orange-500" },
  "Databases": { from: "from-indigo-500", to: "to-purple-500" },
  "Testing Tools": { from: "from-pink-500", to: "to-rose-500" },
  "Version Control": { from: "from-teal-500", to: "to-cyan-500" },
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/25 via-accent/20 to-primary/25 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="h-4 w-4 text-primary/70" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground"
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>
        <div className="space-y-4">
          {skillsData.categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2
            const colors = categoryColors[category.name] || { from: "from-primary", to: "to-accent" }
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
              >
                <div className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2 rounded-lg bg-gradient-to-br ${colors.from} to-${colors.to.split('-')[1]}`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </motion.div>
                    <h3 className="text-base font-bold text-foreground">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 rounded-lg bg-muted/60 border border-border/50 text-xs text-foreground"
                      >
                        {skill.name}
                      </span>
                    ))}
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
