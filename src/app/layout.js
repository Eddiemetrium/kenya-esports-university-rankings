import React from "react";
import "../../styles/font.css";
import "../../styles/index.css";
import "../../styles/font.css";

export const metadata = {
  title: "Kenya University Esports Ranking",
  description:
    "Kenya University Esports Ranking is your ultimate destination for tracking the best gamers across PlayStation, PC, and mobile platforms in high schools, colleges, and universities throughout Kenya. Discover top talents, follow exciting matches, and witness the rise of future esports champions in the vibrant world of gaming competition!",
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
