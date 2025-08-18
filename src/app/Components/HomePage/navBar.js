"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/Images/radheyLogo.svg";
import CustomButton from "@/src/app/Ui/Button/Button";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "" },
  { label: "Shop", href: "" },
];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const pathname = usePathname();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        px: { xs: 2, md: 6 },
        py: 1.5,
        height: { xs: 60, md: 50 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* ---------- LEFT (Logo + Links on Desktop) ---------- */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { md: 6, xs: 0 } }}>
          {/* Logo */}
          <Image src={Logo.src} alt="Ponnus" width={80} height={80} />

          {/* Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // hide on mobile
              alignItems: "center",
              gap: 8,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: pathname === link.href ? "underline" : "none",
                  color: pathname === link.href ? "var(--primary)" : "#000",
                  fontFamily: "var(--font-secondary)",
                  fontWeight: pathname === link.href ? "bold" : "normal",
                  fontSize: "18px",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>

        {/* ---------- RIGHT (Button on Desktop) ---------- */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            variant="contained"
            onClick={() => {
              router.push("");
            }}
            sx={{
              backgroundColor: "var(--secondary)",
              color: "#fff",
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { backgroundColor: "var(--secondary)" },
            }}
            disableElevation
          >
            Get in Touch
          </Button>
        </Box>

        {/* ---------- MOBILE: Hamburger Icon ---------- */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "flex", md: "none" }, color: "#000" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* ---------- MOBILE: Drawer Menu ---------- */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "#fff",
            px: 2,
            pt: 3,
            position: "relative",
          },
        }}
      >
        {/* Close Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ color: "#000", backgroundColor: "grey", p: "5px" }}
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>

        {/* Drawer Nav Links */}
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontFamily: "var(--font-secondary)",
                    fontSize: "1rem",
                    color: pathname === link.href ? "var(--primary)" : "black",
                    textDecoration:
                      pathname === link.href ? "underline" : "none",
                    fontWeight: pathname === link.href ? "bold" : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          {/* Drawer Button */}
          <Box sx={{ mt: 2 }}>
            <CustomButton
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "30px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#222" },
              }}
              onClick={() => {
                router.push("");
                setDrawerOpen(false);
              }}
            >
              Get in Touch
            </CustomButton>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
}
