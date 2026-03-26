import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coming Soon | Aspiring Legal Network",
  description:
    "A new kind of legal network is launching soon — built for the next generation of aspiring legal professionals. Join the waitlist.",
  openGraph: {
    title: "Coming Soon | Aspiring Legal Network",
    description:
      "Something big is coming. Aspiring Legal Network launches soon — be the first to know.",
    type: "website",
    locale: "en_US",
    siteName: "Aspiring Legal Network",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon | Aspiring Legal Network",
    description: "Something big is coming. Join the waitlist.",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
