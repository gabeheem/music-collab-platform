import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitMusic",
  description: "A place to work on music together and keep track of project versions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">GitMusic</Link>
          <nav aria-label="Main navigation">
            <Link href="/repositories">Repositories</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Log in</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
