# Product List with Cart

Mobil öncelikli (mobile-first) yaklaşım ve HTML, CSS, JavaScript kullanılarak geliştirilmiş tatlı kataloğu ve dinamik sepet uygulaması.

## Özellikler

- **Tatlı Kataloğu:** 9 farklı tatlı kartı, kategori/isim/fiyat bilgileri ve seçili kart vurgusu.
- **Adet Yönetimi:** *Add to Cart* ile ürünü sepete ekleme, `+` ve `-` butonlarıyla adet artırma/azaltma ve adet `0` olduğunda kartı başlangıç durumuna döndürme.
- **Dinamik Sepet:** Boş ve dolu sepet görünümleri arasında geçiş, toplam ürün adedi, satır bazlı tutarlar, genel sipariş toplamı ve tek ürün silme (`remove-btn`).
- **Duyarlı Düzen:** Mobilde tek sütunlu akış, masaüstünde sol tarafta katalog ve sağ tarafta sepet yerleşimi (`CSS Grid`).
- **Tipografi:** `Red Hat Text` değişken font (`VariableFont`) tanımlamaları ve CSS özel değişkenleri (`:root`).

## Kullanılan Teknolojiler

- **HTML5**
- **CSS3** (`CSS Grid`, `Custom Properties`, `@font-face`, medya sorguları)
- **JavaScript (Vanilla JS)** (DOM manipülasyonu ve sepet durum yönetimi)

## Dosya Yapısı
product-list-with-cart

├── assets/

│   ├── fonts/

│   └── images/

├── index.html

├── style.css

├── script.js

└── README.md
