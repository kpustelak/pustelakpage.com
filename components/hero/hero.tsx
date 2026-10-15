export default function Hero() {
    return(
        <section id="home" className="relative h-svh overflow-hidden">
            <video src="/videos/asciify.mp4" autoPlay muted loop playsInline className="absolute inset-0 size-full object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-b from-transparent to-background" />
            <div className="section-container relative z-20">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </div>
        </section>
    )
}
