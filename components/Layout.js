import React from "react";
import Head from "next/Head";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyle from "../utils/styles";
import NextLink from "next/link";
import { Link } from "@mui/material";

export default function Layout({ title, description, children }) {
  const cssClass = useStyle();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona}` : "Amazona"}</title>
        {description && <meta name="description" value={description} />}
      </Head>
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
    </div>
  );
}
