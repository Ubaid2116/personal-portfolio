import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/port-icon.svg"/>
        <title>Personal Portfolio</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}