import React from "react";
import "../../assets/css/popup.css";
const Popup = ({togglePopup, handleGotItClick, message: { type, content, btn } }) => {

    const popupRef = React.useRef(null);

    React.useEffect(() => {
        if(popupRef.current){
            const contentWidth = popupRef.current.scrollWidth;
            if(contentWidth){
                popupRef.current.style.width = '${contentWidth}px';
            }
        }
    }, [type,content]);
    return(
       <div className="popup" ref={popupRef}>
        <div className="popup-header">{type}
        <span className="close toggle" onClick={togglePopup}>Close</span></div>
        <div className="popup-body">{content}</div>
        <div className="popup-footer">
            <button className="toogle button" data-target="myPopup" onClick={() => { togglePopup(); handleGotItClick() }}>Got it</button>
        </div>
       </div>
    )
}
export default Popup;