export default function Services() {
  const items = [
    {
      title: 'Therapy',
      desc: 'Experience-based sessions tailored to your goals. Movement, awareness, and practical tools you can use in daily life.',
    },
    {
      title: 'Boxing',
      desc: 'Movement with meaning — learn to throw, receive, dodge, and return in balance with body and mind.',
    },
    {
      title: 'Coaching',
      desc: 'Step-by-step guidance to build resilience, focus, and self-regulation at your pace.',
    },
  ]

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Services</h2>
      <p className="text-slate-300 mb-8 max-w-3xl">
        Everyone gets thrown off balance sometimes — and you can always return to your base. Choose what fits your goals right now.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-slate-200 hover:bg-white/10 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-2">{it.title}</h3>
            <p className="text-sm leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
