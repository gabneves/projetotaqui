import './globals.css'

export const metadata = {
  title: "Taqui",
  description: "Projeto Challenge Plusoft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
