import "./privacy.css"
import privacy from "./../assets/privacy.png"
import Button from '@mui/material/Button';

const Privacy = () => {
    return (
        <section>
            <div>
                <div>
                <h5>Privacy Policy and Terms</h5>
                    <p>Last updated on September 12, 2023</p>
                    <p>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                    <div>
                        <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                        <h6>Licensing Policy</h6>
                        <h6>Here are terms of our Standard License:</h6>
                        <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                        <p>You are licensed to use the item available at any free source sites, for your project developement</p>
                        <Button variant="contained" className='button' >Read More</Button>
                    </div>
                </div>
                <div>
                    <img src={privacy} alt="privacy_Image" style={{width:'100%', height: '100%'}}  />
                </div>
            </div>
            
        </section>
    );
}

export default Privacy;