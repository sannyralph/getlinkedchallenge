import "./footer.css"
import ig from "./../assets/instagram-logo.png"
import fb from "./../assets/facebook-logo.png"
import x from "./../assets/X-logo.png"
import ld from "./../assets/LinkedIn-logo.png"

const Footer = () => {
    return (
        <section>
            <div>
                <div>
                   <h4>getlinked</h4>
                   <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                   <p>Terms of Use Privacy Policy</p>
                </div>
                <div>
                    <h5>Useful Links</h5>
                    <p>Overview</p>
                    <p>Timeline</p>
                    <p>FAQs</p>
                    <p>Register</p>
                    <span>Follow us</span><img src={ig} alt="ig-logo" /> <span><img src={x} alt="ig-logo" /></span> <span><img src={fb} alt="ig-logo" /></span> <span><img src={ld} alt="ig-logo" /></span>
                </div>
                <div>
                    <h5>Contact Us</h5>
                    <p>+234 679 81819</p>
                    <p>27,Alara Street <br/> Yaba 100012  <br/> Lagos State</p>
                </div>

                <p>All rights reserved. © getlinked Ltd.</p>
            </div>
            
        </section>
    );
}

export default Footer;