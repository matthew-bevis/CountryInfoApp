'use client'

import { Grid, useTheme } from "@mui/material";
import Header from "./_components/header";
import { ThemeContextProvider } from "./_context/themeContext";
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  return (
    <html lang="en">
      <body>
          <ThemeContextProvider>
            <Header/>
            {children}
          </ThemeContextProvider>
      </body>
    </html>
  );
}
