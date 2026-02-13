import { ThemeProvider } from "@/components/theme-provider"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Jakob Frenzel",
  description: "Portfolio website of Jakob Frenzel. I'm an Electronics and Embedded Systems Engineer based in Vienna, Austria.",
  icons: null,
  openGraph: {
    title: "Jakob F. | Portfolio",
    description: "Portfolio website of Jakob Frenzel",
    url: "https://jakobfrenzel.com",
    siteName: "Jakob F. | Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakob F. | Portfolio",
    description: "Portfolio website of Jakob Frenzel",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        <head />
        <body className="font-sans">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
          <SpeedInsights/>
        </body>
      </html>
    </>
  )
}