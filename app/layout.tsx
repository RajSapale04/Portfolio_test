import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mumair",
  description: "UI & UX Designer",
  openGraph:{
    title:"Mumair",
    description:"UI & UX Designer",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
<link rel="manifest" href="/site.webmanifest"/>

      </head>
      <body >{children}</body>
    </html>
  );
}
