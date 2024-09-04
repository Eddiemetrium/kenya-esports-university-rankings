import "./globals.css";


export const metadata = {
  title: "kenya university esports ranking",
  description: "kenya university esports ranking is a platform for ranking the best gamers in high schools, collages and universities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
