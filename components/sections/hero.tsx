"use client"

import { motion } from "framer-motion"
import { Sparkles, Star, Zap, Code2 } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.15, 0.3, 0.15], rotate: [360, 180, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-accent/30 via-primary/20 to-accent/30 rounded-full blur-3xl"
      />
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary/50 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -25, 0], x: [0, Math.random() * 15 - 7.5, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}
      {[
        { Icon: Code2, position: "top-1/4 right-1/4", delay: 0 },
        { Icon: Star, position: "bottom-1/3 left-1/3", delay: 2 },
        { Icon: Zap, position: "top-1/2 right-1/3", delay: 4 },
      ].map(({ Icon, position, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${position} w-12 h-12 text-primary/20`}
          animate={{ y: [0, -20, 0], rotate: [0, 360, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: delay }}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      ))}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Wisnu Munawar
            </span>
          </motion.h1>
          <div className="flex items-center justify-center gap-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-gradient-to-r from-transparent to-primary"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground font-medium"
            >
              Senior QA Automation Engineer
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-gradient-to-l from-transparent to-primary"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl mx-auto text-muted-foreground"
          >
            Building reliable software through scalable test automation and quality engineering practices.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-8 pt-4"
          >
            {[
              { icon: Code2, value: "5+", label: "Years" },
              { icon: Star, value: "50+", label: "Projects" },
              { icon: Zap, value: "10+", label: "Frameworks" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center gap-1"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"
                >
                  <stat.icon className="h-4 w-4 text-primary" />
                </motion.div>
                <div className="text-center">
                  <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center gap-2 pt-3"
          >
            <Sparkles className="h-3 w-3 text-primary/50" />
            <div className="h-px w-16 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
            <Sparkles className="h-3 w-3 text-primary/50" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1.5 bg-background/50 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-gradient-to-b from-primary to-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
