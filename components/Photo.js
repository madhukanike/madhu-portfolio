'use client'
import { Cpu, Download } from 'lucide-react'

export default function Photo() {
  return (
    <section id="home" className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Static Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:30px_30px] z-[1]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Kanike Madhu</span>
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-cyan-500/50"></div>
              <h2 className="text-xl md:text-2xl font-mono text-cyan-300 uppercase tracking-widest">AI Engineer | Generative AI | Machine Learning</h2>
            </div>
            <p className="text-lg mb-10 text-slate-300 leading-relaxed max-w-xl font-light">
              B.Tech CSE (AI & ML) graduate with hands-on experience building AI applications, machine learning models, and <span className="text-white border-b border-indigo-400/50">NLP solutions using Python</span>.            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#contact" className="px-8 py-3 rounded-full font-semibold text-white bg-indigo-600/20 border border-indigo-400/50 hover:bg-indigo-600/40 transition-all">Get In Touch</a>
              <a href="#projects" className="px-8 py-3 rounded-full font-semibold text-indigo-300 border border-indigo-300/30 hover:border-cyan-400 transition-all flex items-center gap-2">
                <Cpu size={18} /> View Projects
              </a>
              <a href="/Kanike_Madhu_Resume.pdf" download className="px-8 py-3 rounded-full font-semibold text-indigo-300 border border-indigo-300/30 hover:border-cyan-400 transition-all flex items-center gap-2">
                <Download size={18} /> Resume
              </a>
            </div>

          </div>

          <div className="flex justify-center relative">
            <div className="absolute w-[340px] h-[340px] border border-indigo-500/10 rounded-full animate-spin-slow"></div>
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-indigo-500/50 to-cyan-500/50 shadow-[0_0_60px_rgba(99,102,241,0.3)] overflow-hidden">
              {/* Replace this block with an <img src="/madhu-photo.jpg" .../> once you add your photo to /public */}
              <img src="/madhu-photo.jpg" alt="Kanike Madhu" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>
    </section>
  );
}