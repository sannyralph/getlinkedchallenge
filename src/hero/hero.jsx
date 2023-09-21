import "./hero.css";
import star from "./../assets/star.png"
import star1 from "./../assets/star2.png"
import mann from "./../assets/man.png"
import Button from '@mui/material/Button';
import image01 from "./../assets/Image1.png"

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="container">
                <h4>Igniting a Revolution in HR Innovation</h4>
                <img src={star}  alt="starPhoto" className="starPhoto"/>
                <img src={star1}  alt="starPhoto" className="starPhoto"/>
                <div>
                    <h3>getlinked  Tech</h3>
                    <h3>hackathon 1.0</h3>
                </div>
                <div>
                    <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                   <span><Button variant="contained" className='button' >Contained</Button></span> <span> <img src={star1}  alt="starPhoto" className="starPhoto"/></span>
                </div>
                <div><span>00H</span><span>00M</span><span>00S</span></div>
            </div>
            <img src={mann} alt="man-with-smartglassess"  style={{width:'100%', height: '100%'}} />
        </section>
    );
}

export default Home;