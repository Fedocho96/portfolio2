import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Cookie WS",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <head>
        <link rel="icon" href="/Cookielogo3.png" sizes="any" />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
