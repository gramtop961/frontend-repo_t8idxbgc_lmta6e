export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 text-slate-400 text-sm flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        <p>© {new Date().getFullYear()} Boxing for Balance</p>
        <nav className="flex flex-wrap gap-4">
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
