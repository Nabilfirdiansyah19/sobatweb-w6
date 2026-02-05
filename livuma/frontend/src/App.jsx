import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const About = React.lazy(() => import('./pages/About'))
const Contact = React.lazy(() => import('./pages/Contact'))

const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'))

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-white tracking-widest uppercase">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:id" element={<ProjectDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App
