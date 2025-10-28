import { Bot, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/20 grid place-items-center">
            <Bot className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="text-white font-semibold leading-none">BlueGlass AI</p>
            <p className="text-xs text-white/60 leading-none mt-1">Personal DB Chat</p>
          </div>
        </div>
        <a
          href="#chat"
          className="inline-flex items-center gap-2 text-sm text-white/90 bg-white/10 hover:bg-white/15 border border-white/20 px-3 py-1.5 rounded-lg transition-colors"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          Start chatting
        </a>
      </div>
    </header>
  );
}
