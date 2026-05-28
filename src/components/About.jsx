import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const highlights = [
  { label: 'University', value: 'University at Buffalo' },
  { label: 'Degree', value: 'B.S. Computer Science' },
  { label: 'Focus', value: 'Full Stack Dev' },
  { label: 'GitHub', value: '@ErenYegar04' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-[#8b5cf6] text-xs font-semibold tracking-[0.3em] uppercase mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Who I am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeUp}
            className="space-y-5 text-white/60 leading-relaxed"
          >
            <p>
              I'm a Computer Science student at the{' '}
              <span className="text-white">University at Buffalo</span>, passionate about
              building software that's both functional and thoughtfully crafted.
            </p>
            <p>
              My interests span full-stack web development, distributed systems, and machine
              learning. I enjoy working across the entire stack — from designing REST APIs to
              building polished, responsive UIs.
            </p>
            <p>
              Outside of coding, I like exploring open-source projects, contributing to tech
              communities, and staying current with the latest in software engineering.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ label, value }) => (
              <div key={label} className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <p className="text-[#8b5cf6] text-xs font-medium mb-1.5">{label}</p>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
