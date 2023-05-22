import ProcessImg from '../assets/img1.jpg';
import gridImg1 from '../assets/img2.jpg'
import gridImg2 from '../assets/img3.jpg'
import gridImg3 from '../assets/img4.jpg'

const Process = () => {
    return (
        <div className="process">
            <section style={{ maxWidth: "900px" }}>
                <div className="processImg">
                    <img src={ProcessImg} alt="" />
                </div>

                <p>Our proven process</p>

                <div className="align">
                    <div className="alignTitle">
                        <h3>Align</h3>
                        <h3>Design</h3>
                        <h3>Refine</h3>
                    </div>
                    <div className="alignText">
                        We Productize services. With Ekisu - our flagship AI automation product, we lead the RPA transformation process to strategize, design, build, launch and support the automation. Following deploy, we follow a feedback based refinement process.
                    </div>
                </div>

                <div className="expertise">
                    <p>Our expertise</p>

                    <div className="expertiseText">
                        Our core focus on AI + RPA, Design Thinking and Customer Experience allows us to help drive customer focussed innovation. We automate businesses for growth, continued success and leadership.
                    </div>

                    <div className="expertiseGrid">
                        <div className="exGrid">
                            <img src={gridImg1} alt="" />

                            <div className="exGridText">
                                <h1>Strategy</h1>

                                <p>Digital Transformation</p>
                                <p>AI + RPA Automation</p>
                                <p>Operational Model</p>
                                <p>Product Vision</p>
                                <p>Product Roadmap</p>
                            </div>
                        </div>
                        <div className="exGrid">
                            <img src={gridImg2} alt="" />

                            <div className="exGridText">
                                <h1>Design + Production</h1>

                                <p>RPA automation</p>
                                <p>Machine Learning / AI</p>
                                <p>Document Data Capture</p>
                                <p>Bot Deploy and Scale</p>
                                <p>Web/Mobile App Development</p>
                            </div>
                        </div>
                        <div className="exGrid">
                            <img src={gridImg3} alt="" />

                            <div className="exGridText">
                                <h1>Growth</h1>

                                <p>SaaS Platform</p>
                                <p>Bot Optimization</p>
                                <p>AI + RPA Lifecycle Management</p>
                                <p>A/B Testing</p>
                                <p>KPI Tracking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Process
