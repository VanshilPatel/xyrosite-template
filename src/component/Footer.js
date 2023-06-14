import React , {useEffect} from "react";
import "./css/Footer.css";
import Gt from '@mui/icons-material/GitHub';
import Ld from '@mui/icons-material/LinkedIn';
import Ig from '@mui/icons-material/Instagram';
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

    return (
        <div className="footer-maindiv">
            <div className="lft" data-aos="fade-zoom-in">
                <img src="https://assets.zyrosite.com/YyvylKbrrJt35wVE/logo_black-AE0xqKEXpLtVQXnM.svg" alt="logo-img"/>
                <p className="lft-l1">Making your finances easy.</p>
                <p className="lft-l2">Privacy policy</p>
                <p className="lft-l3">Terms & Conditions</p>
                <div className="lft-icon">
                    <a href="/"><Gt/></a>
                    <a href="/"><Ld/></a>
                    <a href="/"><Ig/></a>
                </div>
            </div>

            <div className="rht" data-aos="fade-zoom-in">
                <p className="rht-l1">Subscribe to our newsletter</p>
                <form>
                    <p>Email address</p>
                    <input type="email" placeholder="Your email address"></input>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Footer