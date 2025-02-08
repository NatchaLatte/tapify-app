import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const tapify = localFont({ src: "./Nunito-Black.woff2" });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Tapify",
  description: "สร้างสรรค์โดย NatchaLatte Official",
  authors: {
    name: "NatchaLatte Official"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${tapify.className} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
