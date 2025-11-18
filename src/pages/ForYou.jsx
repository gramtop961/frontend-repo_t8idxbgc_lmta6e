export default function ForYou() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-200">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">For You</h1>
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">What you can expect</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Therapy to become a better version of yourself</li>
            <li>Confidentiality and respect for your privacy</li>
            <li>You have control — your pace, your goals</li>
            <li>The time you invest is valid and necessary</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Practical info</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Location: Practice base in your city/area</li>
            <li>Home sessions are possible</li>
            <li>Contact: Email and phone available on the contact page</li>
            <li>First steps: Reach out for an initial call or intake</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
