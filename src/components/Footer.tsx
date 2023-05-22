import Logo from '../assets/logoBlack.svg'
import Main from "../assets/mainBlack.svg"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="footerOpts">
                    <div className="footerLeft">
                        <div className="footerImg">
                            <img src={Main} alt="" />
                            <img src={Logo} alt="" />
                        </div>
                        <p>By leveraging our full spectrum strategy, design, and technology capabilities, we deliver game-changing outcomes for our clients around the world.</p>
                    </div>

                    <div className="footerRight">
                        <div className="footerGrid">
                            <h3>Locations</h3>
                            <p>Toronto</p>
                            <p>New Delhi</p>
                        </div>
                        <div className="footerGrid">
                            <h3>Services</h3>
                            <p>Complete AI + RPA Automation</p>
                            <p>Cloud Services</p>
                            <p>Delivery Pipeline Automation</p>
                            <p>Simplify Cloud Ops</p>
                            <p>Build Better Apps</p>
                        </div>
                        <div className="footerGrid">
                            <h3>XivTech</h3>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Contact</p>
                        </div>
                    </div>

                </div>
            </section>

            <p>&copy; {new Date().getFullYear()} XivTech, Inc. All Rights Reserved</p>
        </footer>
    )
}

export default Footer
