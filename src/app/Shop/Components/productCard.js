"use client";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ShoppingCart } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Image from "next/image";
import { useCart } from "@/src/app/context/CartContext";

export default function ProductCard({ product }) {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter();
  const pathArray = usePathname().split("/");

  const { cart, addToCart, removeFromCart, updateCount } = useCart();

  // Sync UI state with cart
  useEffect(() => {
    const item = cart.find((i) => i.id === product.id);
    if (item) {
      setIsAdded(true);
      setCount(item.count);
    } else {
      setIsAdded(false);
      setCount(1);
    }
  }, [cart, product.id]);

  const handleIncrement = () => {
    if (isAdded) {
      updateCount(product.id, count + 1);
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (isAdded) {
      if (count > 1) {
        updateCount(product.id, count - 1);
      } else {
        removeFromCart(product.id);
        setIsAdded(false);
        handleOpen();
      }
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Paper
      sx={{
        margin: { xs: "0 10px", sm: "0" },
        width: { xs: "100%", sm: "300px" },
        position: "relative",
        p: { xs: "10px" },
        borderRadius: "15px",
        backgroundColor: "var(--card-color)",
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={isAdded ? "success" : "info"}
          sx={{ width: "100%" }}
        >
          {product.name + (!isAdded ? ` removed from cart` : ` added to cart`)}
        </Alert>
      </Snackbar>

      {/* Product Card Body */}
      <Stack direction="column" gap={1}>
        {/* Badge */}
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "60px",
              height: "30px",
              borderRadius: "15px 0 15px 0",
              background: "var(--primary)",
              fontSize: "10px",
              fontWeight: "bold",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Product Image */}
        <Stack>
          <Image
            src={`https://e-com.incrix.com/Sankamithra%20Products/${product.image[0]}`}
            alt={product.name || "Product image"}
            width={100}
            height={100}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
            onClick={() => {
              pathArray.length > 2
                ? router.push(`product?id=${product.id}`)
                : router.push(`Shop/product?id=${product.id}`);
            }}
          />
        </Stack>

        {/* Product Details */}
        <Typography
          fontSize="16px"
          fontWeight="bold"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            pathArray.length > 2
              ? router.push(`product?id=${product.id}`)
              : router.push(`Shop/product?id=${product.id}`);
          }}
        >
          {product.name}
        </Typography>

        {/* Pricing */}
        <Stack direction="row" gap={1}>
          <Typography fontWeight="bold" color="var(--primary-color)">
            ₹
            {Math.round(
              product.price - (product.discount / 100) * product.price
            )}
          </Typography>
          {product.discount > 0 && (
            <>
              <Typography color="var(--text-color-trinary)">
                <s>₹{product.price}</s>
              </Typography>
              <Typography color="var(--primary-color)">
                ({product.discount}% off)
              </Typography>
            </>
          )}
        </Stack>

        {/* Buttons */}
        <Stack direction={{ xs: "column-reverse", md: "row" }} gap={1}>
          <Button
            disableElevation
            variant="contained"
            startIcon={!isAdded && <ShoppingCart />}
            onClick={() => {
              if (!isAdded) {
                addToCart(product, count);
                setIsAdded(true);
              } else {
                removeFromCart(product.id);
                setIsAdded(false);
              }
              handleOpen();
            }}
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "var(--primary)",
              "&:hover": { backgroundColor: "var(--primary)" },
              width: { xs: "180px", md: "fit-content" },
            }}
          >
            {isAdded ? "Remove" : "Add"}
          </Button>

          {/* Quantity Controls */}
          <Stack direction="row">
            <Button
              variant="contained"
              onClick={handleDecrement}
              sx={{
                borderRadius: "5px 0 0 5px",
                backgroundColor: "var(--primary)",
              }}
            >
              <RemoveRoundedIcon />
            </Button>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                minWidth: "40px",
                textAlign: "center",
                fontWeight: "bold",
                color: "var(--primary)",
              }}
            >
              {count}
            </Stack>
            <Button
              variant="contained"
              onClick={handleIncrement}
              sx={{
                borderRadius: "0 5px 5px 0",
                backgroundColor: "var(--primary)",
              }}
            >
              <AddRoundedIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
