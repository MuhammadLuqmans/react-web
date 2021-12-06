import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { desktopNavbar } from "../Styles/NavStyle";

export default function DesktopNav() {
  const classes = desktopNavbar();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ height: "55px" }}></Box>
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          paddingX: { md: "0.5%", lg: "4%" },
          height: "80px",
          backgroundColor: "#fff",
          justifyContent: "space-between",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: { md: 0, lg: 1 } }}
          >
            <img
              src="./assets/logohead.png"
              width="44px"
              height="55px"
              alt="header"
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className={classes.logo__name}
            sx={{
              marginRight: { md: 0, lg: "10px" },
              fontSize: { md: "28px", lg: "32px" },
            }}
          >
            Weezee
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className={classes.Nav__items}
            sx={{ marginLeft: { md: "15px", lg: "25px" } }}
          >
            Le concept
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className={classes.Nav__items}
            sx={{ marginLeft: { md: "15px", lg: "25px" } }}
          >
            L’application
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className={classes.Nav__items}
            sx={{ marginLeft: { md: "15px", lg: "25px" } }}
          >
            Weezee Map
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className={classes.Nav__items}
            sx={{ marginLeft: { md: "15px", lg: "25px", flexGrow: 1 } }}
          >
            Nos Tarifs
          </Typography>
          <Button
            color="inherit"
            className={classes.Nav__btn}
            sx={{
              padding: { md: "3px 10px", lg: "10px 18px" },
              fontSize: { md: 14 },
              backgroundColor: "#53389E",
              fontFamily: "Inter",
              borderRadius: 8,
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              border: "1px solid #53389E",
            }}
          >
            Me prevenir lorsque l’app sera disponible
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
