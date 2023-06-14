import React , {useEffect} from "react";
import "./css/Row2.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Row2() {

    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

    return (
        <div className="row2">
            <div className="p1">
                <div className="p1-img" data-aos="fade-zoom-in">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=478,fit=crop/YyvylKbrrJt35wVE/mockup_2-mp8N3033Rphb7DNZ.png" alt="p1-img"/>
                </div>

                <div className="p1-text">
                    <p className="p1-l1" data-aos="fade-zoom-in" data-aos-delay="100">#1</p>
                    <h2 data-aos="fade-zoom-in" data-aos-delay="300">Your finances in <span>one place</span></h2>
                    <p className="p1-l3" data-aos="fade-zoom-in" data-aos-delay="300">From checking accounts to savings, credit cards, and more, personal finances can be tricky. Blick's mission is to make it simple to manage everything from one place.</p>
                </div>
            </div>

            <div className="p2">
                <div className="p2-img" data-aos="fade-zoom-in">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=480,fit=crop/AE0EGKj7XnIX7DqL/mockup_3-YbN5DP0oORc6bR3x.png" alt="p2-img" />
                </div>

                <div className="p2-text">
                    <p className="p2-l1" data-aos="fade-zoom-in" data-aos-delay="100">#2</p>
                    <h2 data-aos="fade-zoom-in" data-aos-delay="300">Your finances <span>anywhere</span></h2>
                    <p className="p2-l3" data-aos="fade-zoom-in" data-aos-delay="300">We're dedicated into making banking truly mobile. No matter where you are, or what device you're using, we guarantee Blick will give you a snapshot into your financial health anytime, anywhere.</p>
                </div>

            </div>

            <div className="p3">
                <div className="p3-img">
                    <img src="https://assets.zyrosite.com/AE0EGKj7XnIX7DqL/mockup_4-AQE98M88kgFWl5ey.png" alt="p3-img"/>
                </div>

                <div className="p3-text">
                    <p className="p3-l1" data-aos="fade-zoom-in" data-aos-delay="100">#3</p>
                    <h2 data-aos="fade-zoom-in" data-aos-delay="300">Easily <span>track</span> expense data</h2>
                    <p className="p3-l3" data-aos="fade-zoom-in" data-aos-delay="300">Unlike other finance apps, we're all about categorizing your financial data into meaningful and easily comprehensible charts and tables. We won't leave you guessing.</p>
                </div>
            </div>
        </div>
    )
}

export default Row2;