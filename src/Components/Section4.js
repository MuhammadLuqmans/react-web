import { Grid, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SecondSection } from "./Styles/Second";

function Section4() {
  const classes = SecondSection();
  return (
    <div>
      <Divider sx={{ margin: "auto", width: "90%" }} />
      <Box
        sx={{
          margin: "auto",
        }}
      >
        <Grid
          item
          container
          sx={{
            padding: {
              xs: "16px 12px",
              sm: "15px 12px",
              md: "5% 45px",
              lg: "5% 45px",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
              paddingX: {
                xs: "16px 12px",
                sm: "15px 12px",
                md: "4% 45px",
                lg: "5% 45px",
              },
              textAlign: "center",
            }}
          >
            <img
              src="./assets/section/Content.png"
              width="90%"
              height="90%"
              alt="content"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              paddingLeft: { xs: "16px", sm: "16px", md: "40px", lg: "40px" },
              marginTop: { xs: "40px", sm: "40px", md: "0px", lg: "0px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.01em",
                color: "#6941C6",
              }}
            >
              Weezee Map
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                marginTop: "24px",
                fontWeight: "bold",
                paddingRight: "30px",
                marginBottom: "40px",
                fontSize: { xs: "30px", sm: "30px", md: "38px", lg: "38px" },
                lineHeight: { xs: "38px", sm: "38px", md: "48px", lg: "48px" },
                letterSpacing: "-0.02em",
                color: "#101828",
              }}
            >
              A l’extérieur, économisez les Go de votre forfait
            </Typography>
            <img
              src="./assets/Icon.png"
              alt="new item"
              className={classes.Second_grid_content}
            />
            <Typography className={classes.second_sub_content}>
              Plus d’1M de Réseaux WiFi référencés
              <br /> partout dans le monde
            </Typography>
            <Grid item>
              <img
                src="./assets/smartphone.png"
                alt="new item"
                className={classes.Second_grid_content}
              />
              <Typography className={classes.second_sub_content}>
                +100k réseaux aux Antilles
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none",marginBottom:"50px" } }}
        >
          <img
            src="./assets/section/Content.png"
            width="100%"
            height="100%"
            alt="content"
          />
        </Box>
      </Box>
    </div>
  );
}

export default Section4;
