const stores = [
  {
    city: 'Seoul',
    address: 'Garosu-gil, Sinsa-dong\nGangnam-gu, Seoul 06030',
    hours: 'Mon – Sun  11:00 – 21:00',
    image: '/Seoul.svg',
  },
  {
    city: 'Milan',
    address: '10 Corso Como\nMilano, MI 20154',
    hours: 'Mon – Sun  11:00 – 20:00',
    image: '/Milan.svg',
  },
  {
    city: 'Manila',
    address: '10 Corso Como\nMilano, MI 20154',
    hours: 'Mon – Sun  10:00 – 22:00',
    image: '/Manila.svg',
  },
]

export default function FlagshipStores() {
  return (
    <section id="stores" className="bg-[#f7f7f7] py-20 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16 border-b border-black/[0.08] pb-6">
          <div>
            <p className="text-[9px] tracking-[0.45em] text-black/30 uppercase mb-2.5 font-light">Global</p>
            <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-black font-light tracking-tight">
              Flagship Stores
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-[9px] tracking-[0.3em] text-black/40 uppercase hover:text-black transition-colors duration-300 font-light mb-1"
          >
            Find a Store →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stores.map((store) => (
            <div key={store.city} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/3] bg-neutral-200 mb-6">
                <img
                  src={store.image}
                  alt={`${store.city} Gentle Monster store`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-condensed text-2xl md:text-3xl text-black font-light tracking-wider mb-3">
                {store.city}
              </p>
              <p className="text-[9px] tracking-[0.12em] text-black/40 leading-loose font-light whitespace-pre-line">
                {store.address}
              </p>
              <p className="text-[9px] tracking-[0.12em] text-black/20 font-light mt-3">
                {store.hours}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
