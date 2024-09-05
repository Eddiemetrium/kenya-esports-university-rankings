export default function robots() {
  return {
    rules: [
      {
        userAgent: "*", // For all web crawlers
        allow: "/", // Allow everything
        disallow: "/private/", // Disallow the /private/ path
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`, // Dynamically add the sitemap URL
  };
}
