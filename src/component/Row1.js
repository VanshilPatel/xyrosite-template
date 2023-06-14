import React, { useEffect } from "react";
import "./css/Row1.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Row1() {

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

    return (
        <div className="row1">
            <div className="row-left" data-aos="fade-zoom-in">
                <h1 className="row-above">A way to track your</h1>
                <h1 className="row-below">finances</h1>
                <p className="row-small">The easy way to stay on top of your finances, no matter where you are.</p>
                <button data-aos="fade-zoom-in">Get Started</button>
            </div>     
            <div className="row-right" data-aos="fade-zoom-in">
                <img className="phone" src="https://assets.zyrosite.com/YyvylKbrrJt35wVE/mockup_1-AzGzyBl0Grt0gagr.png" alt="phone-img"/>
            </div>
        </div>
    )
}

export default Row1;