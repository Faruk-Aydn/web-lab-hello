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
          <h1>Faruk Aydın - Kişisel Portföy</h1>
          <h2>Hakkımda</h2>
          
          <figure>
            <img 
              src="/profil.jpg"
              alt="Faruk Aydın profil fotoğrafı"
              width="200"
              height="200"
            />
            <figcaption>Faruk Aydın</figcaption>
          </figure>

          <p>
            Merhaba! Ben Faruk Aydın. Yazılım geliştirme alanında kendimi 
            geliştirmeye devam eden bir öğrenciyim. Web teknolojileri ve 
            modern frontend frameworkleri ile ilgileniyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Web LAB-1: React Giriş Projesi</h3>
            <figure>
              <img 
                src="/project1.png"
                alt="Web LAB-1 projesi ekran görüntüsü - React ve Vite ile oluşturulmuş kişisel tanıtım sayfası"
                width="400"
                height="250"
              />
              <figcaption>LAB-1 Proje Ekran Görüntüsü</figcaption>
            </figure>
            <p>
              Vite, React ve TypeScript kullanarak oluşturduğum ilk modern web projesi. 
              Git iş akışı ve temel React bileşenlerini öğrendim.
            </p>
            <p><strong>Kullanılan Teknolojiler:</strong> React, TypeScript, Vite, Git</p>
          </article>

         
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          
          <form action="#" method="POST">
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required 
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select 
                  id="subject" 
                  name="subject" 
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  required 
                  minLength={10}
                  aria-describedby="message-error"
                />
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Faruk Aydın. Tüm hakları saklıdır.</p>
        <p>
          <a href="https://github.com/Faruk-Aydn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </>
  )
}

export default App