import Stack from "@mui/material/Stack";
import NavBar from "@/src/app/Components/HomePage/navBar";
import HeroCarousel from "@/src/app/Components/HomePage/heroCarousel";
import DoDont from "@/src/app/Components/HomePage/doDont";
import Footer from "@/src/app/Components/HomePage/footer";

export default function MyHome() {
  return (
    <Stack>
      <NavBar />
      <HeroCarousel />
      <DoDont />
      <Footer />
    </Stack>
  );
}
