"use client";
import Stack from "@mui/material/Stack";
import logo from "@/public/Images/radheyLogo.svg";
import green from "@/public/Images/green.png";
import iso from "@/public/Images/iso.png";
import Link from "next/link";

export default function Footer() {
  return (
    <Stack
      p={{ xs: 2, md: 4 }}
      px={{ xs: 2, md: 6 }}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        width={"100%"}
        gap={2}
        sx={{
          maxWidth: "1480px", // optional max width instead of px trick
          margin: "0 auto",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={{ xs: "wrap", lg: "nowrap" }} // replaces width < 1024 check
        >
          {/* Logo + About */}
          <Stack maxWidth={"300px"} gap={2}>
            <Stack direction="row" gap={1} alignItems="center">
              <img
                src={logo.src}
                style={{
                  width: "80px",
                }}
              />
              <Stack>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  Sankamithra
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#686868",
                  }}
                >
                  Fireworks & Crackers
                </span>
              </Stack>
            </Stack>

            <p>High quality fireworks manufacturer in TamilNadu</p>
          </Stack>

          {/* Company Links */}
          <Stack gap={2}>
            <h6
              style={{
                color: "var(--text-color)",
                fontSize: "24px",
                fontWeight: "800",
              }}
            >
              Company
            </h6>
            <Link href={"/"}>Home</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Shop</Link>
            <Link href={""}>Contact Us</Link>
          </Stack>

          {/* Categories */}
          <Stack gap={2}>
            <h6
              style={{
                color: "var(--text-color)",
                fontSize: "24px",
                fontWeight: "800",
              }}
            >
              Categories
            </h6>
            <Link href={"/shop?category=Flower%20Pots#product"}>
              Flowerpots
            </Link>
            <Link href={"/shop?category=Ground%20Chakkars#product"}>
              Ground Chakkar
            </Link>
            <Link href={"/shop?category=One%20Sound#product"}>One Sound</Link>
            <Link href={"/shop?category=Special%27s#product"}>Special’s</Link>
            <Link href={"/shop?category=Rockets#product"}>Rocket</Link>
            <Link href={"/shop?category=Repeating%20shots#product"}>
              Aerials
            </Link>
            <Link href={"/shop?category=Atom%20bombs#product"}>Bombs</Link>
            <Link href={"/shop?category=Twinklers#product"}>Twinklers</Link>
          </Stack>

          {/* Certifications */}
          <Stack gap={2}>
            <h6
              style={{
                color: "var(--text-color)",
                fontSize: "24px",
                fontWeight: "800",
              }}
            >
              Certified
            </h6>
            <img
              style={{
                width: "100px",
              }}
              src={green.src}
              alt="Green"
            />
            <img
              style={{
                width: "100px",
              }}
              src={iso.src}
              alt="ISO"
            />
          </Stack>
        </Stack>

        <hr />

        {/* Bottom Bar */}
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "center" }}
          spacing={{ xs: 2, md: 0 }}
          sx={{ textAlign: { xs: "center", md: "left" }, mt: 3 }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()},{" "}
            <span
              style={{
                color: "var(--primary)",
                fontWeight: "600",
                display: "inline",
              }}
            >
              Radhey Fireworks
            </span>
            <br />
            All rights reserved
          </p>

          <Stack>
            <p style={{ margin: 0 }}>
              Designed by{" "}
              <a
                href="https://incrix.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: "80px" }}
                  src="https://incrix.com/logo.png"
                  alt="Incrix Logo"
                />
              </a>
            </p>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
