import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Vraj 💖 Karnika || Wedding Invitation ",
    description:
      "✨ With the blessings of our families, we joyfully invite you to witness and celebrate the sacred union of Karnika and Vraj on the 21st and 22nd of February, 2026. ✨",
  metadataBase: new URL("https://vrajwedskarnika.vercel.app"),
  openGraph: {
    title: "Vraj & Karnika | Wedding Invitation",
    description:
      "You are cordially invited to celebrate with Karnika & Vraj on February 21-22, 2026.",
    url: "https://vrajwedskarnika.vercel.app",
    siteName: "Vraj weds Karnika",
    images: [
      {
        url: "/images/wedding_logo.png",
        width: 1200,
        height: 630,
        alt: "Vraj & Karnika wedding invite poster",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vraj 💖 Karnika || Wedding Invitation ",
    description:
      "✨ With the blessings of our families, we joyfully invite you to witness and celebrate the sacred union of Karnika and Vraj on the 21st and 22nd of February, 2026. ✨",
    images: ["/images/weeding_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/weeding_logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
