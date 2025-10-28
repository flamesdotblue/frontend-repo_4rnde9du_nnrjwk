import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ChatPanel from './components/ChatPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero3D />
        {/* Simple features blurb */}
        <section id="features" className="bg-black">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-3 gap-6">
            {[{
              title: 'Privacy-first',
              desc: 'Designed for personal use. Keep conversations and data under your control.'
            }, {
              title: 'DB-aware',
              desc: 'Connect to your databases and files to ask rich, contextual questions.'
            }, {
              title: 'Beautiful & fast',
              desc: 'Dark, glassy UI with smooth motion so your flow feels effortless.'
            }].map((f, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <ChatPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
