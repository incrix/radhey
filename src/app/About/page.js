"use client";

import Fab from "@mui/material/Fab";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import NavBar from "@/src/app/Components/HomePage/navBar";
import MyProcess from "@/src/app/About/Components/myProcess";
import AboutUs from "@/src/app/About/Components/aboutUs";
import Offer from "@/src/app/About/Components/offer";
import DoDont from "@/src/app/Components/HomePage/doDont";
import Footer from "@/src/app/Components/HomePage/footer";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handlePdfDownload = () => {
    const link = document.createElement("a");
    link.href = "https://e-com.incrix.com/Radhey%20Products/pdf";
    link.download = "Radhey.pdf"; // optional file name
    link.target = "_blank"; // open in new tab if not downloadable
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Stack position="relative" minHeight="100vh">
      <NavBar />
      <MyProcess />
      <AboutUs />
      <Offer />
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
          onClick={handlePdfDownload}
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
          onClick={() => router.push("/Cart")}
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
          <ShoppingCartIcon />
        </Fab>
      </Stack>
    </Stack>
  );
}
