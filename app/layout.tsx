import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timppa | CS Student CV",
  description: "CV for a third-year Computer Science student at the University of Turku.",
  keywords: ["CV", "Computer Science", "University of Turku", "Backend", "Data"],
  openGraph: {
    title: "Timppa | CS Student CV",
    description: "Third-year CS student with backend and data focus.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
