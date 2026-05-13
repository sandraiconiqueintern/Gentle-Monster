const gridImages = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/gm-grid-${i + 1}/600/600`,
  alt: `Gentle Monster editorial ${i + 1}`,
}))

export default function EditorialGrid() {
  return (
    <section id="world" className="bg-white py-20 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[9px] tracking-[0.45em] text-black/30 uppercase mb-2.5 font-light">Editorial</p>
          <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-black font-light tracking-tight">
            The World of GM
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-1 md:gap-1.5 mb-8 md:mb-10">
          {gridImages.map((img) => (
            <div key={img.id} className="group overflow-hidden aspect-square bg-neutral-200 cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] tracking-[0.45em] text-black/30 uppercase font-light">
          Follow us @gentlemonster
        </p>
      </div>
    </section>
  )
}
