import { Box } from '@mui/system'
import React from 'react'
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function ChatCards() {
    return (
        <Box sx={{ position:"relative" }}>
            <Box
            sx={{
              width: "320px",
              height: "72px",
              mt:12,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #fff",
              boxSizing: "border-box",
              borderRadius: "8px",
              display: " flex",
              padding:"16px"
            }}
          >
            <Avatar>
                <img src='./assets/section/Avatar.png' alt="text profile" />
            </Avatar>
            <Box sx={{ ml:1 }}>
            <Typography sx={{ color:"#6941C6", fontSize:"14px",fontFamily:"Inter",fontWeight:"500",lineHeight:"20px",flex:" none"}}>Hôtel Four Seasons est à proximité</Typography>
            <Typography sx={{ color:"#6941C6", fontSize:"14px",fontFamily:"Inter",fontWeight:"bold",lineHeight:"20px",flex:" none"}}>Se connecter</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "320px",
              mt:2,
              height: "72px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #fff",
              boxSizing: "border-box",
              borderRadius: "8px",
              display: " flex",
              padding:"16px"
            }}
          >
            <Avatar>
                <img src='./assets/section/Avatar1.png' alt="text profile" />
            </Avatar>
            <Box sx={{ ml:1 }}>
            <Typography sx={{ color:"#6941C6", fontSize:"14px",fontFamily:"Inter",fontWeight:"500",lineHeight:"20px",flex:" none"}}>Beach Club Marina et 2 autres hotspots sont à proximité</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "320px",
              mt:2,
              height: "72px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #fff",
              boxSizing: "border-box",
              borderRadius: "8px",
              display: " flex",
              padding:"16px"
            }}
          >
            <Avatar>
                <img src='./assets/section/Avatar2.png' alt="text profile" />
            </Avatar>
            <Box sx={{ ml:1 }}>
            <Typography sx={{ color:"#6941C6", fontSize:"14px",fontFamily:"Inter",fontWeight:"500",lineHeight:"20px",flex:" none"}}>Hôtel Les Palmiers est à proximité </Typography>
            <Typography sx={{ color:"#6941C6", fontSize:"14px",fontFamily:"Inter",fontWeight:"bold",lineHeight:"20px",flex:" none"}}>Se connecter</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "320px",
              mt:2,
              height: "72px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #fff",
              boxSizing: "border-box",
              borderRadius: "8px",
              display: " flex",
              padding:"16px"
            }}
          >
            <Avatar>
                <img src='./assets/section/3.png' alt="text profile" />
            </Avatar>
            <Box sx={{ ml:1 }}>
            <Typography sx={{ color:"#6941C6", fontSize:"14px",fontFamily:"Inter",fontWeight:"500",lineHeight:"20px",flex:" none"}}>Restaurant Rivage est à proximité </Typography>
            <Typography sx={{ color:"#6941C6", fontSize:"14px",fontFamily:"Inter",fontWeight:"bold",lineHeight:"20px",flex:" none"}}>Se connecter</Typography>
            </Box>
          </Box>
        </Box>
    )
}

export default ChatCards
