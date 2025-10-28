import { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, Loader2, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function MessageBubble({ role, content }) {
  const isUser = role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-cyan-500/15 border border-cyan-400/20 grid place-items-center">
          <Bot className="h-4 w-4 text-cyan-300" />
        </div>
      )}
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isUser
            ? 'bg-white text-black'
            : 'bg-white/10 text-white/90 border border-white/15 backdrop-blur'
        }`}
      >
        {content}
      </div>
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-white text-black grid place-items-center">
          <User className="h-4 w-4" />
        </div>
      )}
    </motion.div>
  );
}

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm your personal AI. Ask me about your data, notes, or anything else. This demo keeps things local for now — the interface is ready for your backend when you are.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const containerRef = useRef(null);

  const canSend = useMemo(() => input.trim().length > 0 && !isThinking, [input, isThinking]);

  useEffect(() => {
    // Auto scroll to bottom on new messages
    if (!containerRef.current) return;
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages, isThinking]);

  async function handleSend(e) {
    e.preventDefault();
    if (!canSend) return;

    const userMsg = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulated AI typing effect
    setIsThinking(true);
    const base = "Got it. I'm ready to connect with your database. For now, this is a local demo response. We can wire this up to your FastAPI when you're ready.";

    // Typewriter effect
    await new Promise((resolve) => setTimeout(resolve, 400));
    let idx = 0;
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    const typeInterval = setInterval(() => {
      idx += 2; // type 2 chars at a time for speed
      setMessages((prev) => {
        const clone = [...prev];
        const last = clone[clone.length - 1];
        if (last && last.role === 'assistant') {
          last.content = base.slice(0, Math.min(idx, base.length));
        }
        return clone;
      });
      if (idx >= base.length) {
        clearInterval(typeInterval);
        setIsThinking(false);
      }
    }, 18);

    // Example: When backend is ready, replace with a real call
    // const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/chat`, { ... })
  }

  return (
    <section id="chat" className="relative bg-black/90 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-6 md:mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Your private AI chat</h2>
            <p className="text-white/60 mt-1 text-sm md:text-base">
              Ask questions, explore data, and keep context across messages.
            </p>
          </div>
        </div>

        {/* Chat history */}
        <div
          ref={containerRef}
          className="h-[48vh] md:h-[56vh] overflow-y-auto space-y-4 p-4 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10"
        >
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <MessageBubble key={i} role={m.role} content={m.content} />
            ))}
          </AnimatePresence>

          {isThinking && (
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              Thinking...
            </div>
          )}
        </div>

        {/* Composer */}
        <form onSubmit={handleSend} className="mt-4 flex items-end gap-2">
          <div className="flex-1">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={2}
                placeholder="Ask about your data, e.g. \"Show me last week's orders by region\""
                className="w-full resize-none rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!canSend}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 font-medium transition-colors ${
              canSend
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-white/10 text-white/50 cursor-not-allowed'
            }`}
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
