"use client";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";

export default function PdfCartFloating() {
  const router = useRouter();

  const handlePdfDownload = () => {
    const link = document.createElement("a");
    link.href = "https://e-com.incrix.com/Radhey%20Products/pdf";
    link.download = "Radhey.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
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
          animation: 'float 2s ease-in-out infinite',
          '@keyframes float': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-8px)' },
            '100%': { transform: 'translateY(0)' },
          },
        }}
      >
        <PictureAsPdfIcon />
      </Fab>
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
          animation: 'float 2s ease-in-out infinite 0.2s',
          '@keyframes float': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-8px)' },
            '100%': { transform: 'translateY(0)' },
          },
        }}
      >
        <ShoppingCartIcon />
      </Fab>
    </Stack>
  );
}