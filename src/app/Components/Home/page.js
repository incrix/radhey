"use client";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import NavBar from "@/src/app/Components/HomePage/navBar";
import HeroCarousel from "@/src/app/Components/HomePage/heroCarousel";
import OurProducts from "@/src/app/Components/HomePage/ourProducts";
import AboutUs from "@/src/app/Components/HomePage/aboutUs";
import DoDont from "@/src/app/Components/HomePage/doDont";
import Footer from "@/src/app/Components/HomePage/footer";
import { useRouter } from "next/navigation";

export default function MyHome() {
  const router = useRouter();
  return (
    <Stack position="relative" minHeight="100vh">
      <NavBar />
      <HeroCarousel />
      <OurProducts />
      <AboutUs />
      <DoDont />
      <Footer />

      {/* Floating Buttons */}
      <Stack
        spacing={2}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        {/* PDF Button */}
        <Fab
          aria-label="pdf"
          sx={{
            boxShadow: 3,
            backgroundColor: "var(--secondary)",
            color: "white",
            "&:hover": {
              backgroundColor: "var(--secondary)",
              opacity: 0.9,
            },
          }}
        >
          <PictureAsPdfIcon />
        </Fab>

        {/* Cart Button */}
        <Fab
          aria-label="cart"
          sx={{
            boxShadow: 3,
            backgroundColor: "var(--primary)",
            color: "white",
            "&:hover": {
              backgroundColor: "var(--primary)",
              opacity: 0.9,
            },
          }}
        >
          <ShoppingCartIcon onClick={() => router.push("/Cart")} />
        </Fab>
      </Stack>
    </Stack>
  );
}
