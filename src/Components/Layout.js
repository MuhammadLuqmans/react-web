import { Box } from '@mui/system'
import React from 'react'
import DesktopNav from './utils/DesktopNav'
import Header from './Header'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Footer from './utils/Footer'
import MobFooter from './utils/MobFooter'
import MobilNavLay from './utils/MobNavLayout'
import "./Styles/Layout.css"

function Layout() {
    return (
        
        <Box sx={{ maxWidth:"1440px" ,margin:"auto"}}>
            <div className="deskTop_Nav">
            <DesktopNav />
            </div>
            <div className="Mobile_Nav">
            <MobilNavLay />
            </div>
            <Header />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Box sx={{ display:{xs:"none",sm:"none", md:"block"},}}>
            <Footer />
            </Box>
            <Box sx={{ display:{xs:"block",sm:"block", md:"none"},}}>
                <MobFooter />
            </Box>
        </Box>
    )
}

export default Layout
