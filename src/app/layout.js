import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yusong Shi | Wedding Photography",
  description: "Wedding Photographer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
