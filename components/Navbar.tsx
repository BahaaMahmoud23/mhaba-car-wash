'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'من نحن', href: '#about' },
  { label: 'موقعنا', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo — right in RTL */}
          <a
            href="#hero"
            className={`text-2xl font-black tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-gradient' : 'text-white'
            }`}
          >
            مهابة
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? 'text-[#64748B] hover:text-[#0B0F1A]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#location"
            className="hidden md:inline-flex items-center gap-2 bg-[#1E90FF] text-white px-5 py-2.5 rounded-full text-sm font-bold glow-btn cursor-pointer transition-all duration-300"
          >
            احجز الآن
          </a>

          {/* Mobile burger */}
          <button
            className={`md:hidden cursor-pointer p-2 transition-colors duration-300 ${
              scrolled ? 'text-[#0B0F1A]' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-[#E2E8F0] shadow-lg px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 list-none pt-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[#64748B] hover:text-[#0B0F1A] text-base font-semibold py-1 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#location"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex bg-[#1E90FF] text-white px-6 py-2.5 rounded-full text-sm font-bold cursor-pointer glow-btn"
                >
                  احجز الآن
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
