"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Sparkles, Calendar } from "lucide-react"
import certificationsData from "@/content/certifications.json"

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:64px_64px]" />

        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-primary/25 via-accent/20 to-primary/25 rounded-full blur-3xl"
        />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            <Award className="h-4 w-4 text-primary/70" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Certifications
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground"
          >
            Professional credentials and continuous learning
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 25, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.25 + index * 0.06 }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/15 to-primary/25 rounded-xl blur-lg"
                />

                <div className="relative flex items-start gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent shrink-0 shadow-lg"
                  >
                    <Award className="h-4 w-4 text-white" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-1 text-sm leading-tight">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 text-primary" />
                      <span>{cert.month} {cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-sm text-primary font-medium">Committed to continuous learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
