import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/mission-vision', label: 'Mission & Vision' },
  { to: '/what-is-pmt', label: 'What is PMT?' },
  { to: '/approach', label: 'My Approach' },
  { to: '/for-you', label: 'For You' },
  { to: '/for-referrers', label: 'For Referrers' },
  { to: '/locations', label: 'Locations' },
  { to: '/about', label: 'Who I Am' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white font-bold">B</span>
          <span className="text-white font-semibold">Boxing for Balance</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm px-3 py-2 rounded-md transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="ml-4 inline-flex items-center rounded-md bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-400 transition-colors">
          Schedule intake
        </Link>
      </div>
      <div className="md:hidden">
        <div className="max-w-6xl mx-auto px-4 pb-3 flex flex-wrap gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-xs px-3 py-1.5 rounded-md transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
