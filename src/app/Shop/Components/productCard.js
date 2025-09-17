"use client";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ShoppingCart } from "@mui/icons-material";
import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Image from "next/image";

export default function ProductCard({ product }) {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter();
  const pathArray = usePathname().split("/");

  const [cart, setCart] = useState([]);

  const handleIncrement = () => {
    if (isAdded) {
      cart.map((item) => {
        if (item.id == product.id) {
          item.count += 1;
          setCount(item.count);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
    } else {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (isAdded) {
      cart.map((item) => {
        if (item.id == product.id) {
          if (item.count > 1) {
            item.count -= 1;
            setCount(item.count);
            localStorage.setItem("cart", JSON.stringify(cart));
          } else {
            let newCart = cart.filter((item) => item.id != product.id);
            localStorage.setItem("cart", JSON.stringify(newCart));
            setIsAdded(false);
            handleOpen();
            setCount(1);
          }
        }
      });
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const isProductAdded = useCallback(() => {
    let item = cart.filter((item) => item.id == product.id)[0];
    if (item) {
      setIsAdded(true);
      setCount(item.count);
      // console.log(item.count);
    } else {
      setIsAdded(false);
      setCount(1);
    }
  }, [cart, product.id]); // Dependencies for useCallback

  useEffect(() => {
    isProductAdded();
  }, [cart, isProductAdded]);

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
        <Stack
          width={"100%"}
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingTop={2}
          gap={1}
        >
          <Button
            disableElevation
            variant="contained"
            startIcon={!isAdded && <ShoppingCart />}
            onClick={() => {
              if (!isAdded) {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                let item = cart.filter((item) => item.id == product.id)[0];
                if (item) {
                  item.count += count;
                } else {
                  cart.push({ ...product, count: count });
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                setIsAdded(true);
                handleOpen();
              } else {
                //remove item from cart
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                let newCart = cart.filter((item) => item.id != product.id);
                localStorage.setItem("cart", JSON.stringify(newCart));
                setIsAdded(false);
                handleOpen();
              }
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
          <Stack direction="row" gap={1}>
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
