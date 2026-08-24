'use client'
import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  Cpu,
  User,
  Code2,
  Terminal,
  Briefcase,
  Mail
} from 'lucide-react'

// --- NEURAL NETWORK CANVAS EFFECT ---
const NeuralNetworkEffect = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      particles.current.push({
        x: mouse.current.x,
        y: mouse.current.y,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        life: 1.0
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.current.length; i++) {
        let p = particles.current[i];
        p.x += p.speedX; p.y += p.speedY; p.life -= 0.008;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.life * 0.5})`;
        ctx.fill();
        for (let j = i + 1; j < particles.current.length; j++) {
          let p2 = particles.current[j];
          let dx = p.x - p2.x; let dy = p.y - p2.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            let opacity = (1 - distance / 100) * p.life * 0.4;
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 0.5; ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      }
      particles.current = particles.current.filter(p => p.life > 0);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[5]" />;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', icon: <User className="w-4 h-4" /> },
    { label: 'Skills', icon: <Code2 className="w-4 h-4" /> },
    { label: 'Projects', icon: <Terminal className="w-4 h-4" /> },
    { label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      <NeuralNetworkEffect />
      <nav className="backdrop-blur-md bg-[#0F172A]/70 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* LOGO LEFT */}
            <div className="flex items-center gap-3 text-xl font-bold tracking-wider">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full animate-pulse"></div>
                <Cpu className="w-7 h-7 text-cyan-400 relative z-10" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Kanike Madhu
              </span>
            </div>

            {/* LINKS RIGHT (DESKTOP) */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((item) => (
                <a key={item.label} href={`#${item.label.toLowerCase()}`}
                  className="group px-3 py-2 rounded-full font-medium text-white text-sm bg-indigo-600/10 border border-indigo-400/20 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all flex items-center gap-2">
                  <span className="text-cyan-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>

            {/* MOBILE TOGGLE */}
            <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-white/10 px-4 py-6 flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-white font-medium text-lg hover:text-cyan-400 transition-colors"
              >
                <span className="text-cyan-400">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
