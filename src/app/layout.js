import "./globals.css";

export const metadata = {
  title: "Temabar Cheat",
  description: "Temabar Cheat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
