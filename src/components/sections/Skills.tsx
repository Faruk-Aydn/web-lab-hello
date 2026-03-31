export default function Skills() {
  const skills = ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'];

  return (
    <section id="yetenekler" className="py-12 px-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Kullandığım Teknolojiler
        </h2>
        <ul
          className="flex flex-wrap justify-center gap-3 list-none p-0"
          role="list"
          aria-label="Beceri etiketleri"
        >
          {skills.map((tech) => (
            <li
              key={tech}
              className="bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
