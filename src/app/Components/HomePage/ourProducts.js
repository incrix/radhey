import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function OurProducts() {
  return (
    <Stack
      sx={{
        px: { xs: 0, md: 3 },
        mx: { xs: 2, md: 3 },
        mt: { xs: 12, md: 12 },
      }}
    >
      {/* Our Products */}
      <Stack>
        <Typography
          color="var(--primary)"
          fontWeight={"bold"}
          textAlign={"center"}
          sx={{
            fontSize: { xs: "20px", md: "30px" },
          }}
        >
          Our Products
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
          }}
          textAlign={"center"}
        >
          A vibrant selection of crackers designed for every festive mood.
        </Typography>
      </Stack>
      {/* Product Tab */}
      <Stack>

      </Stack>
    </Stack>
  );
}
