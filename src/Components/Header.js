import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from '@mui/material/Link';
import React from "react";
import { HeadStyles } from "./Styles/HeadStyle";

function Header() {
  const classes = HeadStyles();
  return (
    <Box
      sx={{
        paddingX: {
          xs: "16px",
          sm: "16px",
          md: "5%",
          lg: "5%",
        },
        paddingBottom: {
          xs: "50px",
          sm: "50px",
          md: "5%",
          lg: "5%",
        },
      }}
    >
      <Grid item container className={classes.head__main}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={classes.head__content}
        >
          <Typography
            sx={{
              color: "#6941C6",
              fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "14px" },
              lineHeight: { xs: "18px", sm: "18px", md: "20px", lg: "20px" },
              fontWeight: "bold",
              textAlign: "center",
              width: "128px",
              height: "28px",
              fontFamily: "Inter",
              backgroundColor: "#f9f5ff",
              borderRadius: "16px",
              padding: "7px 10px 2px 10px",
            }}
          >
            Version 2.0
          </Typography>
          <Typography
            className={classes.head__main_content}
            sx={{
              fontSize: { xs: "36px", sm: "36px", md: "54px", lg: "54px" },
              lineHeight: { xs: "44px", sm: "44px", md: "68px", lg: "68px" },
            }}
          >
            WiFi illimité à l’extérieur, à prix cassé !
          </Typography>
          <Typography
            className={classes.head__subContent}
            sx={{
              fontSize: { xs: "18px", sm: "18px", md: "20px", lg: "20px" },
              lineHeight: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
            }}
          >
            Depuis 2014, notre mission est la même : vous connecter facilement
            aux réseaux WiFis proche de vous grâce à une application complète et
            novatrice.
          </Typography>
          <Grid item container className={classes.head_btn_imge}>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              <img
                type="button"
                src="./assets/Appstore.png"
                alt="Google Play store"
                className={classes.head_store}
              />
            </Link>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              <img
                type="button"
                src="./assets/Googleplay.png"
                alt="Google Play store"
                className={classes.head_store}
              />
            </Link>
          </Grid>
          <Grid item container sx={{ marginTop: "50px" }}>
            <Typography
              className={classes.head_sub_content}
              sx={{
                fontSize: { xs: "36px", sm: "36px", md: "54px", lg: "54px" },
                lineHeight: { xs: "44px", sm: "44px", md: "68px", lg: "68px" },
              }}
            >
              Nouvelle version <br />
              bientôt disponible
            </Typography>
            <img
              src="./assets/Vectors.png"
              width="40px"
              height="50px"
              alt="vector"
              className={classes.head_vector}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            marginTop: { xs: "64px", sm: "64px", md: "86px", lg: "82px" },
            height: { xs: "350px", sm: "350px", md: "100%", lg: "100%" },
            textAlign: "center",
            backgroundImage: `url(${"./assets/Blob.png"})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 75%",
            margin: "auto",
            overflow: "hidden",
          }}
        >
          <Box>
            <img
              src="./assets/Iphone.png"
              width="60%"
              height="80%"
              alt="Iphone"
              className={classes.head__Iphone_imge}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
