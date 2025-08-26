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

  // 🔥 Reusable single-color glow style
  const borderBeamStyle = (glowColor, bgColor) => ({
    boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`,
    color: "white",
    position: "relative",
    overflow: "hidden",
    backgroundColor: bgColor, // ✅ always use custom bg
    transition: "opacity 0.3s ease",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: -2,
      borderRadius: "50%",
      padding: "2px",
      background: `conic-gradient(from 0deg, ${glowColor} 0%, transparent 80%)`,
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      animation: "rotate 2s linear infinite",
    },
    "&:hover": {
      opacity: 0.9,
      backgroundColor: bgColor, // ✅ stop MUI from switching to grey
    },
    "@keyframes rotate": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  });

  return (
    <Stack
      spacing={2}
      sx={{
        position: "fixed",
        bottom: 16,
        right: { xs: 18, md: 16 },
        zIndex: 1000,
      }}
    >
      {/* PDF Button */}
      <Fab
        aria-label="pdf"
        onClick={handlePdfDownload}
        sx={borderBeamStyle("#ff4d4d", "var(--secondary)")} // 🔴 red glow
      >
        <PictureAsPdfIcon />
      </Fab>

      <Fab
        aria-label="cart"
        onClick={() => router.push("/Cart")}
        sx={borderBeamStyle("#4dd2ff", "var(--primary)")} // 🔵 blue glow
      >
        <ShoppingCartIcon />
      </Fab>
    </Stack>
  );
}
