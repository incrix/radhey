import Stack from "@mui/material/Stack";
import NavBar from "@/src/app/Components/HomePage/navBar";
import Footer from "@/src/app/Components/HomePage/footer";
import ContactPage from "@/src/app/Contact/Components/contactPage";

export default function Contact() {
  return (
    <Stack>
      <NavBar />
      <ContactPage />
      <Footer />
    </Stack>
  );
}
