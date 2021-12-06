import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { desktopNavbar } from "../Styles/NavStyle";
import Dropdown from "./Dropdown";

export default function MobilNavLay() {
  const classes = desktopNavbar();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow:0}}>
        <Toolbar sx={{ backgroundColor: "#fff", color: "#000",boxShadow:0 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src="./assets/logohead.png"
              width="44px"
              height="55px"
              alt="header"
            />
          </IconButton>
          <Typography
            // variant="h6"
            // component="div"
            // className={classes.logo__name}
            sx={{
              marginRight: { md: 0, lg: "10px" },
              fontSize: { md: "28px", lg: "32px" },
              flexGrow: 1,
              color: " #53389E",
              fontFamily: "Inter",
              fontWeight: "700",
              lineHeight: "40px",
            }}
          >
            Weezee
          </Typography>
          <Dropdown  />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
