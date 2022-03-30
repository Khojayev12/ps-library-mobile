import { LanguageContext } from "../LanguageContext"

export default function About(props){
    return(
        <LanguageContext.Consumer>
            {lang=>(
                <div className="about-page" >
                    <h2 className="about-header" >
                        {lang.aboutHeader}
                    </h2>
                    <p className="about-info">
                        {lang.aboutInfo}
                    </p>
                </div>
            )}
        </LanguageContext.Consumer>
    )
}