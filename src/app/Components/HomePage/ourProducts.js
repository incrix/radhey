"use client";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function OurProducts() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categories = [
    "Flower Pots",
    "Ground Chakkar",
    "One Sound",
    "Special's",
    "Rockets",
    "Aerials",
  ];

  return (
    <Stack
      sx={{
        px: { xs: 0, md: 3 },
        mx: { xs: 2, md: 3 },
        mt: { xs: 12, md: 12 },
      }}
    >
      {/* Heading */}
      <Stack>
        <Typography
          color="var(--primary)"
          fontWeight="bold"
          textAlign="center"
          sx={{ fontSize: { xs: "20px", md: "30px" } }}
        >
          Our Products
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "16px", md: "20px" } }}
          textAlign="center"
        >
          A vibrant selection of crackers designed for every festive mood.
        </Typography>
      </Stack>

      {/* Product Tabs */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "50px",
            bgcolor: "var(--category-color)",
            p: { xs: 1, md: 1 },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            TabIndicatorProps={{ style: { display: "none" } }} // hide underline
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                borderRadius: "50px",
                px: { xs: 2, md: 3 },
                mx: { xs: 0.5, md: 1 },
                minHeight: "40px",
                fontSize: { xs: "12px", md: "16px" },
                fontWeight: 500,
                color: "black",
                transition: "all 0.3s ease", // smooth hover + active
              },
              "& .Mui-selected": {
                bgcolor: "var(--secondary)",
                color: "#fff !important",
                transition: "all 0.3s ease", // smooth active change
              },
            }}
          >
            {categories.map((cat, index) => (
              <Tab key={index} label={cat} />
            ))}
          </Tabs>
        </Box>
      </Box>
    </Stack>
  );
}
