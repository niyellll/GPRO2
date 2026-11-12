import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPro — Global Pro-eksistensi | Pusat Kajian Strategis",
  description: "Global Pro-eksistensi adalah pusat kajian strategis yang meneliti kebijakan publik, pembangunan daerah, logistik, ekonomi dan fiskal, pendidikan, serta penguatan SDM.",
  openGraph: {
    title: "GPro — Global Pro-eksistensi",
    description: "Research More, Do More, Teach More. Pusat kajian strategis berbasis bukti.",
    locale: "id_ID",
    type: "website",
    siteName: "Global Pro-eksistensi",
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F8FAFD" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
