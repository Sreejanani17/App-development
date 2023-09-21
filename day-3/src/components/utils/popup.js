import React from "react";
import "../../assets/css/popup.css";
const Popup = ({togglePopup, message}) => {

    const popupRef = React.useRef(null);

    React.useEffect(() => {
        if(popupRef.current){
            const contentWidth = popupRef.current.scrollWidth;
            if(contentWidth){
                popupRef.current.style.width = '${contentWidth}px';
            }
        }
    }, [message]);
    return(
       <div className="popup" ref={popupRef}>
        <div className="popup-header">{message.type}
        <span className="close toggle" onClick={togglePopup}>Close</span></div>
        <div className="popup-body">{message.content}</div>
        <div className="popup-footer">
            <button className="toogle button" data-target="myPopup" onClick={togglePopup}>Got it</button>
        </div>
       </div>
    )
}
export default Popup;