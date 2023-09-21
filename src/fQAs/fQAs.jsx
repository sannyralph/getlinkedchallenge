import "./fQAs.css"
import curious from "./../assets/thinking.png"

const FQAs = () => {
    return (
        <section>
            <div>
                <div>
                    <h5>Frequently Ask Question</h5>
                    <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                    <p>Can I work on a project I started before the hackathon?</p>
                    <p>What happens if I need help during the hackathon</p>
                    <p>What happens if I don't have an idea for a project?</p>
                    <p>Can I join a team or do I have to come with one?</p>
                    <p>What happens after the hackathon ends</p>
                    <p>Can I work on a project I started before the hackathon?</p>
                </div>
                <div>
                    <img src={curious} alt="curious-man" style={{width:'100%', height: '100%'}}  />
                </div>
            </div>
        </section>
    );
}

export default FQAs;