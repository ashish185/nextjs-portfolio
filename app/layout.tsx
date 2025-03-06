import "./styles/globals.css";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from 'next/head';

export const metadata = {
  title: "Ashish Portfolio",
  description: "My Professional Portfolio"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        <ThemeProvider>
          <ThemeToggle />
          <main>{children}</main>
          <Navigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
