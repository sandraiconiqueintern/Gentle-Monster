const products = [
  {
    id: 1,
    name: 'MAGMA 01',
    type: 'Rectangular Frame',
    price: '$340',
    image1: '/p1.svg',
    image2: 'https://picsum.photos/seed/gm-p1-side/600/800',
  },
  {
    id: 2,
    name: 'HEIZER',
    type: 'Cat Eye Frame',
    price: '$320',
    image1: '/p2.svg',
    image2: 'https://picsum.photos/seed/gm-p2-side/600/800',
  },
  {
    id: 3,
    name: 'VIBE 01',
    type: 'Shield Frame',
    price: '$360',
    image1: '/p3.svg',
    image2: 'https://picsum.photos/seed/gm-p3-side/600/800',
  },
  {
    id: 4,
    name: 'OTTO',
    type: 'Oval Frame',
    price: '$310',
    image1: '/p4.svg',
    image2: 'https://picsum.photos/seed/gm-p4-side/600/800',
  },
]

function ProductCard({ name, type, price, image1 }) {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
        <img
          src={image1}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="pt-4 pb-1">
        <div className="flex items-baseline justify-between">
          <p className="text-[11px] tracking-[0.3em] text-black uppercase font-light">{name}</p>
          <p className="text-[11px] tracking-[0.1em] text-black/50 font-light">{price}</p>
        </div>
        <p className="text-[9px] tracking-[0.2em] text-black/30 uppercase mt-1.5 font-light">{type}</p>
      </div>
    </div>
  )
}

export default function NewCollection() {
  return (
    <section id="collection" className="bg-white py-20 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16 border-b border-black/[0.08] pb-6">
          <div>
            <p className="text-[9px] tracking-[0.45em] text-black/30 uppercase mb-2.5 font-light">SS25</p>
            <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-black font-light tracking-tight">
              New Collection
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-[9px] tracking-[0.3em] text-black/40 uppercase hover:text-black transition-colors duration-300 font-light mb-1"
          >
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
