import { Grid, Typography, TextField, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Section6() {
  return (
    <div>
      <Divider sx={{ margin:"auto", width:"90%"}} />
    <Box
      sx={{
        padding: {
          xs: "0px 12px",
          sm: "15px 12px",
          md: "6% 40px",
          lg: "6% 70px",
        },
        margin: "auto",
        
      }}
    >
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        spacing={2}
        sx={{ justifyContent: "space-between" }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
             fontSize:{ xs:"30px",sm:"30px",md:"48px"},
             lineHeight:{xs:"38px",sm:"38px",md:"60px"},
              letterSpacing: "-0.02em",
              color: "#101828",
              marginTop:{xs:"60px",sm:"60px",md:"100px"},
            }}
          >
            Soyez le premier au courant quand nous lançons le service
          </Typography>
          <Box sx={{ marginTop: "40px", display: "flex", justifyContent:{xs:"center",sm:"center", md:"left"}  }}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              sx={{ width: "350px" }}
            />
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #53389E 30%, #53389E 90%)",
                marginLeft: "15px",
                fontSize: "16px", 
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: "24px",
                display:{xs:"none",sm:"none", md:"block"},
              }}
            >
              M’avertir
            </Button>
          </Box>
          <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #53389E 30%, #53389E 90%)",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: "500",
                margin:"auto",
                marginTop: "16px",
                padding:"12px 132px",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                lineHeight: "24px",
                marginBottom:"54px",
                display:{xs:"block",sm:"block", md:"none"},
              }}
            >
              M’avertir
              </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign:"center"}}>
          <Box sx={{ width:"100%", display:{xs:"none",sm:"none", md:"block"}}}>
            <img src="./assets/Content.png" alt="Content" width="100%"/>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ width:"100%", display:{xs:"block",sm:"block", md:"none",}}}>
            <img src="./assets/Content.png" alt="Content" width="100%"/>
          </Box>
    </div>

  );
}

export default Section6;
