import React from "react";
import "@/styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

export const metadata = {
  title: "Kenya University Esports Ranking",
  description:
    "Kenya University Esports Ranking is a platform for ranking the best gamers in high schools, colleges, and universities.",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* The metadata for SEO is handled automatically in Next.js 13+ via the `metadata` object */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
