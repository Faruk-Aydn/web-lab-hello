import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import UIKit from './pages/UIKit'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [page, setPage] = useState<'portfolio' | 'uikit'>('portfolio')

  const toggleDark = () => {
    setDarkMode((prev) => !prev)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50 rounded-br-lg"
        >
          Ana içeriğe atla
        </a>

        {/* ===== HEADER ===== */}
        <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
            <a
              href="/"
              className="text-xl font-bold text-blue-800 dark:text-blue-300 no-underline"
              onClick={(e) => { e.preventDefault(); setPage('portfolio') }}
            >
              Faruk Aydın
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <nav aria-label="Ana navigasyon">
                <ul className="flex flex-wrap gap-1 list-none p-0 m-0">
                  <li>
                    <a
                      href="#hakkimda"
                      onClick={() => setPage('portfolio')}
                      className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors no-underline block"
                    >
                      Hakkımda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projeler"
                      onClick={() => setPage('portfolio')}
                      className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors no-underline block"
                    >
                      Projeler
                    </a>
                  </li>
                  <li>
                    <a
                      href="#iletisim"
                      onClick={() => setPage('portfolio')}
                      className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors no-underline block"
                    >
                      İletişim
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => setPage('uikit')}
                      className={`px-3 py-1 rounded-md transition-colors cursor-pointer border-0 font-medium text-sm ${page === 'uikit'
                          ? 'bg-blue-800 text-white dark:bg-blue-600'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
                        }`}
                    >
                      UI Kit
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDark}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform shadow cursor-pointer border-0"
                aria-label="Tema değiştir"
              >
                <span className="dark:hidden">🌙</span>
                <span className="hidden dark:inline">☀️</span>
              </button>
            </div>
          </div>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main id="main-content">
          {page === 'uikit' ? (
            <UIKit />
          ) : (
            <>
              {/* ===== HAKKIMDA ===== */}
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
                      ile ilgileniyorum.
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      Kullandığım Teknolojiler
                    </h3>
                    <ul
                      className="flex flex-wrap gap-2 list-none p-0"
                      role="list"
                      aria-label="Beceri etiketleri"
                    >
                      {['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'].map((tech) => (
                        <li
                          key={tech}
                          className="bg-blue-800 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ===== PROJELERİM ===== */}
              <section
                id="projeler"
                className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
              >
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                    Projelerim
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                      variant="elevated"
                      title="Web LAB-1: React Giriş"
                      image="/project1.png"
                      imageAlt="Web LAB-1 ekran görüntüsü"
                      footer={
                        <Button size="sm" variant="ghost">
                          Detay
                        </Button>
                      }
                    >
                      <p className="text-sm">
                        Vite, React ve TypeScript kullanarak oluşturduğum ilk modern web projesi.
                        Git iş akışı ve temel React bileşenlerini öğrendim.
                      </p>
                      <ul className="flex flex-wrap gap-1 mt-3 list-none p-0">
                        {['React', 'TypeScript', 'Vite'].map((t) => (
                          <li key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card
                      variant="elevated"
                      title="Web LAB-2: Semantik HTML"
                      image="/project2.png"
                      imageAlt="Web LAB-2 ekran görüntüsü"
                      footer={
                        <Button size="sm" variant="ghost">
                          Detay
                        </Button>
                      }
                    >
                      <p className="text-sm">
                        Semantik HTML5 etiketleri ve erişilebilirlik standartlarını uygulayarak
                        profesyonel bir portföy sayfası geliştirdim.
                      </p>
                      <ul className="flex flex-wrap gap-1 mt-3 list-none p-0">
                        {['HTML5', 'CSS3', 'ARIA'].map((t) => (
                          <li key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card
                      variant="elevated"
                      title="Web LAB-3: Responsive"
                      footer={
                        <Button size="sm" variant="ghost">
                          Detay
                        </Button>
                      }
                    >
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center mb-4 -mt-5 -mx-5 w-[calc(100%+40px)]">
                        <span className="text-4xl">📐</span>
                      </div>
                      <p className="text-sm">
                        Flexbox, Grid ve CSS değişkenleri ile mobile-first responsive tasarım uygulandı.
                      </p>
                      <ul className="flex flex-wrap gap-1 mt-3 list-none p-0">
                        {['Flexbox', 'Grid', 'CSS Variables'].map((t) => (
                          <li key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </section>

              {/* ===== İLETİŞİM ===== */}
              <section id="iletisim" className="py-16 px-4">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    İletişim
                  </h2>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <Input id="name" label="Ad Soyad" placeholder="Ahmet Yılmaz" required />
                    <Input
                      id="email"
                      label="E-posta"
                      type="email"
                      placeholder="ornek@mail.com"
                      helpText="E-posta adresinizi girin."
                      required
                    />
                    <Input
                      id="subject"
                      label="Konu"
                      placeholder="Mesajınızın konusu"
                      required
                    />

                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Mesajınızı buraya yazın..."
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors resize-none"
                      />
                    </div>

                    <Button variant="primary" size="lg" type="submit" className="w-full">
                      Gönder
                    </Button>
                  </form>
                </div>
              </section>
            </>
          )}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
          <p>
            &copy; 2025 Faruk Aydın. Tüm hakları saklıdır. &nbsp;|&nbsp;{' '}
            <a
              href="https://github.com/Faruk-Aydn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App