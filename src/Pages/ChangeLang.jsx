import { LanguageContext } from "../LanguageContext";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import IconBtn from "../Components/IconBtn";
import { uz, en } from "../App";
import {MdOutlineDone} from "react-icons/md"


export default function ChangeLang(props){
    return(
        <LanguageContext.Consumer>
        {lang=>(
            <div className="change-lang-page">
                <Link to="/profile"> <Box component="div" className="back-icon" style={{top:"24px"}} >
                    <IconBtn />
                </Box></Link>
                <span className="profil-header" > {lang.settings} </span>
                <div className="language-set" style={{marginTop:"100px"}} onClick={props.setUzbek} >
                    <div className="lang-change-selection" >O'zbek</div>
                    {lang===uz?<MdOutlineDone className="lang-tick" />:<></>}
                </div>

                <div className="language-set" style={{marginTop:"20px"}} onClick={props.setEnglish} >
                    <div className="lang-change-selection" > English </div>
                    {lang===en?<MdOutlineDone className="lang-tick" />:<></>}
                </div>
            </div>
        )}
        </LanguageContext.Consumer>
    )
}
