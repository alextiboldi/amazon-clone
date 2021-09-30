import React from "react";
import Head from "next/Head";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyle from "../utils/styles";
import NextLink from "next/link";
import { CssBaseline, Link, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typograph: {
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
      body1: {
        fontWeight: "normal",
      },
    },

    palette: {
      type: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const cssClass = useStyle();
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
            <div className={cssClass.grow}>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
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
