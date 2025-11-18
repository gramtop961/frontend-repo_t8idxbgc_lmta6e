import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MissionVision from './pages/MissionVision'
import WhatIsPMT from './pages/WhatIsPMT'
import Approach from './pages/Approach'
import ForYou from './pages/ForYou'
import ForReferrers from './pages/ForReferrers'
import Locations from './pages/Locations'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/what-is-pmt" element={<WhatIsPMT />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/for-you" element={<ForYou />} />
        <Route path="/for-referrers" element={<ForReferrers />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
