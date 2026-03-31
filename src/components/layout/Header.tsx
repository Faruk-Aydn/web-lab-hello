import { useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  toggleDark: () => void;
  page: 'portfolio' | 'uikit';
  setPage: (page: 'portfolio' | 'uikit') => void;
}

const navLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header({ darkMode, toggleDark, page, setPage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); setPage('portfolio'); }}
          className="text-xl font-bold text-emerald-600 dark:text-emerald-400 no-underline"
        >
          Faruk Aydın
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 m-0 p-0 list-none">
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  onClick={() => setPage('portfolio')}
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors no-underline font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setPage('uikit')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer border-0 font-medium text-sm ${page === 'uikit'
                    ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800'
                  }`}
              >
                UI Kit
              </button>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform shadow cursor-pointer border-0 w-10 h-10 flex items-center justify-center"
            aria-label="Tema değiştir"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobil menu butonu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform shadow cursor-pointer border-0 flex items-center justify-center"
            aria-label="Tema değiştir"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border-0 bg-transparent cursor-pointer"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300" />
          </button>
        </div>
      </nav>

      {/* Mobil menu */}
      {menuOpen && (
        <ul className="md:hidden border-t border-gray-200 bg-white dark:bg-gray-900 px-4 pb-4 m-0 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              <a 
                href={link.href}
                onClick={() => { setMenuOpen(false); setPage('portfolio'); }}
                className="block py-3 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium border-b border-gray-100 dark:border-gray-800 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
             <button
                onClick={() => { setMenuOpen(false); setPage('uikit'); }}
                className={`w-full text-left py-3 mt-2 rounded-md transition-colors cursor-pointer border-0 font-medium ${page === 'uikit'
                    ? 'bg-emerald-600 text-white dark:bg-emerald-500 px-3'
                    : 'text-gray-700 dark:text-gray-300 px-3 hover:bg-emerald-50 dark:hover:bg-gray-800'
                  }`}
              >
                UI Kit
              </button>
          </li>
        </ul>
      )}
    </header>
  );
}
