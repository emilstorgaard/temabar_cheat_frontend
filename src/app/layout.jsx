import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Temabar Cheat",
  description: "Temabar Cheat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-customGreen uppercase">
        <Header />
        {children}
      </body>
    </html>
  );
}
