import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Radhey | Fireworks | Crackers",
  description: "We provide a wide range of fireworks and crackers for all occasions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className}`}>
        {children}
      </body>
    </html>
  );
}
