import "./partners&s.css"
import partners from "./../assets/partners.png"

const Partners = () => {
    return (
        <section>
            <div>
                <div>
                    <h5>Partners and Sponsors</h5>
                    <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
                </div>
                <div>
                    <img src={partners} alt="partners_Image" style={{width:'100%', height: '100%'}}  />
                </div>
            </div>
            
        </section>
    );
}

export default Partners;