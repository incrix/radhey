"use client";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Quicksand } from "next/font/google";
import { Delete } from "@mui/icons-material";

import { useCart } from "@/src/app/context/CartContext"; // ✅ use CartContext

const quicksand = Quicksand({ subsets: ["latin"] });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--primary)",
    color: theme.palette.common.white,
    fontWeight: 800,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "& td, & th": {
    borderBottom: "1px solid var(--primary)",
  },
}));

export default function CartPage() {
  const { cart, updateCount, removeFromCart, totalPrice } = useCart(); // ✅ from context

  const handleIncrement = (id, current) => {
    updateCount(id, current + 1);
  };

  const handleDecrement = (id, current) => {
    if (current > 1) {
      updateCount(id, current - 1);
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: { xs: 0, md: 3 },
      }}
    >
      <Stack
        sx={{
          width: "100%",
          minHeight: "50vh",
          maxWidth: "var(--max-width)",
          padding: "40px 0",
          gap: 5,
        }}
      >
        <Stack gap={2}>
          <Typography
            className={quicksand.className}
            variant="h1"
            fontSize={40}
            fontWeight={800}
          >
            Your Cart
          </Typography>
        </Stack>

        <Stack
          direction={{
            sm: "column",
            md: "row",
          }}
          gap={10}
        >
          {/* CART TABLE */}
          <Stack
            width={{
              sm: "100%",
              md: "70%",
            }}
          >
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell className={quicksand.className}>
                      Products
                    </StyledTableCell>
                    <StyledTableCell className={quicksand.className}>
                      Quantity
                    </StyledTableCell>
                    <StyledTableCell
                      className={quicksand.className}
                      align="right"
                    >
                      Unit price
                    </StyledTableCell>
                    <StyledTableCell
                      className={quicksand.className}
                      align="right"
                    >
                      Subtotal
                    </StyledTableCell>
                    <StyledTableCell
                      className={quicksand.className}
                      align="right"
                    >
                      Remove
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.length === 0 && (
                    <StyledTableRow>
                      <StyledTableCell colSpan={5} align={"left"}>
                        Your cart is empty
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                  {cart.map((row) => {
                    const unitPrice = Math.round(
                      row.price - (row.price * row.discount) / 100
                    );
                    return (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell>
                          <Stack direction={"row"} alignItems="center">
                            <IconButton
                              sx={{
                                color: "white",
                                fontSize: "14px",
                                fontWeight: "bold",
                                width: "30px",
                                height: "30px",
                                backgroundColor: "var(--secondary)",
                                "&:hover": {
                                  backgroundColor: "var(--secondary)",
                                },
                              }}
                              onClick={() => handleDecrement(row.id, row.count)}
                            >
                              -
                            </IconButton>
                            <Typography
                              sx={{
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "14px",
                                fontWeight: "bold",
                                width: "40px",
                              }}
                            >
                              {row.count}
                            </Typography>
                            <IconButton
                              size="small"
                              sx={{
                                color: "white",
                                fontSize: "14px",
                                fontWeight: "bold",
                                width: "30px",
                                height: "30px",
                                backgroundColor: "var(--secondary)",
                                "&:hover": {
                                  backgroundColor: "var(--secondary)",
                                },
                              }}
                              onClick={() => handleIncrement(row.id, row.count)}
                            >
                              +
                            </IconButton>
                          </Stack>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {unitPrice}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {unitPrice * row.count}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <IconButton
                            size="small"
                            sx={{ color: "red" }}
                            onClick={() => removeFromCart(row.id)}
                          >
                            <Delete />
                          </IconButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>

          {/* CART SUMMARY */}
          <Stack
            width={{
              sm: "100%",
              md: "30%",
            }}
          >
            <Paper sx={{ padding: 2 }}>
              <Stack gap={2}>
                <Typography
                  className={quicksand.className}
                  variant="h3"
                  fontSize={20}
                  fontWeight={800}
                >
                  Cart Summary
                </Typography>

                <Typography
                  className={quicksand.className}
                  fontSize={14}
                  fontWeight={700}
                >
                  Total: ₹{totalPrice}
                </Typography>

                <Stack gap={2}>
                  <Button
                    disableElevation
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--primary)",
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "var(--primary)",
                      },
                    }}
                    disabled={cart.length === 0}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      href="/Checkout"
                    >
                      Proceed to Checkout
                    </Link>
                  </Button>

                  <Button
                    disableElevation
                    variant="outlined"
                    sx={{
                      border: "1px solid var(--primary)",
                      color: "var(--primary)",
                      textTransform: "none",
                      "&:hover": {
                        border: "1px solid var(--primary)",
                      },
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "var(--primary)",
                      }}
                      href="/Shop"
                    >
                      Continue Shopping
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
