import Kitob15 from "../Media/kitob15.svg"
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Book from "./Book"
import { useState } from "react";

export default function OrderBook(props){
    const BookBtnOrder = styled(Button)(() => ({
        padding: "15px 0px",
        width: "150px",
        height: "20px",
        fontFamily: "IBM Plex Sans",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "13px",
        lineHeight: "13px",
        textAlign: "center",
        textTransform:"none",
        color: "#EEEEEE",
        background: "linear-gradient(90deg, #548CA8 0%, #476072 100%)",
        borderRadius: "3px",
        margin:"2px 15px"
     }))
     const [isBookOpen, setIsBookOpen] = useState(false)
    const close = () => {
        setIsBookOpen(false)
    }
    return(
        <div className="order-component" >
            <div className="order-img">
                <img src={props.rasm} alt="" className="order-book-img" />
            </div>
            <div className="order-book-text">
                <div className="order-book-name"> {props.name} </div>
                <div className="order-book-author"> {props.author} </div>
                <span className="order-book-date">Oxirgi muddat: {props.date} </span>
                <span className="order-book-status"> Status: <span style={{color:props.stColor}}> {props.status} </span> </span>
                <BookBtnOrder onClick={()=>{setIsBookOpen(!isBookOpen)}} > Kitob haqida </BookBtnOrder>
            </div>
            <Book func={close} state={isBookOpen} />
        </div>
    )
}