export default function WhatIsPMT() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-200">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">What is Psychomotor Therapy (PMT)?</h1>
      <section className="space-y-6">
        <p>PMT is an experience-based therapy that connects thinking, feeling, and acting through the body. We use movement, sports, play, and relaxation to make patterns visible and workable in a safe, supportive way.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 p-4 bg-white/5">
            <h3 className="font-semibold text-white mb-2">How it works</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Intake conversation to explore goals and wishes</li>
              <li>Tailored treatment plan</li>
              <li>Body-based work — sometimes outdoors</li>
              <li>Recognition of patterns and triggers</li>
              <li>Integration into daily life</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-4 bg-white/5">
            <h3 className="font-semibold text-white mb-2">Boxing in PMT</h3>
            <p className="text-slate-300">Learn to throw and return, to receive and dodge — always in balance with body and mind. Practice anticipation, choice, emotion regulation, and staying present. You decide your pace.</p>
          </div>
        </div>
        <p>Sessions can happen in a movement space or, if you prefer, at home.</p>
      </section>
    </main>
  )
}
