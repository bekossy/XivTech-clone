import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        aos.init({ duration: 1500 });
    }, []);
    return (
        <div className="welcome">
            <section>
                <h1>Bot, Process, Efficiency</h1>
                <h1>Robotic Process Automation that unifies people, process and technology</h1>
                <h1>We help business leaders embrace AI-Powered Automation as they endeavor to visualize the future.</h1>
            </section>
        </div>
    )
}

export default Home
