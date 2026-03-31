
export default function Skills() {
  const technologies = [
    { name: 'React', category: 'Frontend', level: 90 },
    { name: 'TypeScript', category: 'Language', level: 85 },
    { name: 'Tailwind CSS', category: 'Styling', level: 95 },
    { name: 'Next.js', category: 'Framework', level: 80 },
    { name: 'Node.js', category: 'Backend', level: 70 },
  ];

  const softSkills = [
    'Clean Code & Architecture',
    'Responsive Design',
    'Agile & Scrum',
    'Problem Çözme',
    'Takım Çalışması'
  ];

  return (
    <section id="yetenekler" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-cyan-300 mb-4 inline-block">
            Neler Yapabilirim?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Geliştirdiğim projelerde modern teknolojileri ve en iyi mimari pratikleri (Best Practices) kullanarak
            kullanıcı odaklı, ölçeklenebilir ve performanslı çözümler üretiyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Teknolojiler (Hard Skills) */}
          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
              <span className="text-emerald-500 text-2xl">💻</span> Teknolojiler
            </h3>
            <div className="space-y-5">
              {technologies.map((tech) => (
                <div key={tech.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                      {tech.name}
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full font-medium">
                        {tech.category}
                      </span>
                    </span>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      %{tech.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2.5 rounded-full transform origin-left transition-transform duration-1000 ease-out hover:scale-x-105"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yetenekler (Soft Skills) */}
          <div className="flex flex-col">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm h-full transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                <span className="text-teal-500 text-2xl">🧠</span> Profesyonel Yetenekler
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0" role="list" aria-label="Profesyonel Yetenekler">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 border border-transparent hover:border-teal-200 dark:hover:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/20 text-gray-700 dark:text-gray-300 font-medium transition-all cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-400 dark:bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"></div>
                    {skill}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed font-medium">
                  "İyi bir yazılım sadece çalışmakla kalmaz; aynı zamanda okunabilir, genişletilebilir ve takım arkadaşları tarafından anlaşılabilir olmalıdır."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
