import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to enhance glassmorphism, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-cyan-200/90 bg-cyan-500/10 border border-cyan-300/20 px-2.5 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5" />
            Glassmorphic • 3D • Dark
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Chat with your data using a sleek, modern AI
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70 leading-relaxed">
            A personal, privacy-first chat interface designed for your databases and documents.
            Enjoy a distraction-free dark theme and a soothing, animated hero powered by 3D.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#chat"
              className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white/90 hover:bg-white text-black font-semibold px-5 py-3 transition-colors"
            >
              Start a conversation
            </a>
            <a
              href="#features"
              className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white/90 px-5 py-3 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
