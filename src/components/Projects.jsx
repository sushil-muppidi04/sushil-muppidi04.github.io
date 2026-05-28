import { motion } from 'framer-motion'

const projects = [
  {
    title: 'DevConnect',
    description:
      'A full-stack social platform for developers to share projects, connect, and collaborate. Features real-time messaging and GitHub OAuth.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/ErenYegar04',
  },
  {
    title: 'NeuralNote',
    description:
      'AI-powered note-taking app that auto-summarizes content using an LLM API. Supports markdown, tagging, and semantic search.',
    tags: ['TypeScript', 'FastAPI', 'React', 'OpenAI API'],
    github: 'https://github.com/ErenYegar04',
  },
  {
    title: 'ShelfTrack',
    description:
      'Inventory management system for small libraries and bookstores. REST API backend with a responsive dashboard frontend.',
    tags: ['Python', 'Django', 'React', 'MySQL'],
    github: 'https://github.com/ErenYegar04',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-[#8b5cf6] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-[#8b5cf6]/30 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white transition-colors text-xs shrink-0 ml-3"
                >
                  GitHub ↗
                </a>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
