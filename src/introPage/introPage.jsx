import "./introPage.css"
import Bigidea from "./../assets/bigidea.png"

const Intro = () => {
    return (
        <section>
            <div>
                <div className="introImage">
                    <img src={Bigidea} alt="big-idea_Image" style={{width:'100%', height: '100%'}}  />
                    <h5 className="bigIdea">The Big <br/> Idea!</h5>
                </div>
                <div>
                    <h5 className="subhead">Introduction to getlinked <br /><span id="subheadDigit">tech Hackathon 1.0</span></h5>
                    <p className="paragraphs">Our tech hackathon is a melting pot of visionaries, 
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

export default Intro;