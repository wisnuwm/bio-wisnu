import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wisnu Munawar - Senior QA Automation Engineer",
  description: "Building reliable software through scalable test automation, quality engineering, and continuous delivery practices. 5+ years of experience in software quality assurance.",
  keywords: ["Senior QA Automation Engineer", "SDET", "Software Testing Engineer", "Quality Engineering", "Test Automation", "Playwright Automation", "Selenium Automation", "QA Engineer Indonesia", "Robot Framework", "Python", "CI/CD"],
  authors: [{ name: "Wisnu Munawar" }],
  openGraph: {
    title: "Wisnu Munawar - Senior QA Automation Engineer",
    description: "Building reliable software through scalable test automation, quality engineering, and continuous delivery practices.",
    type: "website",
    url: "https://wisnuwm.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisnu Munawar - Senior QA Automation Engineer",
    description: "Building reliable software through scalable test automation, quality engineering, and continuous delivery practices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
