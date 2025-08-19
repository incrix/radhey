"use client";
import Stack from "@mui/material/Stack";
import NavBar from "@/src/app/Components/HomePage/navBar";
import ProductTab from "@/src/app/Shop/Components/productTab";
import ShopByCategory from "@/src/app/Shop/Components/shopCategory";
import Footer from "@/src/app/Components/HomePage/footer";
import { useSearchParams } from "next/navigation";

export default function Shop() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  console.log(category);
  return (
    <Stack sx={{
      px: { xs: 0, md: 3 },
      mx: { xs: 2, md: 3 },
      mt: { xs: 12, md: 12 },
    }}>
      <NavBar />
      <ShopByCategory />
      <ProductTab category={category} />
      <Footer />
    </Stack>
  );
}
