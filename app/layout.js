import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Nameless Patron - Fund your projects with existential patrons",
  description: "This website is a crowd funding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <SessionWrapper>
        <Navbar/>
        <div className="min-h-screen bg-black [radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] text-white">
        {children}
        </div>
        <Footer/>
        </SessionWrapper>
        </body>
       
    </html>
  );
}
