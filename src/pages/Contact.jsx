export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-200">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact & Practicalities</h1>
      <section className="space-y-6">
        <div className="rounded-xl border border-white/10 p-4 bg-white/5">
          <h2 className="text-xl font-semibold text-white mb-2">Get in touch</h2>
          <p className="text-slate-300">Email: your@email.com</p>
          <p className="text-slate-300">Phone: +31 6 0000 0000</p>
          <p className="text-slate-300 mt-2">Current waiting list: add timeframe or note availability.</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4 bg-white/5">
          <h2 className="text-xl font-semibold text-white mb-2">Legal & registrations</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Chamber of Commerce (KvK): [number]</li>
            <li>Professional registrations: [associations]</li>
            <li>Insurance & reimbursement info</li>
            <li><a href="/privacy" className="underline hover:text-white">Privacy / Cookie policy</a>, <a href="/terms" className="underline hover:text-white">Terms</a></li>
          </ul>
        </div>
      </section>
    </main>
  )
}
