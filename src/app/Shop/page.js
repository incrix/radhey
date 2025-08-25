
"use client";

import Fab from "@mui/material/Fab";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import Stack from "@mui/material/Stack";
import NavBar from "@/src/app/Components/HomePage/navBar";
import ProductTab from "@/src/app/Shop/Components/productTab";
import ShopByCategory from "@/src/app/Shop/Components/shopCategory";
import Footer from "@/src/app/Components/HomePage/footer";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";  // ✅ FIXED
import { useEffect } from "react";


// Separate component for the content that uses useSearchParams
function ShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // Optional: Log category for debugging (remove in production)
  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <Stack
      sx={{
        px: { xs: 0, md: 3 },
        mx: { xs: 2, md: 3 },
        mt: { xs: 12, md: 12 },
      }}
    >
      <ShopByCategory />
      <ProductTab category={category} />
    </Stack>
  );
}

export default function Shop() {
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
      <Suspense fallback={<Stack>Loading shop...</Stack>}>
        <ShopContent />
      </Suspense>
      <Stack mt={{ xs: 10, md: 10 }}>
        <Footer />
      </Stack>

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
