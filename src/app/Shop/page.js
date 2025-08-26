
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
import { Suspense } from "react"; 
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Box from "@mui/material/Box";

const AnimatedSection = ({ children, animationType = 'fadeUp', delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animations = {
    fadeUp: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(60px)',
    },
    slideInLeft: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(-60px)',
    },
    zoomIn: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'scale(1)' : 'scale(0.8)',
    },
    rotateIn: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'rotate(0deg) scale(1)' : 'rotate(-15deg) scale(0.9)',
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        ...animations[animationType],
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </Box>
  );
};


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
      <AnimatedSection animationType="fadeUp" delay={0.1}>
        <ShopContent />
      </AnimatedSection>
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
