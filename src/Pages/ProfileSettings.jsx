import { LanguageContext } from "../LanguageContext";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import IconBtn from "../Components/IconBtn";
import Foto from "../Media/person.webp"
import { useState, useEffect } from "react";

export default function ProfilSettings(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return;
        setName(user.name);
        setEmail(user.email);
    }, []);

    const handleSave = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return;
        user.name = name;
        user.email = email;
        localStorage.setItem(
            'user',
            JSON.stringify(user)
        );
    }

    return(
        <LanguageContext.Consumer>
            {lang=>(
                <div className="profil-page">
                    <Link to="/"> <Box component="div" className="back-icon" style={{top:"24px"}} >
                        <IconBtn />
                    </Box></Link>
                    <span className="profil-header" > Sozlamalar </span>
                    <div className="settings-save" onClick={handleSave}>Saqlash</div>
                    <div className="settings-container">
                        <img src={Foto} alt="" className="settings-img" />
                        <input className="setting-input" placeholder="ism" defaultValue={name} onChange={e => setName(e.target.value)} />
                        <input className="setting-input" placeholder="email" defaultValue={email} onChange={e => setEmail(e.target.value)} style={{top:"368px"}}/>
                    </div>
                    
                </div>
            )}
        </LanguageContext.Consumer>

    )
}