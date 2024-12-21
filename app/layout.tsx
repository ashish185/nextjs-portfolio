import "./styles/globals.css";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Ashish web portfolio",
  description: "My Professional Portfolio",
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
