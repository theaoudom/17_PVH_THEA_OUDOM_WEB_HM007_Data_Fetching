import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HomeWork 007",
  description: "Home Work 007 about Data fetching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={inter.className}>
        <div >
          <NavbarComponent/> 
        </div>
        {children}
        </body>
    </html>
  );
}
