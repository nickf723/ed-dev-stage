import { LucideReact } from 'lucide-react'; // Example icon import

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      {/* This div uses the "glass" style you defined 
        in your globals.css file.
      */}
      <div className="glass p-10 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold">
          Video Stage Framework
        </h1>
        <p>
          Ready to build animations.
        </p>
        {/* Example of using an icon and the accent color */}
        <button 
          className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all"
          style={{ backgroundColor: 'var(--accent)', color: '#000' }}
        >
          {/* <LucideReact size={18} /> */}
          <span>Get Started</span>
        </button>
      </div>
    </main>
  );
}