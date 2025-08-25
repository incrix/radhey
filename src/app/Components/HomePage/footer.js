"use client";
import Stack from "@mui/material/Stack";
import Image from "next/image"; // ✅ import Next.js Image
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
          maxWidth: "1480px",
          margin: "0 auto",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={{ xs: "wrap", lg: "nowrap" }}
        >
          {/* Logo + About */}
          <Stack maxWidth={"300px"} gap={2}>
            <Stack direction="row" gap={1} alignItems="center">
              <Image
                src={logo}
                alt="Radhey Fireworks Logo" // ✅ alt text added
                width={80}
                height={80}
                priority
              />
              <Stack>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  Radhey Fireworks
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
          <Stack gap={2} mt={{xs: 2, md: 0}}>
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
            <Link href={"/About"}>About</Link>
            <Link href={"/Shop"}>Shop</Link>
            <Link href={"/Contact"}>Contact Us</Link>
          </Stack>

          {/* Categories */}
          <Stack gap={2} mt={{xs: 2, md: 0}} >
            <h6
              style={{
                color: "var(--text-color)",
                fontSize: "24px",
                fontWeight: "800",
              }}
            >
              Categories
            </h6>
            <Link href={"/Shop?category=Flower%20Pots#product"}>
              Flowerpots
            </Link>
            <Link href={"/Shop?category=Ground%20Chakkars#product"}>
              Ground Chakkar
            </Link>
            <Link href={"/Shop?category=One%20Sound#product"}>One Sound</Link>
            <Link href={"/Shop?category=Special%27s#product"}>Special’s</Link>
            <Link href={"/Shop?category=Rockets#product"}>Rocket</Link>
            <Link href={"/Shop?category=Repeating%20shots#product"}>
              Aerials
            </Link>
            <Link href={"/Shop?category=Atom%20bombs#product"}>Bombs</Link>
            <Link href={"/Shop?category=Twinklers#product"}>Twinklers</Link>
          </Stack>

          {/* Certifications */}
          <Stack gap={2} mt={{xs: 2, md: 0}}>
            <h6
              style={{
                color: "var(--text-color)",
                fontSize: "24px",
                fontWeight: "800",
              }}
            >
              Certified
            </h6>
            <Image
              src={green}
              alt="Green Certification"
              width={100}
              height={100}
            />
            <Image src={iso} alt="ISO Certification" width={100} height={100} />
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
                <Image
                  src="https://incrix.com/logo.png"
                  alt="Incrix Logo"
                  width={120}
                  height={25}
                />
              </a>
            </p>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
