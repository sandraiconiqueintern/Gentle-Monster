import { useRef } from 'react'

const collabs = [
  {
    brand: 'JENNIE',
    subtitle: 'Gentle Monster × Jennie',
    year: '2024',
    image: '/Jennie.svg',
    video: '/Jennie.mp4',
  },
  {
    brand: 'MM6',
    subtitle: 'Gentle Monster × Maison Margiela',
    year: '2024',
    image: '/MM6.svg',
    video: '/MM6.mp4',
  },
  {
    brand: 'AMBUSH',
    subtitle: 'Gentle Monster × AMBUSH',
    year: '2023',
    image: '/Ambush.svg',
    video: '/AMBUSH.mp4',
  },
  {
    brand: 'TAMBURINS',
    subtitle: 'Gentle Monster × Tamburins',
    year: '2023',
    image: '/Tamburnis.svg',
    video: '/Tamburnis.mp4',
  },
  {
    brand: 'G-DRAGON',
    subtitle: 'Gentle Monster × Kwon Ji Yong',
    year: '2022',
    image: '/Gdragon.svg',
    video: null,
  },
  {
    brand: 'HERNO',
    subtitle: 'Gentle Monster × Herno',
    year: '2022',
    image: '/Herno.svg',
    video: null,
  },
]

function CollabCard({ brand, subtitle, year, image, video }) {
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className="group relative overflow-hidden aspect-square bg-zinc-900 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static image — always visible, fades out on hover if video exists */}
      <img
        src={image}
        alt={subtitle}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-500
          ${video ? 'group-hover:opacity-0' : 'group-hover:scale-105 transition-transform duration-700'}
        `}
      />

      {/* Video — only rendered when a video is provided */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          loop
          className="
            absolute inset-0 w-full h-full object-cover
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />
      )}

      {/* Hover overlay gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/85 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* Hover text */}
      <div
        className="
          absolute bottom-0 left-0 right-0 p-5 md:p-6
          translate-y-3 group-hover:translate-y-0
          opacity-0 group-hover:opacity-100
          transition-all duration-500
        "
      >
        <p className="text-[8px] tracking-[0.35em] text-white/50 uppercase mb-1.5 font-light">
          {year}
        </p>
        <p className="text-xs md:text-sm tracking-[0.2em] text-white uppercase font-light">
          {brand}
        </p>
      </div>
    </div>
  )
}

export default function Collaborations() {
  return (
    <section className="bg-zinc-950 py-20 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/[0.08] pb-6">
          <div>
            <p className="text-[9px] tracking-[0.45em] text-white/30 uppercase mb-2.5 font-light">
              Selected Works
            </p>
            <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight">
              Collaborations
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.04]">
          {collabs.map((collab) => (
            <CollabCard key={collab.brand} {...collab} />
          ))}
        </div>
      </div>
    </section>
  )
}
