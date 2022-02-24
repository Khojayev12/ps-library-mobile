import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { LanguageContext } from "../LanguageContext";
import { styled } from '@mui/material/styles';
import IconBtn from "../Components/IconBtn"
import { useState } from "react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import {Link} from "react-router-dom"

export default function Login(){
    const [isHidden, setIsHidden] = useState(true)
    const RegBtn = styled(Button)(() => ({
        width:"calc(100% - 68px)",
        height:"62px",
        marginLeft:"34px",
        paddingTop:"15px",
        paddingBottom:"15px",
        position:"absolute",
        top:"507px",
        zIndex:"16px",
        background:"linear-gradient(90deg, #1D62F0 0%, #1AD5FD 100%)",
        borderRadius:"13px",
        fontFamily: "IBM Plex Sans",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "19px",
        lineHeight: "25px",
        color:"#ffffff",
        textAlign:"center",
        textTransform:"none",
        '&:active': {
            backgroundColor: "rgb(214, 214, 214)",
            outline:"none",
            border:"none"
            },
    }));
    const [selectedInput, setSelectedInput] = useState("")
    return(
        <Box component="div" className="register-page" >
            <LanguageContext.Consumer>
                {lang => (
                    <>
                    <Link to="/start"> <Box component="div" className="back-icon" >
                        <IconBtn />
                    </Box></Link>
                    <span className="log-header" > {lang.goLogin} </span>

                    <span className="reg-info" style={{top:"244px"}} > Email </span>
                    <div className="gradient-border" style={{top: "274px", display:selectedInput=="email"?"block":"none"}} ></div>
                    <input className="input-name" placeholder={lang.enterEmail} style={{top:"276px"}} onFocus={()=>{setSelectedInput("email")}} />

                    <span className="reg-info" style={{top:"363px"}} > {lang.parol} </span>
                    <div className="gradient-border" style={{top: "393px", display:selectedInput=="password"?"block":"none"}} ></div>
                    <input className="input-name" placeholder={lang.enterParol} style={{top:"395px"}} type={isHidden? "password":"text"} onFocus={()=>{setSelectedInput("password")}} />
                    <span className="hide-icon-log" >{isHidden? <AiFillEye onClick={()=>{setIsHidden(!isHidden)}} /> : <AiFillEyeInvisible onClick={()=>{setIsHidden(!isHidden)}} />}</span>

                    <RegBtn  > {lang.goLogin} </RegBtn>

                    <span className="under-reg" style={{top:"594px"}} > {lang.notRegistered} </span>
                    <Link to="/register" style={{color:"unset", textDecoration:"none"}} ><span className="under-reg" style={{top:"621px", color:"rgb(84, 140, 168"}} > {lang.goSignUp} </span> </Link>
                    </>
                )}
            </LanguageContext.Consumer>
        </Box>
    )
}