import Stack from "@mui/material/Stack";
import NavBar from "@/src/app/Components/HomePage/navBar";
import HeroCarousel from "@/src/app/Components/HomePage/heroCarousel";
import AboutUs from "@/src/app/Components/HomePage/aboutUs";
import DoDont from "@/src/app/Components/HomePage/doDont";
import Offer from "@/src/app/Components/HomePage/offer";
import MyProcess from "@/src/app/Components/HomePage/myProcess";
import Footer from "@/src/app/Components/HomePage/footer";

export default function MyHome() {
  return (
    <Stack>
      <NavBar />
      <HeroCarousel />
      <DoDont />
      <AboutUs />
      <Offer />
      <MyProcess />
      <Footer />
    </Stack>
  );
}
