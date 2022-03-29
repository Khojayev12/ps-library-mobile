import { Box } from "@mui/system";
import { useState } from "react";
import Kitob1 from "../Media/kitob15.svg"
import Book from "./Book"

export default function BookMini(props){
    const [isBookOpen, setIsBookOpen] = useState(false)
    const close = () => {
        setIsBookOpen(false)
    }
    return(
        <>
        <Box component="div" sx={{width:"100px", display:"inline-block" , marginLeft:"18px", marginRight:"18px", marginTop:"18px", padding:"0px", zIndex:isBookOpen?"100":"160" }} onClick={()=>{setIsBookOpen(!isBookOpen)}} >
            <img src={props.book.image} className="kitob-card-img" alt="" style={{zIndex:isBookOpen?"100":"160"}} />
            <span className="kitob-card-head" style={{zIndex:isBookOpen?"100":"160"}} > {props.book.name?.length > 10 ? props.book.name?.slice(0,10) + "..." : props.book.name} </span>
            <span className="kitob-card-footer" style={{zIndex:isBookOpen?"100":"160"}} > {props.book.author} </span>
        </Box>
       <Book func={close} state={isBookOpen} />
        </>
    )
}