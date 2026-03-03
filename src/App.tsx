import './App.css'
function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <a href="/" className="site-title">Faruk Aydın</a>
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
          <h2>Hakkımda</h2>
          
          <div className="about-content">
            <figure>
              <img 
                src="/profil.jpg"
                alt="Faruk Aydın profil fotoğrafı"
                width="200"
                height="200"
              />
              <figcaption>Faruk Aydın</figcaption>
            </figure>

            <div>
              <p>
                Merhaba! Ben Faruk Aydın. Yazılım geliştirme alanında kendimi 
                geliştirmeye devam eden bir öğrenciyim. Web teknolojileri ve 
                modern frontend frameworkleri ile ilgileniyorum.
              </p>

              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>React</li>
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img 
                src="/project1.png"
                alt="Web LAB-1 projesi ekran görüntüsü - React ve Vite ile oluşturulmuş kişisel tanıtım sayfası"
                width="400"
                height="250"
              />
              <h3>Web LAB-1: React Giriş Projesi</h3>
              <p>
                Vite, React ve TypeScript kullanarak oluşturduğum ilk modern web projesi. 
                Git iş akışı ve temel React bileşenlerini öğrendim.
              </p>
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>Git</li>
              </ul>
            </article>

            <article className="project-card">
              <img 
               src="/project2.png"
                alt="Web LAB-2 projesi ekran görüntüsü - semantik HTML5 ile yapılandırılmış portföy sayfası"
                width="400"
                height="250"
              />
              <h3>Web LAB-2: Semantik HTML ve Erişilebilirlik</h3>
              <p>
                Semantik HTML5 etiketleri ve erişilebilirlik standartlarını uygulayarak 
                profesyonel bir portföy sayfası geliştirdim. Lighthouse testi ile doğrulandı.
              </p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>ARIA</li>
                <li>Lighthouse</li>
              </ul>
            </article>
          </div>
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