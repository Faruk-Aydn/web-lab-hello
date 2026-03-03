# CSS Kararları

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?** Tasarımda cep telefonları (mobil) için temel görünümü sağladıktan sonra, tablet (640px) ve geniş ekranlı masaüstü bilgisayarlar (1024px) için kırılım noktaları belirledim. Bu değerler TailwindCSS gibi modern kütüphanelerin endüstri standartlarıdır.
- **İçeriğim bu noktalarda nasıl değişiyor?** Mobilde her şey alt alta (tek sütun) ve tam genişlikte yerleşiyor. 640px (tablet) breakpoint'inde navigasyon menüsü ve "Hakkımda" bölümü yatay düzene geçiyor. 1024px (masaüstü) breakpoint'inde ise grid ile 3 sütunlu proje kartı yapısı devreye giriyor ve maksimum içerik genişliği 1200px ile sınırlandırılıyor.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?** Logo ve navigasyon menüsünü yatay eksende karşılıklı hizalamak (space-between) ve çok farklı boyutlarda öğeleri aynı hizada ortalamak (align-items: center) için Flexbox en uygun çözüm yoludur.
- **Proje kartları için neden Grid seçtim?** Kartların hem satır hem sütun olarak iki boyutlu homojen bir ızgarada yer alması gerekiyordu. Grid, sütun genişliklerini ve aralarındaki boşlukları (gap) çok daha tutarlı ve esnek bir şekilde yönetebilmemi sağladı.
- **auto-fit mi auto-fill mi kullandım, neden?** `auto-fit` kullandım. Çünkü ekran genişlediğinde boş kalan sütunların yerini mevcut kartların doldurmasını, böylece yatay alanın her zaman optimum şekilde kullanılmasını istedim.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?** Ana renk olarak modern ve güven veren bir mavi tonu (#1E3A8A) seçtim. Aksan olarak onunla uyumlu lacivert ve canlı mor tonlarını tercih ettim. Arka planda okumayı kolaylaştırması için hafif grişil beyaz tonlarına başvurdum.
- **Spacing skalasını nasıl belirledim?** 4px'in katları olacak şekilde (4, 8, 16, 24, 32, 48, 64) lineer artan bir spacing model kurdum. Bu sayede komponentler arasında tutarlı ritmik boşluklar oluşmasını sağladım.
- **Fluid typography için clamp değerlerini nasıl ayarladım?** Tipografide sabit piksel değerleri yerine fontun ekran küçüldükçe veya büyüdükçe oranlı olarak evrilmesini sağlayan `clamp()` fonksiyonunu `rem` ve `vw` birimlerinin karışımıyla oluşturdum. Asgari değeri 1rem civarında tutup okunaklılığı garanti altına aldım.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?** Önce sadece CSS'in en başındaki `@media` bloksuz ana tanımlarla sıfır ekran genişliği için kurallarımı yazdım. Sonra yavaş yavaş ekranı büyüterek bozulmanın yaşandığı 640px ve 1024px gibi noktalarda `min-width` kullanarak ilave tasarımsal kurallarımı ekledim.
- **Hangi elemanlar breakpoint'lerde değişiyor?** Form öğeleri, Header içerisindeki navigasyon yönü (`flex-direction: column`'dan `row`'a), projeler ızgarasındaki kolon sayısı ve genel içerik `padding` ölçüleri.
- **Görsel boyutları nasıl yönettim?** Görsellerde orantısız bozulmaları engellemek için `max-width: 100%`, `height: auto` ve obje oranını koruyan `aspect-ratio` / `object-fit: cover` standartlarımı izledim. Bu yöntemle imajlar kırpılmadan ve ezilmeden her genişliğe uyum sağladı.
