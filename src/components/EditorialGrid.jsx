const gridItems = [
  { id: 1, src: '/1.mp4',  type: 'video' },
  { id: 2, src: '/2.svg',  type: 'image' },
  { id: 3, src: '/3..mp4', type: 'video' },
  { id: 4, src: '/4.svg',  type: 'image' },
  { id: 5, src: '/5.svg',  type: 'image' },
  { id: 6, src: '/6.svg',  type: 'image' },
  { id: 7, src: '/7.mp4',  type: 'video' },
  { id: 8, src: '/8.svg',  type: 'image' },
  { id: 9, src: '/9.mp4',  type: 'video' },
]

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
          {gridItems.map((item) => (
            <div key={item.id} className="group overflow-hidden aspect-square bg-neutral-200 cursor-pointer">
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Gentle Monster editorial ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
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
