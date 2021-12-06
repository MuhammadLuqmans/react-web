import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { desktopNavbar } from "../Styles/NavStyle";

export default function Dropdown() {
  const classes = desktopNavbar();
  return (
    <Box sx={{ margin: "auto", maxWidth: "96%" }}>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              variant="text"
              sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 0 }}
              {...bindTrigger(popupState)}
            >
              <MenuIcon />
            </Button>
            <Menu {...bindMenu(popupState)} sx={{ marginTop:"20px" }}>
                <Box sx={{ p:2,}}>
              <MenuItem
                onClick={popupState.close}
                sx={{ width: "1400px", }}
              >
                Le concept
              </MenuItem>
              <MenuItem onClick={popupState.close}>L’application</MenuItem>
              <MenuItem onClick={popupState.close}>Weezee Map</MenuItem>
              <MenuItem onClick={popupState.close}>Nos Tarifs</MenuItem>
              <Button
                color="inherit"
                className={classes.Nav__btn}
                sx={{
                  padding: { md: "3px 10px", lg: "10px 18px" },
                  fontSize: { md: 14 },
                  mx:2,
                  mt:1,
                  background:"linear-gradiant(45deg blue, 45deg blue)"
                }}
              >
                Me prevenir lorsque l’app sera disponible
              </Button>
              </Box>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </Box>
  );
}
