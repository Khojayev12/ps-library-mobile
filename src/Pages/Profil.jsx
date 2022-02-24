import { LanguageContext } from "../LanguageContext";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import IconBtn from "../Components/IconBtn";
import Foto from "../Media/profilFoto.svg"
import ToRIght from "../Icons/toRight.svg"

export default function Profil(){
    return(
        <LanguageContext.Consumer>
            {lang=>(
                <div className="profil-page">
                    <Link to="/"> <Box component="div" className="back-icon" style={{top:"24px"}} >
                        <IconBtn />
                    </Box></Link>
                    <span className="profil-header" > Profil </span>
                    <div style={{marginTop:"90px", width:"80vw", marginLeft:"10vw"}}>
                        <div className="profil-img">
                            <img src={Foto} alt="" className="profil-image"/>
                        </div>
                        <div className="profil-email">
                            <div className="profil-name">Binnasa Xavier</div>
                            <div className="profil-email-info">binnasaxavier@gmail.com</div>
                        </div>
                        <div className="profil-link" style={{marginTop:"48px"}} >
                            <Link to="/settings" className="Mylink">
                            <span className="profil-link-menu"> Profil sozlash </span>
                            <img src={ToRIght} alt="" className="profil-link-icon" />
                            </Link>
                        </div>
                        <div className="profil-link" style={{marginTop:"16px"}}>
                            <Link to="/settings" className="Mylink">
                            <span className="profil-link-menu"> Ilova tilini o'zgartirish </span>
                            <img src={ToRIght} alt="" className="profil-link-icon" style={{top:"284px"}} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>

    )
}