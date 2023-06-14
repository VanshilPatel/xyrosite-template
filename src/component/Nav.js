import React, {useEffect} from "react";
import "./css/Nav.css"
import Aos from "aos";
import "aos/dist/aos.css";

function Nav() {

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

    return(
            <div className="nav-logo" data-aos="fade-zoom-in">
                <img src="https://assets.zyrosite.com/YyvylKbrrJt35wVE/logo-dOq0Xev8QECl4yxO.svg" alt="logo-img"/>
            </div>
    )
}

export default Nav;