"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Link2, Code2, Sparkles, Send } from "lucide-react"
import profileData from "@/content/profile.json"

const contactMethods = [
  { id: 1, icon: Mail, label: "Email", href: `mailto:${profileData.email}`, color: "from-blue-500 to-cyan-500" },
  { id: 2, icon: Link2, label: "LinkedIn", href: profileData.linkedin, color: "from-purple-500 to-pink-500" },
  { id: 3, icon: Code2, label: "GitHub", href: profileData.github, color: "from-orange-500 to-red-500" }
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.03] to-accent/[0.03]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:72px_72px]" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/25 via-accent/20 to-primary/25 rounded-full blur-3xl"
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <Send className="h-5 w-5 text-primary/70" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Get In Touch
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground"
            >
              Open to opportunities, collaborations, and discussions about quality engineering
            </motion.p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.id}
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.45 + index * 0.08 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group relative flex-1 max-w-[140px]"
                >
                  <motion.div
                    animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    className={`absolute inset-0 bg-gradient-to-br ${method.color}/20 rounded-xl blur-lg`}
                  />
                  <div className="relative p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2.5 rounded-lg bg-gradient-to-br ${method.color} w-fit mx-auto mb-2`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </motion.div>
                    <p className="font-semibold text-foreground text-xs">{method.label}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs text-muted-foreground">Usually respond within 24 hours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
