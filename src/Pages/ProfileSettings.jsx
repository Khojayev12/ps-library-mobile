import { LanguageContext } from "../LanguageContext";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import IconBtn from "../Components/IconBtn";
import Foto from "../Media/profilFoto.svg"

export default function ProfilSettings(){
    return(
        <LanguageContext.Consumer>
            {lang=>(
                <div className="profil-page">
                    <Link to="/"> <Box component="div" className="back-icon" style={{top:"24px"}} >
                        <IconBtn />
                    </Box></Link>
                    <span className="profil-header" > Sozlamalar </span>
                    <div className="settings-save" >Saqlash</div>
                    <div className="settings-container">
                        <img src={Foto} alt="" className="settings-img" />
                        <span className="setting-add-img"> Yangi rasm qo'shish </span>
                        <input className="setting-input" placeholder="ism" />
                        <input className="setting-input" placeholder="email" style={{top:"368px"}}/>
                        <input className="setting-input" placeholder="sinf" style={{top:"444px"}} />
                    </div>
                    
                </div>
            )}
        </LanguageContext.Consumer>

    )
}