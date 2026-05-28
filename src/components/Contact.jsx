import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const contactDetails = [
  { label: 'Email', value: 'sushilmuppidi20@gmail.com', href: 'mailto:sushilmuppidi20@gmail.com' },
  { label: 'GitHub', value: 'github.com/ErenYegar04', href: 'https://github.com/ErenYegar04' },
  { label: 'University', value: 'University at Buffalo', href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-[#8b5cf6] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeUp}
          >
            <p className="text-white/60 leading-relaxed mb-8">
              I'm currently open to internship and full-time opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is always open.
            </p>
            <a
              href="mailto:sushilmuppidi20@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              Send me an email
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
            className="space-y-4"
          >
            {contactDetails.map(({ label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]"
              >
                <span className="text-[#8b5cf6] text-xs font-medium w-20 shrink-0">{label}</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-white/60 text-sm">{value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
