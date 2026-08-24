import { GraduationCap, Briefcase, Award } from 'lucide-react'

export default function Experience() {
  const items = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "AICTE–EduSkills Virtual Internship",
      org: "Supported by Google for Developers",
      period: "Jul 2024 – Sep 2024",
      color: "cyan",
      points: [
        "Completed a structured virtual internship program supported by Google for Developers, covering applied AI/ML fundamentals and project-based learning."
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech, CSE (AI & ML)",
      org: "Nalla Narasimha Reddy Engineering College, Hyderabad",
      period: "Graduated 2025",
      color: "purple",
      points: [
        "Core coursework in machine learning, NLP, data structures & algorithms, and full-stack development.",
        "Built three major portfolio projects: AI Interview Coach, Customer Churn Prediction, and Resume Screening Analytics."
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Infosys Springboard — Assessment Cleared",
      org: "Infosys",
      period: "2026",
      color: "blue",
      points: [
        "Cleared the Infosys SP Round 1 technical assessment and was shortlisted for the in-person Round 2."
      ]
    }
  ]

  const colorMap = {
    cyan: { text: "text-cyan-300", border: "border-cyan-500/40", iconBg: "bg-cyan-500/20", glow: "shadow-[0_0_25px_rgba(6,182,212,0.25)]" },
    purple: { text: "text-purple-300", border: "border-purple-500/40", iconBg: "bg-purple-500/20", glow: "shadow-[0_0_25px_rgba(168,85,247,0.25)]" },
    blue: { text: "text-blue-300", border: "border-blue-500/40", iconBg: "bg-blue-500/20", glow: "shadow-[0_0_25px_rgba(59,130,246,0.25)]" },
  }

  return (
    <section id="experience" className="relative py-24 bg-[#0B1120] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Experience &amp; Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
        </div>

        <div className="space-y-8">
          {items.map((item, i) => {
            const c = colorMap[item.color]
            return (
              <div key={i} className={`group relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border-2 ${c.border} ${c.glow} hover:-translate-y-1 transition-all duration-500`}>
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 shrink-0 rounded-xl ${c.iconBg} border ${c.border} flex items-center justify-center ${c.text}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className={`text-xl font-bold ${c.text}`}>{item.title}</h3>
                      <span className="text-xs font-mono text-slate-400 tracking-wide">{item.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{item.org}</p>
                    <ul className="space-y-2">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="text-gray-300 text-sm leading-relaxed pl-4 border-l border-slate-700">
                          {p}
                        </li>
                      ))}
                    </ul>
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
