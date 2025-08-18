import Stack from "@mui/material/Stack";
import CartPage from "./Components/cartPage";
import NavBar from "@/src/app/Components/HomePage/navBar";
import Footer from "@/src/app/Components/HomePage/footer";

export default function Cart() {
  return (
    <Stack>
      <NavBar />
      <CartPage />
      <Footer />
    </Stack>
  );
}

