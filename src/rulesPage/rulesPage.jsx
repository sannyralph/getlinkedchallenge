import "./rulesPage.css"
import lady from "./../assets/lady.png"

const Rules = () => {
    return (
        <section>
            <div>
                <div>
                    <img src={lady} alt="lady_Image" style={{width:'100%', height: '100%'}}  />
                </div>
                <div>
                    <h5>Rules and Guidelines</h5>
                    <p>Our tech hackathon is a melting pot of visionaries, 
                        and its purpose is as clear as day: to shape the future. 
                        Whether you're a coding genius, a design maverick, 
                        or a concept wizard, 
                        you'll have the chance to transform your ideas into reality. 
                        Solving real-world problems, 
                        pushing the boundaries of technology, 
                        and creating solutions that can change the world, 
                        that's what we're all about!</p>
                </div>
            </div>
            
        </section>
    );
}

export default Rules;