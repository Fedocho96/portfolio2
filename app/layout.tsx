import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "RoWebs",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <head>
        <link rel="icon" href="/Rowebslogo3.png" sizes="any" />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
