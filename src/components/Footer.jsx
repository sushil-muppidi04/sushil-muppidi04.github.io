export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/20 text-sm">© 2026 Sushil Muppidi</span>
        <a
          href="https://github.com/ErenYegar04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/20 hover:text-white/60 text-sm transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  )
}
