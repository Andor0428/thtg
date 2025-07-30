import type { Metadata } from "next";
import "./globals.css";
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: "The Hospitality Talent Group | Premier Recruitment Agency",
  description: "Your premier partner for specialized recruitment and consultancy in the hospitality sector, based in London.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}  