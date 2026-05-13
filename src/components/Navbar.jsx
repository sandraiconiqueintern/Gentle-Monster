import { useState, useEffect } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'

const leftLinks = [
  { label: 'Collections', href: '#collection' },
  { label: 'Stores', href: '#stores' },
]

const rightLinks = [
  { label: 'About', href: '#about' },
  { label: 'World', href: '#world' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoColor = scrolled ? 'text-black' : 'text-white'
  const linkColor = scrolled
    ? 'text-black/50 hover:text-black'
    : 'text-white/70 hover:text-white'
  const iconColor = scrolled
    ? 'text-black/60 hover:text-black'
    : 'text-white/70 hover:text-white'

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-black/[0.07]' : ''}
      `}
    >
      <div
        className="
          relative max-w-screen-xl mx-auto
          px-6 md:px-10
          flex items-center
          h-16 md:h-20
        "
      >
        {/* Left nav links — desktop */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {leftLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`
                text-[10px] tracking-[0.25em] uppercase font-light
                transition-colors duration-300
                ${linkColor}
              `}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger — mobile left slot */}
        <button
          className={`md:hidden transition-colors duration-300 ${iconColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen
            ? <X size={17} strokeWidth={1.5} />
            : <Menu size={17} strokeWidth={1.5} />}
        </button>

        {/* Logo — absolutely centered */}
        <a
          href="#"
          className={`
            absolute left-1/2 -translate-x-1/2
            font-sarpanch font-semibold
            text-xl md:text-2xl
            tracking-[0.2em] whitespace-nowrap
            transition-colors duration-300
            ${logoColor}
          `}
        >
          GENTLE MONSTER
        </a>

        {/* Right nav links + icons — desktop */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {rightLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`
                text-[10px] tracking-[0.25em] uppercase font-light
                transition-colors duration-300
                ${linkColor}
              `}
            >
              {label}
            </a>
          ))}
          <button
            className={`transition-colors duration-300 ${iconColor}`}
            aria-label="Search"
          >
            <Search size={17} strokeWidth={1.5} />
          </button>
          <button
            className={`transition-colors duration-300 ${iconColor}`}
            aria-label="Cart"
          >
            <ShoppingBag size={17} strokeWidth={1.5} />
          </button>
        </div>

        {/* Icons — mobile right slot */}
        <div className="md:hidden flex items-center gap-4 ml-auto">
          <button
            className={`transition-colors duration-300 ${iconColor}`}
            aria-label="Search"
          >
            <Search size={17} strokeWidth={1.5} />
          </button>
          <button
            className={`transition-colors duration-300 ${iconColor}`}
            aria-label="Cart"
          >
            <ShoppingBag size={17} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`
          md:hidden overflow-hidden
          bg-black/95 backdrop-blur-sm
          transition-all duration-500
          ${menuOpen ? 'max-h-72' : 'max-h-0'}
        `}
      >
        <div className="px-6 py-2">
          {[...leftLinks, ...rightLinks].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="
                flex items-center py-4
                text-[10px] tracking-[0.3em] uppercase font-light
                text-white/60 hover:text-white
                border-b border-white/[0.07]
                transition-colors
              "
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
