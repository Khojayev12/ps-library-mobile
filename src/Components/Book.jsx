import Xmark from "../Icons/xmark.svg"
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

export default function Book(props){
    const MenuButton = styled(Button)((filled) => ({
        textAlign: "center",
        padding: "5px 34px",
        width: "100px",
        height: "30px",
        marginLeft: "calc(50% - 100px/2)",
        marginTop: "16px",
        background: "#E2E2E2",
        color:"rgb(52, 78, 90)",
        borderRadius: "5px",
        textTransform:"none"
    }));
    const NavbatgaYozilish = styled(Button)(() => ({
        width:"calc(100% - 68px)",
        height:"62px",
        marginLeft:"34px",
        paddingTop:"15px",
        paddingBottom:"15px",
        zIndex:"16px",
        position:"absolute",
        bottom:"25px",
        background:"linear-gradient(90deg, #548CA8 0%, #476072 100%);",
        borderRadius:"13px",
        fontFamily: "IBM Plex Sans",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "19px",
        lineHeight: "25px",
        color:" #EEEEEE",
        textAlign:"center",
        textTransform:"none",
        '&:active': {
            backgroundColor: "rgb(214, 214, 214)",
            outline:"none",
            border:"none"
            },
    }));
    return(
        <>
        <div className={props.state? "book-menu book-active":" book-menu book-not-active"}>
            <img src={Xmark} alt="" className="book-xmark" onClick={props.func} />
            {props.book.isAvailable ? <span className="mavjud">Mavjud</span>:<span className="mavjud-emas">Mavjud emas</span>}
            <div className="book-mini-div">
                <img src={props.book.image} alt="" className="book-big" />
                <div className="book-name-head" >{props.book.name} </div>
                <div className="book-name-author" >{props.book.author}</div>
                <MenuButton>{props.book.genre[0].toUpperCase() + props.book.genre.slice(1, props.book.genre.length)}</MenuButton>
                <div className="book-about-it">{props.book.description || ""}</div>
            </div>
            <div className="book-navbat">
                <NavbatgaYozilish>Navbatga yozilish</NavbatgaYozilish>
            </div>
        </div>
        <div className={props.state? "book-bg book-active":" book-bg book-not-active"} onClick={props.func} >d</div>
        </>
    )
}