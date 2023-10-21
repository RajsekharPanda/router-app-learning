import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    function clickHandler(){
        navigate("/support")
    }
    return(
        <div>
            <div>
                This is about page
            </div>
                <button onClick={clickHandler}>Move to sypport page</button>
        </div>
    )
}

export default About