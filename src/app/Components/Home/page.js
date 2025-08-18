import Stack from "@mui/material/Stack";
import NavBar from "@/src/app/Components/HomePage/navBar";
import HeroCarousel from "@/src/app/Components/HomePage/heroCarousel";

export default function MyHome() {
  return (
    <Stack>
      <NavBar />
      <HeroCarousel />
    </Stack>
  );
}
