import { Navbar } from "@/components";
import { ProximaNovaFont } from "@/models";
import "@/styles/globals.css";

export const metadata = {
  title: "Meli Challenge",
  description: "Meli Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ProximaNovaFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
