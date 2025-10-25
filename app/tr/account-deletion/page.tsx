export const metadata = {
  title: "Çetin Group – Hesap Silme",
  robots: "index,follow",
};

export default function AccountDeletionTR() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 24,
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1>Hesap Silme</h1>
      <p>
        Çetin Group Proje Yönetim uygulamasındaki hesabınızı silmek için aşağıdaki
        yöntemlerden birini kullanabilirsiniz.
      </p>

      <h2>1) Uygulama Üzerinden (Tercih Edilen)</h2>
      <ol>
        <li>Uygulamaya giriş yapın.</li>
        <li><strong>Profil</strong> menüsüne gidin.</li>
        <li><strong>Ayarlar</strong> sayfasını açın.</li>
        <li><strong>Hesabı Sil</strong> seçeneğine tıklayın ve onaylayın.</li>
      </ol>
      <p>
        Onay sonrası hesabınız ve ilişkili kişisel verileriniz, yasal saklama
        yükümlülükleri hariç olmak üzere sistemden geri döndürülemez şekilde
        kaldırılır.
      </p>

      <h2>2) E-posta ile Talep</h2>
      <p>
        Uygulamaya erişemiyorsanız, kayıtlı telefon numaranızı veya ad-soyad
        bilgilerinizi belirterek{" "}
        <a href="mailto:cetingroupuygulama@gmail.com">
          cetingroupuygulama@gmail.com
        </a>{" "}
        adresine <em>“Hesap Silme Talebi”</em> başlıklı e-posta
        gönderebilirsiniz. Kimlik doğrulaması yapıldıktan sonra talebiniz
        işleme alınır.
      </p>

      <h2>Veri Güvenliği</h2>
      <p>
        Tüm iletişim HTTPS üzerinden şifrelenmektedir. Silme işlemi sonrası, sadece
        mevzuat gereği tutulması zorunlu kayıtlar saklanır ve yasal süresi dolduğunda
        tamamen silinir veya anonimleştirilir.
      </p>

      <p style={{ marginTop: 24, fontSize: 14 }}>
        English version: <a href="/en/account-deletion">View in English</a>
      </p>
    </main>
  );
}
