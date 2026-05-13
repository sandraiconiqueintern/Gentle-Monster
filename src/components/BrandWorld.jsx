export default function BrandWorld() {
  return (
    <section id="about" className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden bg-black">
      <video
        src="/pv1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-8 max-w-4xl">
          <p className="text-[9px] tracking-[0.55em] text-white/40 uppercase mb-8 font-light">
            Brand World
          </p>
          <h2 className="font-bold text-[20xvw] md:text-[5vw] lg:text-[4vw] text-white  tracking-[0.15em] leading-tight">
            Where art meets vision
          </h2>
        </div>
      </div>
    </section>
  )
}
