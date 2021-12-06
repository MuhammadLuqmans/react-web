import { Grid, Typography , Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ChatCards from "./ChatCards";
import { SecondSection } from "./Styles/Second";

function Section3() {
  const classes = SecondSection();
  return (
    <div>
      
     <Divider  sx={{ margin:"auto",width:"90%"}} />
    <Box
      sx={{
        padding: {
          xs: "16px",
          sm: "16px",
          md: "5%",
          lg: "5%",
        },
        paddingY:{
          xs: "40px",
          sm: "40px",
          md: "6%",
          lg: "6%",
        },
      }}
    >
      <Grid
        item
        container
        sx={{
          backgroundColor: "#53389E",
          paddingX: { xs: "20px", md: "40px", sm: "20px", lg: "60px" },
          paddingBottom: "0px",
          borderRadius: { xs: "16px", sm: "16px", md: "24", lg: "24px" },
          boxShadow:
            "0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          sx={{ marginTop:"20px" }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#fff",
              mt: 10,
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "bold",
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            +1M Réseaux WiFi référencés dans le monde
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              marginTop: "15px",
              fontWeight: "600",
              fontSize: { xs: "30px", sm: "30px", md: "36px", lg: "36px" },
              lineHeight: { xs: "38px", sm: "38px", md: "38px", lg: "44px" },
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            Chez vous, partout
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              marginTop: "20px",
              fontWeight: "normal",
              fontSize: { xs: "18px", sm: "20px", md: "20px", lg: "20px" },
              lineHeight: "30px",
              color: "#E9D7FE",
            }}
          >
            Profitez d’une connexion optimale dans tous les établissements de
            notre réseau partenaire. Nous selectionnons les endroits selon leur
            hospitaliter et leur réseau Internet.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "space-around",
              sm: "space-around",
              md: "block",
              lg: "block",
            },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
              marginTop:"17px"
            }}
          >
            <ChatCards />
          </Box>
          <Box
            sx={{
              width: "260px",
              height: { xs: "370px", sm: "370px", md: "450px", lg: "450px" },
              marginTop: { xs: "20px", sm: "20px", md: "20px", lg: "20px" },
              marginLeft: {xs: "none", sm: "none", md: "none", lg: "-83px" },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                marginTop: { xs: "64px", sm: "64px", md: "30px", lg: "30px" },
                height: { xs: "350px", sm: "350px", md: "100%", lg: "100%" },
                textAlign: "center",
                backgroundImage: `url(${"./assets/MockupMap.png"})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "93% 92%",
                margin: "auto",
                borderRadius:"65px 65px 0px 0px",
              }}
            >
              <img
                src="./assets/section/Background.png"
                width="100%"
                height="100%"
                alt="Iphone"
                className={classes.head__Iphone_imge}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </div>

  );
}

export default Section3;
