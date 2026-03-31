export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="text-center max-w-2xl">
        <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">
          Merhaba, ben
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Faruk Aydın
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Frontend Developer | React & TypeScript
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projeler" 
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all no-underline transform hover:-translate-y-0.5"
          >
            Projelerimi Gör
          </a>
          <a 
            href="#iletisim" 
            className="border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors no-underline transform hover:-translate-y-0.5"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
