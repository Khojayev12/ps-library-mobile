import { Box } from "@mui/system";
import { LanguageContext } from "../LanguageContext";
import hamburger from '../Icons/hamburger.svg'
import avatar from "../Icons/avatar.svg"
import home from "../Icons/home.svg"
import kitob from "../Icons/kitob.svg"
import buyurtma from "../Icons/buyurtma.svg"
import settings from "../Icons/settings.svg"
import savol from "../Icons/savol.svg"
import video from "../Icons/video.svg"
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Person from "../Icons/person.svg"
import Sozlama from "../Icons/sozlama.svg"
import Chiqish from "../Icons/chiqish.svg"
import { Link } from "react-router-dom";

const MenuButton = styled(Button)(() => ({
    width:"90%",
    height:"50px",
    marginLeft:"5%",
    display:"block",
    textAlign:"start",
    marginTop:"10px",
    zIndex:"7",
    textTransform:"none",
    backgroundColor: "none",
    border:"none",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "150%",
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    color: "#334257",
    '&:active': {
        backgroundColor: "rgb(214, 214, 214)",
        outline:"none",
        border:"none"
        },
}));

export default function Menu(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLMenuOpen, setIsLMenuOpen] = useState(false)
    const handelMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const handelLMenu = ()=>{
        setIsLMenuOpen(!isLMenuOpen)
    }
    return(
        <LanguageContext.Consumer >
            {lang => (<>
            <Box component={"div"} sx={{width:"100%", position:"absolute", zIndex:"100", background:"red", display:"block"}} >
                <img src={hamburger} className="hamburger" alt="" onClick={handelMenu} />
                <span className="header" > {lang.header} </span>
                <img src={avatar} className="avatar" alt="" onClick={handelLMenu}  />
            </Box>
            <Box component={"div"} className={isMenuOpen?"menu-left active-m" : "menu-left not-active"} >
                <img src={avatar} className="menu-avatar" alt=""/>
                <span className="menu-header">
                    {lang.menuHeader}
                </span>
                <span className="shior" >
                    {lang.shior}
                </span>
                <hr className="menu-chiziq" />
                <MenuButton className="menu-btn" sx={{marginTop:"200px"}} onClick={()=>{setIsMenuOpen(false)}} > <Link to="/" className="Mylink" >
                    <img src={home} alt="" className="menu-btn-icons"/>
                    {lang.main}</Link>
                </MenuButton>
                <MenuButton className="menu-btn" onClick={()=>{setIsMenuOpen(false)}} > <Link to="/all-books" className="Mylink" >
                    <img src={kitob} alt="" className="menu-btn-icons"/>
                    {lang.kitoblar}</Link>
                </MenuButton>
                <Link to="/orders" className="Mylink" > <MenuButton className="menu-btn" onClick={()=>{setIsMenuOpen(false)}} >
                    <img src={buyurtma} alt="" className="menu-btn-icons"/>
                    {lang.buyurtmalar}
                </MenuButton> </Link>
                <MenuButton className="menu-btn" onClick={()=>{setIsMenuOpen(false)}} > <Link to="/settings" className="Mylink" >
                    <img src={settings} alt="" className="menu-btn-icons"/>
                    {lang.settings}</Link>
                </MenuButton>
                <MenuButton className="menu-btn" onClick={()=>{setIsMenuOpen(false)}} >
                    <img src={video} alt="" className="menu-btn-icons"/>
                    {lang.qollanma}
                </MenuButton>
                <MenuButton className="menu-btn" onClick={()=>{setIsMenuOpen(false)}} >
                    <img src={savol} alt="" className="menu-btn-icons"/>
                    {lang.about}
                </MenuButton>
            </Box>
            <div className={isLMenuOpen? "LMenu L-open" : "LMenu L-closed"} >
                <div className="Lmenu-line" onClick={()=>{setIsLMenuOpen(false)}} > <Link to="/profile" className="Mylink" >
                    <img src={Person} alt="" className="Lmenu-img"/>
                    <span className="Lmenu-span">Profil</span></Link>
                    <hr className="ML-hr" style={{height:"0px"}} /> 
                </div>
                <div className="Lmenu-line" onClick={()=>{setIsLMenuOpen(false)}} > <Link to="/settings" className="Mylink" > 
                    <img src={Sozlama} alt="" className="Lmenu-img"/>
                    <span className="Lmenu-span">Sozlamalar</span> </Link>
                    <hr className="ML-hr" />
                </div>
                <Link to="/start" className="Mylink" > <div className="Lmenu-line" onClick={()=>{setIsLMenuOpen(false)}} >
                    <img src={Chiqish} alt="" className="Lmenu-img" />
                    <span className="Lmenu-span" >Chiqish</span>
                </div></Link>
            </div>
            <Box component="div" className={isLMenuOpen? "Lmenu-e-open" : "LMenu-e-closed"}></Box>
            <Box component="div" className={isMenuOpen?"blur-e active-e" : "blur-e not-active-e"} ></Box>
            <Box component="div" className={isMenuOpen?"close-menu" : "closed-menu"} onClick={()=>{setIsMenuOpen(false)}} ></Box>
            </>)}
        </LanguageContext.Consumer>
    )
}