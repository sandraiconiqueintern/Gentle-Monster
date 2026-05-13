export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-100">
      {/* Hero image */}
      <img
        src="/hero.svg"
        alt="Gentle Monster"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Subtle top gradient so white navbar text stays legible */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-gradient-to-b from-black/25 via-transparent to-transparent
        "
      />

      {/* Bottom-center outlined CTA */}
      <div className="absolute bottom-14 md:bottom-20 left-0 right-0 flex justify-center">
        <a
          href="#collection"
          className="
            border-2 border-white rounded-full
            text-white text-[12px] tracking-[0.4em] uppercase font-regular
            px-10 py-3.5  
            hover:bg-white hover:text-black
            transition-colors duration-300
          "
        >
          Explore Collection
        </a>
      </div>
    </section>
  )
}
