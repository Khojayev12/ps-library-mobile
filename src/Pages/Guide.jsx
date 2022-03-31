import { LanguageContext } from "../LanguageContext";
import video from "../Media/video3.mp4"
export default function Guide(props) {
  return (
    <LanguageContext.Consumer>
        {lang=>(
      <div className="guide-page">
        <video width="90%" controls  >
          <source src={video} type="video/mp4" />
        </video>
      </div>)}
    </LanguageContext.Consumer>
  );
}
