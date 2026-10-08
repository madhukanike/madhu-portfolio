'use client'
import {
  ExternalLink, Github, Terminal, MessageSquare, ShoppingCart,
  TrendingDown, FileSearch, Hash, ShieldCheck,
  TerminalIcon,
  Brain
} from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: "SYS-LOG_001",
      title: "AI INTERVIEW COACH",
      icon: <MessageSquare size={16} />,
      tags: ["Flask", "Groq / LLaMA 3.3 70B", "NLP"],
      theme: "cyan",
      status: "LIVE",
      points: [
        {
          label: "ARCHITECTURE",
          content: "Built a Flask web app powered by Groq's LLaMA 3.3 70B for multi-mode mock interviews, with ATS resume scoring, real-time speech analysis, and webcam-based facial emotion detection."
        },
        {
          label: "OPERATIONAL_IMPACT",
          content: "Stores interview history in SQLite and renders performance trends with Chart.js so candidates can track improvement across sessions."
        }
      ],
      metrics: ["Multi-Mode", "ATS Scoring", "Speech + Emotion", "Live Deploy"],
      github: "https://github.com/madhukanike/ai-interview-coach",
      demo: "https://ai-interview-coach-app.onrender.com"
    },
    {
      id: "SYS-LOG_002",
      title: "CAREERPILOT AI",
      icon: <Brain size={16} />,
      tags: ["Python", "FastAPI", "React", "Groq LLaMA 3.3 70B"],
      theme: "purple",
      status: "LIVE",
      points: [
        {
          label: "ARCHITECTURE",
          content: "Built a full- stack AI career assistant using FastAPI, React, Groq LLaMA, and Python to analyze resumes, match candidates with job descriptions, and generate personalized interview questions.."
        },
        {
          label: "OPERATIONAL_IMPACT",
          content: "Automates resume analysis, job matching, and interview preparation through an interactive web application, helping candidates identify skill gaps and improve their job readiness."
        }
      ],
      metrics: ["Resume Analysis", "JD Matching", "AI Interview", "Live Deploy"],
      github: "https://github.com/madhukanike/careerpilot-ai",
      demo: "https://carrerpilot-ai-1-459n.onrender.com"
    },
    {
      id: "SYS-LOG_003",
      title: "CUSTOMER CHURN PREDICTION",
      icon: <TrendingDown size={16} />,
      tags: ["Scikit-learn", "SMOTE", "Feature Engineering"],
      theme: "blue",
      status: "STABLE",
      points: [
        {
          label: "ARCHITECTURE",
          content: "Trained a classification model on 50,000+ customer records, using SMOTE to correct class imbalance and engineered features to capture behavioral churn signals."
        },
        {
          label: "OPERATIONAL_IMPACT",
          content: "Achieved an 89% F1-score, giving a reliable signal for prioritizing retention outreach."
        }
      ],
      metrics: ["89% F1-Score", "50K+ Records", "SMOTE", "Scikit-learn"],
      github: "https://github.com/madhukanike/customer-churn-prediction",
      demo: "https://customer-churn-prediction-swfsingrvtlxtin4pk8wcj.streamlit.app/"
    },
    {
      id: "SYS-LOG_004",
      title: "RESUME SCREENING ANALYTICS",
      icon: <FileSearch size={16} />,
      tags: ["TF-IDF", "Cosine Similarity", "NLP"],
      theme: "cyan",
      status: "STABLE",
      points: [
        {
          label: "ARCHITECTURE",
          content: "Built an NLP pipeline that uses TF-IDF vectorization and cosine similarity to score resumes against job descriptions, with entity extraction to pull structured candidate data."
        },
        {
          label: "OPERATIONAL_IMPACT",
          content: "Automates the first pass of resume-to-JD matching that recruiters typically do manually."
        }
      ],
      metrics: ["TF-IDF", "Entity Extraction", "JD Matching", "NLP Pipeline"],
      github: "https://github.com/madhukanike/Resume-Screening-using-Automation-Tppls-using-NlP-Techniqeso",
      demo: null
    }
  ]

  const getTheme = (theme) => {
    const themes = {
      cyan: {
        text: 'text-cyan-400',
        hoverText: 'group-hover:text-cyan-400',
        border: 'border-cyan-500/40',
        hoverBorder: 'group-hover:border-cyan-400',
        shadow: 'group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]',
        header: 'bg-cyan-500/20',
        iconBg: 'bg-cyan-500/10'
      },
      purple: {
        text: 'text-purple-400',
        hoverText: 'group-hover:text-purple-400',
        border: 'border-purple-500/40',
        hoverBorder: 'group-hover:border-purple-400',
        shadow: 'group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.5)]',
        header: 'bg-purple-500/20',
        iconBg: 'bg-purple-500/10'
      },
      blue: {
        text: 'text-blue-400',
        hoverText: 'group-hover:text-blue-400',
        border: 'border-blue-500/40',
        hoverBorder: 'group-hover:border-blue-400',
        shadow: 'group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.5)]',
        header: 'bg-blue-500/20',
        iconBg: 'bg-blue-500/10'
      },
    };
    return themes[theme] || themes.cyan;
  }

  return (
    <section id="projects" className="relative py-24 bg-[#020617] text-slate-300 font-mono overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:26px_26px] z-0"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        <div className="mb-20 border-l-4 border-cyan-500 pl-6">
          <div className="flex items-center gap-2 text-cyan-500 text-[10px] mb-2 font-bold tracking-[0.2em]">
            <Terminal size={14} className="animate-pulse" />
            <span>MADHU@PORTFOLIO:~/PROJECTS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
            Active <span className="text-cyan-500">Builds</span>
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const t = getTheme(project.theme);
            return (
              <div key={index} className="relative group">
                <div className={`rounded-3xl border ${t.border} ${t.hoverBorder} ${t.shadow} bg-slate-950/90 backdrop-blur-md overflow-hidden transition-all duration-500 shadow-2xl group-hover:-translate-y-3`}>

                  {/* Terminal Header */}
                  <div className={`flex items-center justify-between px-6 py-3 border-b ${t.border} ${t.header} bg-black/40`}>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 border border-green-500/20" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.2em] ${t.text} uppercase transition-all duration-500 group-hover:brightness-125`}>
                        {project.id} // STATUS: {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold">
                      <Hash size={10} />
                      PID: {1024 + index * 42}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-12">
                    {/* Icon Visual Column */}
                    <div className="md:col-span-5 p-6 bg-black/40 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800">
                      <div className={`relative w-full aspect-video md:aspect-auto md:h-full rounded-2xl border ${t.border} ${t.hoverBorder} ${t.shadow} bg-black overflow-hidden flex items-center justify-center transition-all duration-500`}>
                        <div className={`w-24 h-24 rounded-2xl ${t.iconBg} border ${t.border} flex items-center justify-center ${t.text}`}>
                          {project.icon}
                        </div>
                        <div className="absolute bottom-3 left-3 flex gap-1 z-20 flex-wrap">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 bg-black/80 border border-white/10 text-[9px] font-bold text-white uppercase tracking-tighter rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-7 p-8 lg:p-10 space-y-8 flex flex-col justify-between">
                      <div>
                        <h3 className={`text-3xl font-black text-white mb-2 ${t.hoverText} transition-colors duration-500 tracking-tight uppercase`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold italic tracking-wide">
                          <ShieldCheck size={12} className="text-green-500" />
                          BUILT_BY: KANIKE_MADHU
                        </div>
                      </div>

                      <div className="space-y-6">
                        {project.points.map((pt, i) => (
                          <div key={i} className="flex flex-col gap-1.5">
                            <span className={`text-[10px] font-bold ${t.text} tracking-widest uppercase transition-all duration-500 group-hover:brightness-125`}>
                              [{pt.label}]
                            </span>
                            <p className="text-[12px] text-slate-400 leading-relaxed font-medium uppercase border-l border-slate-800 pl-4 transition-colors duration-500 group-hover:border-slate-600 group-hover:text-slate-300">
                              {pt.content}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-8 border-t border-slate-900 transition-colors duration-500 group-hover:border-slate-700">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                          {project.metrics.map((m, i) => (
                            <div key={i} className={`flex flex-col p-3 bg-black/60 border ${t.border} rounded-xl transition-all duration-500 group-hover:bg-black/80 group-hover:border-opacity-70`}>
                              <span className="text-[8px] text-slate-600 font-bold uppercase mb-1">Tag_0{i}</span>
                              <span className={`text-[11px] font-black ${t.text} whitespace-nowrap transition-all duration-500 group-hover:brightness-125`}>{m}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className={`p-4 border ${t.border} bg-white/5 hover:bg-white/10 transition-all rounded-xl group/btn`}>
                            <Github size={20} className={`${t.text} group-hover/btn:scale-110 transition-transform`} />
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`flex-1 px-6 py-4 border ${t.border} bg-white/5 hover:bg-white/10 transition-all rounded-xl text-[11px] font-black flex items-center justify-center gap-3 ${t.text} tracking-[0.2em] group-hover:bg-white/20`}>
                              <ExternalLink size={18} /> VIEW_LIVE_DEMO
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
