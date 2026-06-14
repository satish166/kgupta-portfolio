import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import BootstrapClient from "./bootstrap.client";
import AOSWrapper from "./components/AOSWrapper";
import CustomCursor from "./components/cursor/cursor";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khushi Gupta | .NET Full Stack Developer Portfolio",
  description: "Portfolio of Khushi Gupta, .NET Full Stack Developer with expertise in ASP.NET Core, C#, Angular, SQL Server, Entity Framework, Web API, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BootstrapClient />
        <CustomCursor />
        <AOSWrapper>
          {children}
        </AOSWrapper>
      </body>
    </html>
  );
}
