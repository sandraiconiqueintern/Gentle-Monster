import { Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  Eyewear: ['Sunglasses', 'Optical', 'Goggles', 'Kids'],
  'Brand World': ['About', 'Art', 'Stores', 'Journal'],
  Support: ['FAQ', 'Shipping', 'Returns', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy'],
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="15"
      height="15"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.07] pt-16 md:pt-20 pb-8 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 mb-16 md:mb-20">
          <div>
            <p className="font-condensed text-xl tracking-[0.35em] text-white font-light mb-2">
              GENTLE MONSTER
            </p>
            <p className="text-[9px] tracking-[0.2em] text-white/25 uppercase font-light">
              See the world differently
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:w-80">
            <p className="text-[9px] tracking-[0.3em] text-white/60 uppercase mb-4 font-light">
              Newsletter
            </p>
            <div className="flex border border-white/15">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent text-white text-[10px] tracking-wide placeholder-white/20 px-4 py-3 focus:outline-none font-light min-w-0"
              />
              <button className="border-l border-white/15 px-5 text-[9px] tracking-[0.3em] text-white uppercase hover:bg-white hover:text-black transition-colors duration-300 font-light whitespace-nowrap flex-shrink-0">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-20">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-5 font-light">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[9px] tracking-[0.15em] text-white/25 hover:text-white transition-colors duration-200 uppercase font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 border-t border-white/[0.07] pt-8">
          <p className="text-[9px] tracking-[0.15em] text-white/15 font-light">
            © 2025 Gentle Monster. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/25 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={15} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-white/25 hover:text-white transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="#"
              className="text-white/25 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
