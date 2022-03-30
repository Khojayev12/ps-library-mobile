import { useState } from "react";
import { uz } from "../App";
import { LanguageContext } from "../LanguageContext";
import Book from "./Book";


export default function SearchResult(props){
    const close = ()=>{
        props.setIsResultOpen(false)
    }
    return(
        <LanguageContext.Consumer>
            {lang=>(
                <div className="search-result" >
                    <span className="kitob-card-head" onClick={()=>{props.setIsResultOpen(true)}} >
                        {lang===uz? props.book.nameUZ:props.book.name}
                    </span>
                    {props.isResultOpen?(<>
                        <Book func={close} state={props.isResultOpen} book={props.book} Col="rgba(0, 0, 0, 0.1)" rad="0px" />
                    </>):(<></>)}
                </div>
            )}
        </LanguageContext.Consumer>
    )
}