import "./globals.css";
import { SiteHeader, SiteFooter } from "./site-shell";

export const metadata = {
  title: "Calagan Construction | Dream better. Build better.",
  description:
    "Building construction, civil engineering, architectural drawings, plumbing and renovations in Nairobi, Kenya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
