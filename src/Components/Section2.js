import { Grid, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SecondSection } from "./Styles/Second";

function Section2() {
  const classes = SecondSection();
  return (
    <div>
      <Divider sx={{ width: "90%", margin: "auto" }} />
      <Box
        sx={{
          paddingLeft: {
            xs: "16px",
            sm: "16px",
            md: "2%",
            lg: "5%",
          },
          paddingBottom: {
            xs: "45px",
            sm: "45px",
            md: "2%",
            lg: "5%",
          },
          backgroundColor: "#fff",
        }}
      >
        <Grid
          item
          xs={12}
          lg={12}
          sx={{paddingRight: {xs: "16px",sm: "16px",md: "5%",lg: "5%"},
          }}
        >
          <Typography
            className={classes.Small__content}
            sx={{
              marginTop: {
                xs: "60px",
                sm: "60px",
                md: "80px",
                lg: "80px",
              },
            }}
          >
            Le concept
          </Typography>
          <Typography
            className={classes.Second__main_content}
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "36px", lg: "36px" },
            }}
          >
            Connexion Automatique au WiFi autours de vous
          </Typography>
          <Typography
            className={classes.second_sub_content}
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "20px", lg: "20px" },
              lineHeight: "30px",
              color: "gray",
            }}
          >
            Grâce à notre réseau de partenaires, nous vous connectons
            automatiquement aux réseaux WiFis proches de chez vous.
            <br />
            Aucune configuration requise.
          </Typography>
        </Grid>
        <Grid item container sx={{ marginTop: "50px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            sx={{
              marginTop: { xs: "0px", sm: "0px", md: "60px", lg: "60px" },
            }}
          >
            <img
              src="./assets/Icon.png"
              alt="new item"
              className={classes.Second_grid_content}
            />
            <Typography
              className={classes.second_sub_content}
              sx={{
                fontSize: { xs: "18px", sm: "18px", md: "20px", lg: "20px" },
                lineHeight: "30px",
                color: "#101828",
              }}
            >
              Vérifiez quotidiennement le nombre de
              <br /> connexions qu'il vous reste en 1 clic.
            </Typography>
            <Grid item xs={12} sm={12} sx={{ marginTop: "40px" }}>
              <img
                src="./assets/smartphone.png"
                alt="new item"
                className={classes.Second_grid_content}
              />
              <Typography
                className={classes.second_sub_content}
                sx={{
                  fontSize: { xs: "18px", sm: "18px", md: "20px", lg: "20px" },
                  lineHeight: "30px",
                  color: "#101828",
                }}
              >
                Aucune configuration requise /<br /> Fonctionne avec tous les
                appareils.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            sx={{
              textAlign: "right",
              backgroundImage: {
                sx: "#fff",
                sm: "#fff",
                md: `url(${"./assets/mockupbg.png"})`,
                lg: `url(${"./assets/mockupbg.png"})`,
              },
              backgroundSize: "cover",
              paddingRight: { xs: "16px", sm: "16px", md: "2%", lg: "5%" },
              overflow: "hidden",
              height: { xs: "350px", sm: "350px", md: "420px" },
              paddingTop: { xs: "60px", sm: "60px", md: "30px" },
            }}
          >
            <Box
              sx={{
                width: "254px",
                marginX: { xs: "auto", sm: "auto", md: "0px" },
                marginLeft: { xs: "auto", sm: "auto", md: "50%", lg: "60%" },
              }}
            >
              <img
                src="./assets/iPhone12.png"
                width="254px"
                alt="secondIphone"
                style={{}}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Section2;
