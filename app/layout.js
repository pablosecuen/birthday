import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Nabvar/Navbar";
import "atropos/css"; // Import Atropos styles

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meduxa Fest",
  description: "Cumpleaños de Luli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="path/to/atropos.css" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
