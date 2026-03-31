export default function About() {
  return (
    <section id="hakkimda" className="py-16 px-4 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <figure className="shrink-0 m-0">
          <img
            src="/profil.jpg"
            alt="Faruk Aydın profil fotoğrafı"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </figure>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
            Hakkımda
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Merhaba! Ben Faruk Aydın. Yazılım geliştirme alanında kendimi geliştirmeye
            devam eden bir öğrenciyim. Web teknolojileri ve modern frontend frameworkleri
            ile ilgileniyorum. Yenilikleri takip etmeyi, temiz ve ölçeklenebilir kod yazmayı hedefliyorum.
          </p>
        </div>
      </div>
    </section>
  );
}
