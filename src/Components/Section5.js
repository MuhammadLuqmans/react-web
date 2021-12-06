import { Grid, Typography,Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DataOne, DataTwo } from "./Data/Data";
import { SecondSection } from "./Styles/Second";

function Section5() {
    const classes = SecondSection();
  return (
    <div>
     <Divider  sx={{ margin:"auto",width:"90%"}} />
    <Box
      sx={{
        padding: {
          xs: "20px 16px",
          sm: "20px 16px",
          md: "7% 40px",
          lg: "7% 70px",
        },
        marginTop:{xs:"45px", sm:"45px" ,md:"0" ,lg:"0"},
        margin: "auto",
        paddingBottom:"0px",
        
      }}
    >
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ justifyContent: "space-between" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4.5}
          lg={4.5}
          sx={{ marginTop:{xs:"0" ,sm:"0" ,md:"120px"}}}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              marginTop: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#6941C6",
            }}
          >
            Nos Tarifs
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              marginTop: "10px",
              fontWeight: "600",
              fontSize:{ xs: "36px", sm: "36px", md: "38px", lg: "38px" },
              lineHeight: { xs: "38px", sm: "38px", md: "60px", lg: "60px" },
              letterSpacing: "-0.02em",
              color: "#101828",
            }}
          >
            Des tarifs simples, sans mauvaise surprise
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              marginTop: "16px",
              fontWeight: "normal",
              fontSize:{ xs: "18px", sm: "18px", md: "20px", lg: "20px" },
              lineHeight: { xs: "28px", sm: "28px", md: "30px", lg: "30px" },
              color: "#667085",
            }}
          >
            Une tarification simple et transparente qui évolue selon vos
            besoins. Passez d’un forfait à l’autre facilement depuis votre
            application.
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={7}
          lg={7}
          sx={{ justifyContent: "space-between", marginTop:{xs:"45px", sm:"45px" ,md:"0" ,lg:"0"}, }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={5.7}
            lg={5.7}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E4E7EC",
                boxSizing: "border-box",
                marginTop:{xs:"16px", sm:"16px" ,md:"0" ,lg:"0"},
                boxShadow:" 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);",
                borderRadius: "16px",
                textAlign: "center",
                padding: "40px 32px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontSize:{ xs: "36px", sm: "36px", md: "38px", lg: "38px" },
              lineHeight: { xs: "38px", sm: "38px", md: "60px", lg: "60px" },
                  fontWeight:"600",
                  letterSpacing: "-0.02em",
                  color: "#101828",
                  
                }}
              >
                4,99€ / mo
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  marginTop: "10px",
                  fontWeight: "normal",
                  fontSize:"20px",
                  lineHeight: "30px",
                  color: "#101828",
                }}
              >
                Weezee Map Premium
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  marginTop: "5px",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#667085",
                  marginBottom:"30px",
                }}
              >
                100 connexions
              </Typography>
                  {DataOne.map((data , index)=>{
                      return(
              <Box key={index} sx={{ display:" flex",position:"relative",marginTop:"15px"}}>
                          <img src={data.image} width="16px" height="13.5px" alt="correct" className={classes.correct_avator} />
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    marginTop: "5px",
                    fontWeight: "normal",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#667085",
                    textAlign:"left"
                  }}
                >
                 {data.name}
                </Typography>
                          </Box>
                      )
                  })}
              
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5.7}
            lg={5.7}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E4E7EC",
                boxSizing: "border-box",
                marginTop:{xs:"16px", sm:"16px" ,md:"0" ,lg:"0"},
                boxShadow:
                  " 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);",
                borderRadius: "16px",
                textAlign: "center",
                padding: "40px 32px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontSize:{ xs: "36px", sm: "36px", md: "38px", lg: "38px" },
              lineHeight: { xs: "38px", sm: "38px", md: "60px", lg: "60px" },
                  fontWeight:"600",
                  letterSpacing: "-0.02em",
                  color: "#101828",
                }}
              >
                12,99€ / mois
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  marginTop: "10px",
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#101828",
                }}
              >
                Weezee Map Pro
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  marginTop: "5px",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#667085",
                  marginBottom:"30px"
                }}
              >
                Connexions illimitées
              </Typography>
              {DataTwo.map((data , index)=>{
                      return(
              <Box key={index} sx={{ display:" flex",position:"relative",marginTop:"15px"}}>
                          <img src={data.image} width="16px" height="13.5px" alt="correct" className={classes.correct_avator} />
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    marginTop: "5px",
                    fontWeight: "normal",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#667085",
                    textAlign:"left"
                  }}
                >
                 {data.name}
                </Typography>
                          </Box>
                      )
                  })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default Section5;
