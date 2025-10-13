// app/layout.tsx

export const metadata = {
  title: "Çetin Group - Privacy Policy",
  description: "Çetin Group mobil uygulaması gizlilik politikası.",
  robots: "index,follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={{ background: "#fff", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
