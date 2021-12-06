import { makeStyles } from "@mui/styles";

export const HeadStyles =  makeStyles({
    head__content:{
        marginTop:"144px",
       
    },
  
    head__Iphone:{
        textAlign:"center",
        backgroundImage:`url(${"./assets/Blob.png"})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"100% 75%",
        margin: "auto",
      
    },
    head__Iphone_imge:{
        backgroundImage:`url(${"./assets/Mockup.png"})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"90% 96%",
        backgroundOrigin:"center",
        width:"300px",
        height:"610px",
        backgroundPosition:"center",
    },
    head__main_content:{
        color:"#101828",
        marginTop:"20px",
        fontWeight:"600",
        fontFamily:"Inter",
        fontStyle:"normal",
        letterSpacing:"-0.02em",
        display:"inline-block"
    },
    head__subContent:{
        color:"#667085",
        fontFamily:"Inter",
        fontStyle:"normal",
        fontWeight:"normal",
        marginTop:"24px",
    },
    head_btn_imge:{
        marginTop:"25px"
    },
    head_store:{
        marginRight:"20px",
        boxSizing: "border-box",
        width:"132px",
        height:"44px",
        border:"1px solid #A6A6A6",
        borderRadius:"7px",
    },
    head_sub_content:{
        fontStyle:"normal",
        fontWeight:"bold",
        fontFamily:"Inter",
        fontSize:"24px",
        lineHeight:"34px",
        width:"217px",
        color:"#6941c6",
    },
    head_vector:{
        marginTop:"-20px",
        marginLeft:"20px",
    }
})