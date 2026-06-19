"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, MapPin, ChevronRight, Sparkles } from "lucide-react"
import experienceData from "@/content/experience.json"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const timelineData = [...experienceData].reverse()

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-background via-muted/20 to-muted/40 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="h-4 w-4 text-primary/70" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Experience Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground"
          >
            From where it started to where I am now
          </motion.p>
        </motion.div>
        <div className="relative mb-12">
          <div className="absolute top-14 left-[8%] right-[8%] h-1.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-full blur-sm" />
          <motion.div
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="absolute top-14 left-[8%] h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/50"
          />
          <div className="flex items-start justify-between px-4">
            {timelineData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 25, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.12, type: "spring" }}
                className="flex-1 flex flex-col items-center text-center px-1.5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.12, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 mb-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-md scale-125" />
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20 + index * 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                    style={{ padding: "2px" }}
                  />
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-primary via-accent to-primary border-4 border-background shadow-xl shadow-primary/40 flex items-center justify-center">
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.12, type: "spring" }}
                    >
                      <Building2 className="h-4 w-4 text-white" />
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.12 }}
                  whileHover={{ y: -3 }}
                  className="relative w-full max-w-[140px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/15 rounded-xl blur-md" />
                  <div className="relative p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 min-h-[130px]">
                    {exp.duration === "Present" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.12 }}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold mb-2"
                      >
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                        </span>
                        Current
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.75 + index * 0.12 }}
                      className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-xs font-bold"
                    >
                      {index + 1}
                    </motion.div>
                    <h3 className="text-xs font-bold text-foreground mb-1.5 leading-tight">{exp.position}</h3>
                    <p className="text-xs text-primary font-bold mb-1.5">{exp.company}</p>
                    <div className="space-y-0.5 text-xs text-muted-foreground">
                      <div className="flex items-center justify-center gap-1">
                        <Calendar className="h-2.5 w-2.5 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center justify-center gap-1">
                          <MapPin className="h-2.5 w-2.5 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
                {index < timelineData.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.12 }}
                    className="absolute top-12 right-0 z-20"
                    style={{ right: "-16px" }}
                  >
                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}>
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl blur-lg" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: `${timelineData.length}+`, label: "Companies" },
                { value: "5+", label: "Years Exp" },
                { value: "Senior", label: "Level" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 1.3 + index * 0.08 }}
                  className="text-center"
                >
                  <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
