"use client";
import Stack from "@mui/material/Stack";
import Image from "next/image"; // ✅ import Next.js Image
import logo from "@/public/Images/radheyLogo.svg";
import green from "@/public/Images/green.png";
import iso from "@/public/Images/iso.png";
import Link from "next/link";
import { Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const handlePhoneCallOne = () => {
    window.location.href = "tel: 9360221102";
  };
  const handlePhoneCallTwo = () => {
    window.location.href = "tel: 9361592454";
  };


  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Shop", href: "/Shop" },
    { label: "Contact Us", href: "/Contact" },
  ];
  return (
    <Stack
      p={{ xs: 2, md: 4 }}
      px={{ xs: 2, md: 6 }}
      mt={{ xs: 5, md: 0 }}
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
            <Stack direction="row" gap={1} alignItems="center">
              <PersonIcon sx={{ color: "var(--secondary)" }} />
              <p>Govindaraj K</p>
            </Stack>
            <Stack direction="row" gap={1} alignItems="center">
              <MailIcon sx={{ color: "var(--secondary)" }} />
              <a
                href="mailto:radheythunders@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                radheythunders@gmail.com
              </a>
            </Stack>

            <Stack direction="row" gap={1} alignItems="center">
              <PhoneIcon sx={{ color: "var(--secondary)" }} />
              <p onClick={handlePhoneCallOne} style={{ cursor: "pointer" }}>
                +91 93602 21102
              </p>
              <span>|</span>
              <p onClick={handlePhoneCallTwo} style={{ cursor: "pointer" }}>
                +91 93615 92454
              </p>
            </Stack>
          </Stack>

          {/* Company Links */}
          <Stack gap={2} mt={{ xs: 6, md: 0 }}>
      <Typography
        sx={{
          color: "var(--text-color)",
          fontSize: { xs: "18px", md: "24px" },
          fontWeight: "600",
        }}
      >
        Company
      </Typography>

      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: isActive ? "var(--primary)" : "var(--text-color)",
              textDecoration: isActive ? "underline" : "none",
              fontWeight: isActive ? "600" : "400",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary)";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "var(--text-color)";
                e.currentTarget.style.textDecoration = "none";
              }
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </Stack>

          {/* Categories */}
          <Stack gap={2} mt={{ xs: 6, md: 0 }}>
            <Typography
              sx={{
                color: "var(--text-color)",
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "600",
              }}
            >
              Categories
            </Typography>
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
          <Stack gap={2} mt={{ xs: 6, md: 0 }}>
            <Typography
              sx={{
                color: "var(--text-color)",
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "600",
              }}
            >
              Certified
            </Typography>
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
              onClick={() => router.push("/")}
              style={{
                color: "var(--primary)",
                fontWeight: "600",
                display: "inline",
                cursor: "pointer",
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
