import "./hero.css";
import star from "./../assets/star0.png"
import star1 from "./../assets/star01.png"
import chain from "./../assets/chain.png"
import starIcon from "./../assets/lil-star.png"
import light from "./../assets/Image1.png"
import Button from '@mui/material/Button';
// import image01 from "./../assets/Image1.png"

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="container">
                <h4>Igniting a Revolution in HR Innovation</h4>
                <img src={star}  alt="starPhoto" className="starPhoto"/>
                <img src={star1}  alt="starPhoto" className="starPhoto"/>
                <div className="subhead">
                   <span>getlinked  Tech</span><br/>
                   <span>hackathon<span>1.0</span></span><span><img src={chain} alt="chain-icon"/></span><span><img src={starIcon} alt="chain-icon"/></span>
                </div>
                <div className="paragraphs">
                    <p>Participate in getlinked tech Hackathon <br/> 2023 stand a chance to win a Big prize</p>
                   <span><Button variant="contained" className='button' >Contained</Button></span> <span> <img src={star1}  alt="starPhoto" className="starPhoto"/></span>
                </div>
                <div><span>00H</span><span>00M</span><span>00S</span></div>
            </div>
            <div id="background-image">
                <img src={light} alt="man-with-smartglassess"  style={{width:'100%', height: '100%'}}  />
            </div>                           
        </section>                                                              
    );
}

export default Home;