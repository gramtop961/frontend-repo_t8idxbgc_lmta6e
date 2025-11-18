export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.2),transparent_35%)]" />
      <div className="max-w-6xl mx-auto px-4 py-24 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Boxing for Balance — find your base, reclaim your strength
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            Psychomotor therapy and coaching through movement and mindful boxing in your region. Supportive, action-oriented, and warm.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center rounded-md bg-blue-500 text-white px-5 py-3 text-sm font-semibold hover:bg-blue-400 transition-colors">Explore services</a>
            <a href="/contact" className="inline-flex items-center rounded-md bg-white/10 text-white px-5 py-3 text-sm font-semibold hover:bg-white/20 transition-colors">Take the first step</a>
          </div>
        </div>
      </div>
    </section>
  )
}
