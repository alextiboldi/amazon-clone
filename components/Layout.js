import React, { useContext } from "react";
import Head from "next/head";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyle from "../utils/styles";
import NextLink from "next/link";
import { CssBaseline, Link, ThemeProvider, Switch, Badge } from "@mui/material";
import { createTheme } from "@mui/material";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);

  const { darkMode, cart } = state;
  const cssClass = useStyle();

  console.log("DarkMode " + JSON.stringify(darkMode));
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: "dark",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona}` : "Amazona"}</title>
        {description && <meta name="description" value={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={cssClass.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={cssClass.brand}>amazona</Typography>
              </Link>
            </NextLink>
            <div className={cssClass.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    "Cart"
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={cssClass.main}>{children}</Container>
        <footer className={cssClass.footer}>
          <Typography>All rights reserved to Amazona</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
