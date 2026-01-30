import { GradientBackground } from "@/components/gradient-background"
import { Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GradientBackground />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <header className="absolute top-6 left-6 md:top-8 md:left-8">
        <span className="text-white/70 text-sm font-medium tracking-wide lowercase">
          tunajam
        </span>
      </header>

      <section className="flex items-center justify-center min-h-screen px-6">
        <p
          className={`${instrumentSerif.className} text-white/90 text-center text-balance font-normal tracking-tight text-4xl md:text-6xl`}
        >
          Leave the shore behind.
        </p>
      </section>

      <footer className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
        <a
          href="mailto:begin@tunajam.com"
          className="text-white/50 hover:text-white/80 transition-colors text-sm"
        >
          begin@tunajam.com
        </a>
      </footer>
    </main>
  )
}
