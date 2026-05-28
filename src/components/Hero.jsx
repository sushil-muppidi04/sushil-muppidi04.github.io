import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[700px] h-[700px] bg-[#8b5cf6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.p {...fadeUp(0)} className="text-[#8b5cf6] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          Hello, I'm
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-4 leading-none"
        >
          Sushil Muppidi
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-lg sm:text-xl text-white/40 mb-10">
          Full Stack Developer &nbsp;·&nbsp; CS Student at University at Buffalo
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="https://github.com/ErenYegar04"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
          >
            GitHub ↗
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}
