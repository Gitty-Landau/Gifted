import type { Metadata } from "@/node_modules/next/types";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Gifted",
  description: "Gifts for all!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen p-4">
          <header>
            <NavBar />
          </header>
          <div className="h-full">{children}</div>
          <footer></footer>
        </main>
      </body>
    </html>
  );
}
