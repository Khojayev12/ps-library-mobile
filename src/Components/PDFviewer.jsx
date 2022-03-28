import { LanguageContext } from "../LanguageContext";
import { Box } from "@mui/system";
import IconBtn from "./IconBtn";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


export default function PDFviewer(props){
    const onZoom = (e) => {
        console.log(`Zoom to ${e.scale}`);
    };
    return(
        <LanguageContext.Consumer>
            {lang=>(<>
                <div className="pdf-page" style={{display:props.state? "block":"none"}} >
                    <Box component="div" className="back-icon" onClick={()=>{props.setState(false)}} style={{top:"30px"}} >
                        <IconBtn />
                    </Box>
                    <span className="books-header">{props.name}</span>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: 'calc(100vh - 80px)',
                            marginTop:"70px",
                            width:"95vw",
                            marginLeft:"2.5vw",
                        }}
                    >
                        <Viewer fileUrl={"https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CIE/Paper-2/June%202014%20(v2)%20MS%20-%20Paper%202%20CIE%20Physics%20A-level.pdf"} httpHeaders={{
                            'mode': 'no-cors'
                        }} defaultScale={SpecialZoomLevel.PageFit} onZoom={onZoom} />
                    </div>
                    </Worker>
                </div></>
            )}
        </LanguageContext.Consumer>
    )
}