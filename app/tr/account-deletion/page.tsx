export const metadata = {
  title: "Çetin Group – Hesap Silme",
  robots: "index,follow",
};

export default function AccountDeletionTR() {
  return (
    <main style={{maxWidth:900, margin:"0 auto", padding:24, fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", lineHeight:1.6}}>
      <h1>Hesap Silme</h1>
      <p>
        Çetin Group Proje Yönetim uygulamasındaki hesabınızı silmek için aşağıdaki yöntemlerden birini kullanabilirsiniz.
      </p>

      <h2>1) Uygulama içinden (tercih edilen)</h2>
      <ol>
        <li>Uygulamayı açın ve oturum açın.</li>
        <li><strong>Profil</strong> &rarr; <strong>Hesap</strong> menüsüne gidin.</li>
        <li><strong>Hesabı Sil</strong> seçeneğini onaylayın.</li>
      </ol>
      <p>
        Onay sonrası hesabınız ve ilişkili kişisel verileriniz, yasal saklama yükümlülükleri hariç olmak üzere sistemden geri döndürülemez şekilde kaldırılır.
      </p>

      <h2>2) E-posta ile talep</h2>
      <p>
        Uygulamaya erişemiyorsanız, kayıtlı telefon numaranızı veya ad-soyad bilgilerinizi belirterek{" "}
        <a href="mailto:cetingroupuygulama@gmail.com">cetingroupuygulama@gmail.com</a>{" "}
        adresine <em>Hesap Silme Talebi</em> başlıklı e-posta gönderebilirsiniz. Kimlik doğrulaması yapılmasının ardından talebiniz işleme alınır.
      </p>

      <h2>Veri güvenliği</h2>
      <p>
        Tüm iletişim <strong>HTTPS</strong> üzerinden şifrelenir. Silme işlemi sonrası,
        mevzuat gereği saklanması zorunlu kayıtlar varsa ilgili yasal süre sonunda kalıcı olarak silinir/anonymize edilir.
      </p>

      <p style={{marginTop:24, fontSize:14}}>
        English version: <a href="/en/account-deletion">View in English</a>
      </p>
    </main>
  );
}
