import { Quicksand } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/src/app/context/CartContext";
import { BillingProvider } from "@/src/app/context/BillingContext";
import { ProductProvider } from "@/src/app/context/ProductContext";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Radhey | Fireworks | Crackers",
  description: "We provide a wide range of fireworks and crackers for all occasions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className}`}>
      <ProductProvider>
          <CartProvider>
            <BillingProvider>
              {children}
            </BillingProvider>
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
