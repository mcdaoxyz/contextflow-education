import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "ContextFlow Education", description: "Educational content assistant for textbooks, curricula, and academic materials with AI tutoring." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="antialiased">{children}</body></html>);
}
