import type { Metadata } from "next";
import { Delius } from "next/font/google";
import "./globals.css";

const delius = Delius({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steve Ogah Essay Competition",
  description: "From Hashtags to Action:Gen Z's Blueprint for a Better Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={delius.className}>{children}</body>
    </html>
  );
}
