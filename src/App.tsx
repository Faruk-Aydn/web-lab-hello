function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h1>Web Tasarımı ve Programlama</h1>
          <h2>Hakkımda</h2>
          {/* içerik buraya */}
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* içerik buraya */}
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Faruk Aydın. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App