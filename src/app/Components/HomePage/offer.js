"use client";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

import RetailBoxes from "@/public/Images/retailBoxes.png";
import WholeSale from "@/public/Images/wholeSale.png";

export default function Offer() {
  return (
    <Stack
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Stack
        sx={{
          backgroundColor: "var(--quaternary)",
          py: { xs: 1, md: 4 },
          px: { xs: 1, md: 4 },
          borderRadius: 3,
        }}
      >
        {/* Section Title */}
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            mb: 6,
            border: "1px solid var(--border-color)",
            width: "fit-content",
            px: 2,
            py: 1,
            borderRadius: 5,
            my: { xs: 4, md: 0 },

          }}
        >
          <CircleIcon
            sx={{
              fontSize: 20,
              mr: 1,
              color: "var(--tertiary)",
            }}
          />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "16px", md: "20px" } }}
          >
            WHAT I OFFER
          </Typography>
        </Stack>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="left"
          sx={{ mb: 6, fontSize: { xs: "24px", md: "52px" } }}
        >
          Igniting Celebrations <br /> Through Quality
        </Typography>

        {/* 3 Boxes Row */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Retail Excellence */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "var(--primary)",
              borderRadius: "16px",
              p: 4,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: { xs: "auto", md: "750px" },
            }}
          >
            {/* Center Image */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={RetailBoxes}
                alt="Retail Excellence"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>

            <Typography
              sx={{
                mt: 3,
                fontWeight: "bold",
                fontSize: { xs: "20px", md: "28px" },
              }}
            >
              Retail Excellence
            </Typography>

            <Typography sx={{ mt: 1, fontSize: { xs: "16px", md: "18px" } }}>
              Bringing joy closer to homes with a wide selection of vibrant,
              safe, and exciting fireworks.
            </Typography>

            <Stack spacing={2} sx={{ mt: { xs: 5, md: 10 } }}>
              {[
                "Curated Festive Combos",
                "Kid-Friendly Sparklers",
                "Premium Sky Shots",
              ].map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    pb: 1,
                    borderBottom: "1px solid rgba(255,255,255,0.7)", // line below
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>

            <Button
              disableElevation
              variant="contained"
              sx={{
                mt: { xs: 5, md: "auto" },
                backgroundColor: "orange",
                borderRadius: "20px",
                textTransform: "none",
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              <SubdirectoryArrowRightIcon sx={{ mr: 1 }} /> Buy Now
            </Button>
          </Box>

          {/* Wholesale */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: "16px",
              p: 4,
              color: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: { xs: "auto", md: "750px" },
            }}
          >
            <Typography
              sx={{
                mt: 3,
                fontWeight: "bold",
                fontSize: { xs: "20px", md: "28px" },
              }}
            >
              Wholesale
            </Typography>
            <Typography sx={{ mt: 1, fontSize: { xs: "16px", md: "18px" } }}>
              Supporting businesses & event organizers with reliable bulk supply
              and seamless service.
            </Typography>
            <Stack spacing={2} sx={{ mt: { xs: 5, md: 5 } }}>
              {[
                "Competitive Bulk Pricing",
                "Timely, Hassle-Free Delivery",
                "Certified Quality Assurance",
              ].map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    pb: 1,
                    borderBottom: "1px solid rgba(45, 43, 43, 0.7)", // line below
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>

            <Stack sx={{ mt: 7 }}>
              <Image
                src={WholeSale}
                alt="Wholesale"
                width={300}
                style={{ borderRadius: "8px" }}
              />
            </Stack>
            <Button
              disableElevation
              variant="contained"
              sx={{
                mt: { xs: 5, md: "auto" },
                backgroundColor: "orange",
                borderRadius: "20px",
                textTransform: "none",
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              <SubdirectoryArrowRightIcon sx={{ mr: 1 }} /> Schedule a
              Consultation
            </Button>
          </Box>

          {/* Memorable Moments */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#2E2E2E",
              borderRadius: "16px",
              p: 4,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: { xs: "auto", md: "750px" },
            }}
          >
            <Typography
              sx={{
                mt: 3,
                fontWeight: "bold",
                fontSize: { xs: "20px", md: "28px" },
              }}
            >
              Memorable Moments
            </Typography>
            <Typography sx={{ mt: 4, fontSize: { xs: "16px", md: "18px" } }}>
              Because every function deserves the magic of Radhal. We help you
              craft unforgettable celebrations with fireworks that light up the
              skies — and smiles all around.
            </Typography>
            <Stack spacing={2} sx={{ mt: { xs: 5, md: 20 } }}>
              {[
                "Signature Showstopper Pieces",
                "Vibrant Ground Effects Everyone Loves",
                "Brilliant Aerial Displays for Grand Nights",
              ].map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    pb: 1,
                    borderBottom: "1px solid rgba(183, 182, 182, 0.7)", // line below
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
            <Button
              disableElevation
              variant="contained"
              sx={{
                mt: { xs: 5, md: "auto" },
                backgroundColor: "orange",
                borderRadius: "20px",
                textTransform: "none",
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              <SubdirectoryArrowRightIcon sx={{ mr: 1 }} /> Schedule a
              Consultation
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
