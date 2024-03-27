import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/features/navBar/navBar";
import Footer from "@/components/features/footer/footer";

export const metadata: Metadata = {
  title: "Dev-Sol Web Design + Development",
  description:
    "No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="portal-root">
        <header>
          <NavBar />
        </header>
        <main className="min-h-screen overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
