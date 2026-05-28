import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'FastAPI', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Linux', 'AWS', 'Figma', 'VS Code'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-[#8b5cf6] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What I work with</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
            >
              <h3 className="text-white text-sm font-semibold mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/60 hover:border-[#8b5cf6]/50 hover:text-white/80 transition-colors duration-200 cursor-default"
                  >
                    {skill}
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
