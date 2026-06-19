"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Play, Sparkles, Rocket } from "lucide-react"
import projectsData from "@/content/projects.json"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const featuredProjects = projectsData.filter((project) => project.featured)
  const otherProjects = projectsData.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-background via-muted/20 to-muted/40 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:72px_72px]" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/25 via-accent/20 to-primary/25 rounded-full blur-3xl"
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
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Rocket className="h-4 w-4 text-primary/70" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground"
          >
            Work I've done and what I accomplished
          </motion.p>
        </motion.div>
        <div className="space-y-8 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.02, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-2xl blur-xl"
                />
                <div className={`relative p-5 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all ${
                  hoveredProject === project.id ? 'shadow-2xl shadow-primary/20' : 'shadow-xl'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "50px" } : { width: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mb-4"
                  />
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="p-1.5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                      </motion.div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="p-3 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50">
                      <h4 className="text-xs font-semibold text-foreground mb-2">What I did:</h4>
                      <ul className="space-y-1">
                        {project.contributions?.map((contribution, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + i * 0.05 }}
                            className="text-xs text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-0.5">•</span>
                            <span>{contribution}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technology?.map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/30 text-xs">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.links.demo && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:shadow-lg transition-all"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          View
                        </motion.a>
                      )}
                      {project.links.youtube && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted border border-border/50 text-sm font-medium hover:shadow-lg transition-all"
                        >
                          <Play className="h-3.5 w-3.5" />
                          YouTube
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary/70" />
              <h3 className="text-lg font-bold text-foreground">More Projects</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.85 + index * 0.05 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <div className="relative h-full p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <h4 className="font-bold text-foreground text-sm mb-1">{project.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technology?.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-muted/50 text-xs">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
