import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Lukas Låås portfolio",
  icons: {},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="BoxShadow">
          <div className="Logo">
            <h1>LUKAS LÅÅS</h1>
          </div>
          <nav>
            <a className="navItems" href="#workExperience">
              EXPERIENCE
            </a>
            <a className="navItems" href="#education">
              EDUCATION
            </a>
            <a className="navItems" href="#projects">
              PROJECTS
            </a>
            <a className="navItems" href="#programmingLanguages">
              PROGRAMMING LANGUAGES
            </a>
            <a className="navItems" href="#languages">
              LANGUAGES
            </a>
            <a className="navItems" href="#otherMerits">
              MERITS
            </a>
            <a className="navItems" href="#contact">
              CONTACT
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
