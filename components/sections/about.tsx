"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Mail, MapPin, Link2, Code2, Sparkles, Award } from "lucide-react"
import profileData from "@/content/profile.json"

const highlights = [
  "Test Automation", "API Testing", "CI/CD", "Quality Strategy",
  "Mobile Testing", "Performance Testing", "Team Leadership", "Process Improvement"
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.03] to-accent/[0.03]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:72px_72px]" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-primary/20 via-accent/15 to-primary/20 rounded-full blur-3xl"
      />
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
            className="flex items-center justify-center gap-2 mb-4"
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
              About Me
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Passionate about quality engineering and building reliable software
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="sticky top-24"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-2xl"
              />
              <div className="relative p-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-xl">
                <div className="relative mb-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative aspect-square rounded-xl overflow-hidden border-2 border-primary/30 shadow-lg"
                  >
                    <Image
                      src={profileData.profileImage || "/images/profile.jpg"}
                      alt={profileData.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                  >
                    <Award className="h-4 w-4 text-white" />
                  </motion.div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{profileData.name}</h3>
                  <p className="text-xs text-primary font-semibold">{profileData.title}</p>
                  <div className="space-y-1 pt-2 border-t border-border/50">
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3 text-primary" />
                      <span>{profileData.email}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-center pt-2">
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 transition-all"
                    >
                      <Link2 className="h-4 w-4 text-primary" />
                    </a>
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 transition-all"
                    >
                      <Code2 className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-4 rounded-xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/50"
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With 5 years of experience in software quality assurance, I specialize in manual and automation testing to ensure reliable software products. My current role focuses on building automation architecture with Robot Framework and Python, and implementing CI/CD pipelines.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-4 rounded-xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/50"
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  My mission is to drive excellence in software quality by utilizing proven methodologies and tools, ensuring products meet stringent acceptance criteria.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm border border-primary/20"
            >
              <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                What I Do
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    className="px-3 py-1.5 rounded-lg bg-background/60 border border-border/50 text-xs font-medium"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
