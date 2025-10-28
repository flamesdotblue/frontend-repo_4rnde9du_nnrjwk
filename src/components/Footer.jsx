export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} BlueGlass AI — Built for your personal workflow.
        </p>
        <p>
          Dark theme • Glassmorphic • 3D animated hero
        </p>
      </div>
    </footer>
  );
}
