import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/about")
    }
    return(
        <div>
            <div>
                This is Labs page
            </div>
            <button onClick={clickHandler}>Move to about page</button>
        </div>
    )
}

export default Labs