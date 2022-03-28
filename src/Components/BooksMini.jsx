import { Box } from "@mui/system";
import { useState } from "react";
import { LanguageContext } from "../LanguageContext";
import Kitob1 from "../Media/kitob15.svg"
import Book from "./Book"

export default function BookMini(props){
    const [isBookOpen, setIsBookOpen] = useState(false)
    const close = () => {
        setIsBookOpen(false)
    }
    return(
        <LanguageContext.Consumer>{lang=>(<>
        <Box component="div" sx={{width:"95px", height:"120px", display:"inline-block" , marginLeft:"18px", marginTop:"18px", padding:"0px", zIndex:isBookOpen?"100":"160" }} onClick={()=>{setIsBookOpen(!isBookOpen)}} >
            <img src={props.img} className="kitob-card-img" alt="" style={{zIndex:isBookOpen?"100":"160"}} />
            <span className="kitob-card-head" style={{zIndex:isBookOpen?"100":"160"}} > {props.Name.length > 10?(props.Name.slice(0,10) + "..."):props.Name} </span>
            <span className="kitob-card-footer" style={{zIndex:isBookOpen?"100":"160"}} > {props.Author} </span>
        </Box>
       <Book func={close} 
       state={isBookOpen} 
       file={props.file} 
       img={props.img}
       Author={props.Author}
       name={props.Name} 
       genre={props.genre}
       isAvailable={props.isAvailable} />
       </>)}</LanguageContext.Consumer>
    )
}