"use client"

import { motion } from "framer-motion"
import { Link2, Code2, Mail, Heart, Sparkles } from "lucide-react"
import profileData from "@/content/profile.json"

const socialLinks = [
  { id: 1, icon: Link2, href: profileData.linkedin, label: "LinkedIn" },
  { id: 2, icon: Code2, href: profileData.github, label: "GitHub" },
  { id: 3, icon: Mail, href: `mailto:${profileData.email}`, label: "Email" }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/10 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:48px_48px]" />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h3 className="text-base font-bold text-foreground flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {profileData.name}
            </h3>
            <p className="text-xs text-muted-foreground">{profileData.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/20 hover:border-primary/40 transition-all"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 pt-4 border-t border-border/50 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>© {currentYear} {profileData.name}</span>
            <span className="text-primary/30">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-primary fill-primary animate-pulse" />
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
