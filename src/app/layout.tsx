import type { Metadata } from "next";
import "./globals.css";
import NavBar from "src/components/features/navBar/NavBar";
import Footer from "src/components/features/footer/footer";

export const metadata: Metadata = {
  title: "Dev-Sol Web Design + Development",
  description:
    "No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo.",
  keywords: [
    "Web design",
    "Web development",
    "Website design",
    "Website development",
    "Custom web design",
    "Responsive web design",
    "Mobile-friendly websites",
    "Professional web design",
    "Small business website design",
    "Affordable web design",
    "Creative web design",
    "UI/UX design",
    "Front-end development",
    "Back-end development",
    "Full-stack development",
    "E-commerce website design",
    "Wordpress website design",
    "Joomla website design",
    "Drupal website design",
    "Shopify website design",
    "Squarespace website design",
    "Wix website design",
    "SEO-friendly web design",
    "Website redesign",
    "Website maintenance",
    "Website optimization",
    "HTML5/CSS3 design",
    "JavaScript web development",
    "PHP web development",
    "Python web development",
    "Ruby on Rails web development",
    "Laravel web development",
    "ASP.NET web development",
    "AngularJS web development",
    "React.js web development",
    "Vue.js web development",
    "Node.js web development",
    "Custom web application development",
    "Content management systems (CMS)",
    "User experience optimization",
    "Website security",
    "Website speed optimization",
    "Responsive website templates",
    "Mobile app development",
    "Web design portfolio",
    "Contact us for web design",
    "Free web design consultation",
    "Best web design company",
    "Top web development services",
    "Experienced web designers",
  ],
  openGraph: {
    siteName: "Dev-Sol",
    type: "website",
    locale: "en",
    url: process.env.DOMAIN as string,
    title: "DEV-SOL",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    types: {
      "application/rss+xml": process.env.DOMAIN as string,
    },
  },
  applicationName: "Dev-Sol",
  appleWebApp: {
    title: "DEV-SOL",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/logo/small-logo.png"
          type="image/png"
          sizes="150*150"
        />
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <main className="min-h-screen overflow-hidden landScape8:mt-0 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
