import React from 'react'
import { Box } from '@mui/system'
import { Grid, Typography,IconButton , Button } from "@mui/material";
import {  FacebookOutlined, Instagram, LinkedIn, Twitter } from "@mui/icons-material";



function MobFooter() {
    return (
        <Box
      sx={{
        padding: {
          xs: "55px 20px",
          sm: "32px 30px",
          md: "5% 45px",
          lg: "6% 45px",
        },
        margin: "auto",
        backgroundColor: "#53389E",
      }}
    >
        <Grid item xs={12} sx={{ mt:2 }}>
        <Grid item md={12} lg={12} container>
        <img src="./assets/Footer/VectorFooter.png" alt="vector"/>
        <Typography
          variant="h6"
          component="div"
          sx={{
            marginLeft: "13px",
            marginTop: "10px",
            fontSize: "32px",
            color: "#fff",
            fontFamily: "Inter",
            fontWeight: "700",
            lineHeight: "40px",
          }}
        >
          Weezee
        </Typography>
      </Grid>
      <Box sx={{ width: "320px" }}>
        <Typography
          sx={{
            marginTop: "40px",
            fontSize: "16px",
            color: "#D6BBFB",
            fontFamily: "Inter",
            fontWeight: "normal",
            lineHeight: "24px",
          }}
        >
          WiFi illimité à l’extérieur, à prix cassé !
        </Typography>
      </Box>
      <Button
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
          <Typography
            sx={{
              color: "#D6BBFB",
              float: "left",
              marginRight: "33px",
              textDecoration: "none",
              fontSize: "16px",
              lineHeight: "24px",
              textTransform:"capitalize"
            }}
          >
            Le concept
          </Typography>
        </Button>
        <br />
        <Button
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
          <Typography
            sx={{
              color: "#D6BBFB",
              float: "left",
              marginRight: "33px",
              textDecoration: "none",
              fontSize: "16px",
              lineHeight: "24px",
              textTransform:"capitalize"
            }}
          >
            L’application
          </Typography>
        </Button>
        <br />
        <Button
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
          <Typography
            sx={{
              color: "#D6BBFB",
              float: "left",
              marginRight: "33px",
              textDecoration: "none",
              fontSize: "16px",
              lineHeight: "24px",
              textTransform:"capitalize"
            }}
          >
            Weezee Map
          </Typography>
        </Button>
        <br />
        <Button
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
          <Typography
            sx={{
              color: "#D6BBFB",
              float: "left",
              marginRight: "33px",
              textDecoration: "none",
              fontSize: "16px",
              lineHeight: "24px",
              textTransform:"capitalize"
            }}
          >
            Nos Tarifs
          </Typography>
        </Button>
        <br />

        <Button
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
          <Typography
            sx={{
              color: "#D6BBFB",
              float: "left",
              marginRight: "33px",
              textDecoration: "none",
              fontSize: "16px",
              lineHeight: "24px",
              textTransform:"capitalize"
            }}
          >
           
            © 2021 Weezee. All rights reserved.
    
          </Typography>
        </Button>
        <br />
        <Box
          sx={{
            width: "200px",
            justifyContent: "space-between",
            display: "flex",
            color:"#fff",
            marginTop:"30px",
          }}
        >
          <IconButton aria-label="delete" sx={{ color:"#fff"}}>
            <Twitter />
          </IconButton>
          <IconButton aria-label="delete" sx={{ color:"#fff"}}>
            <LinkedIn />
          </IconButton>
          <IconButton aria-label="delete" sx={{ color:"#fff"}}>
            <FacebookOutlined />
          </IconButton>
          <IconButton aria-label="delete" sx={{ color:"#fff"}}>
            <Instagram />
          </IconButton>
        </Box>
        </Grid>
        </Box>
    )
}

export default MobFooter
