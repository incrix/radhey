"use client";

"use client";

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
  return (
    <Stack>
      <NavBar />
      <Suspense fallback={<Stack>Loading shop...</Stack>}>
        <ShopContent />
      </Suspense>
      <Stack mt={{ xs: 10, md: 10 }}>
        <Footer />
      </Stack>
    </Stack>
  );
}
