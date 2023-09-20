import "./globals.css";
import "@navikt/ds-css/dist/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktivitetslogg",
  description: "Dagpengeklynga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
