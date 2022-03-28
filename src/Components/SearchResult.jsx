import { LanguageContext } from "../LanguageContext";


export default function SearchResult(props){
    return(
        <LanguageContext.Consumer>
            {lang=>(
                <div className="search-result">
                    <span className="kitob-card-head">
                        {props.text}
                    </span>
                </div>
            )}
        </LanguageContext.Consumer>
    )
}