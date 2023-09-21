import "./price.css"
import price from "./../assets/priceImg1.png"
import reward from "./../assets/Rewards.png"

const Price = () => {
    return (
        <section>

            <div>
                <div>
                    <h5>Prizes and Rewards</h5>
                    <p>Highlight of the prizes or rewards for winners and for participants.</p>
                </div>
            <div>
                <div>
                     <img src={price} alt="price_Image" style={{width:'100%', height: '100%'}}  />
                </div>
                <div>  
                    <img src={reward} alt="reward_Image" style={{width:'100%', height: '100%'}}  />  
                </div>
                </div>
            </div>
            
        </section>
    );
}

export default Price;