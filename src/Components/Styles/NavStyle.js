import { makeStyles } from '@mui/styles';


export const desktopNavbar  = makeStyles({
    logo__name:{
        color:" #53389E",
        fontFamily:"Inter",
        fontWeight:"700",
        lineHeight:40,
    },
    Nav__items:{
        color:"#667085",
        fontSize:16,
        lineHeight:24,
        fontFamily:"Inter",
    },
    Nav__btn:{
        background: "linear-gradient(45deg, #53389E 30%, #53389E 90%)",
        fontFamily:"Inter",
        color:"#fff",
        borderRadius: 8,
        boxShadow:"0px 1px 2px rgba(16, 24, 40, 0.05)",
        border:"1px solid #53389E"
    }
})