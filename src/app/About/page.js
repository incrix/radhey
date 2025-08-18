import Stack from "@mui/material/Stack";
import NavBar from "@/src/app/Components/HomePage/navBar";
import MyProcess from "@/src/app/About/Components/myProcess";
import AboutUs from "@/src/app/About/Components/aboutUs";
import Offer from "@/src/app/About/Components/offer";
import DoDont from "@/src/app/Components/HomePage/doDont";
import Footer from "@/src/app/Components/HomePage/footer";

export default function About() {
  return (
    <Stack>
      <NavBar />
      <MyProcess />
      <AboutUs />
      <Offer />
      <DoDont />
      <Footer />
    </Stack>
  );
}
