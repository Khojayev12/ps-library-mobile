import { Box } from "@mui/system"
import IconBtn from "../Components/IconBtn"
import {Link} from "react-router-dom"
import { LanguageContext } from "../LanguageContext"
import OrderBook from "../Components/OrderBook"
import Kitob15 from "../Media/kitob15.svg"

export default function Orders(){
    return(
        <LanguageContext.Consumer>{lang => (
        <div className="orders-page">
            <Link to="/"> <Box component="div" className="back-icon" style={{top:"24px"}} >
                <IconBtn />
            </Box></Link>
            <span className="books-header">{lang.buyurtmalar}</span>
            <div className="for-scroll">
            <OrderBook name={"Stiv Jobs"} author="Uolter Ayzekson" date="2/10/2022" status={"Yuborilgan"} rasm={Kitob15} stColor="rgb(223, 165, 0)" />
            <OrderBook name={"Stiv Jobs"} author="Uolter Ayzekson" date="2/10/2022" status={"Qabul qilindi"} rasm={Kitob15} stColor="rgb(22, 195, 30)" />
                <OrderBook name={"Stiv Jobs"} author="Uolter Ayzekson" date="2/10/2022" status={"Rad etildi"} rasm={Kitob15} stColor="rgb(169, 50, 57)" />
            </div>
        </div>)}
        </LanguageContext.Consumer>
    )
}