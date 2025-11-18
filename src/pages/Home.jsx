import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Take the first step</h3>
              <p className="text-white/90">Contact for an intake and we’ll map your goals together.</p>
            </div>
            <a href="/contact" className="inline-flex items-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90">Schedule your intake</a>
          </div>
        </div>
      </section>
    </main>
  )
}
