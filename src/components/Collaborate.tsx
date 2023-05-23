import collabImg from '../assets/img5.jpg';
import collabItemImg1 from '../assets/img6.jpg'
import collabItemImg2 from '../assets/img7.png'
import collabItemImg3 from '../assets/img8.jpg'
import collabItemImg4 from '../assets/img9.jpg'
import CollabItem from './CollabItem';


const Collaborate = () => {
    return (
        <div className="collaborate">
            <section style={{ maxWidth: "1100px" }}>
                <div className="collabImg">
                    <img src={collabImg} alt="" />
                </div>

                <div className="collab">
                    <h1>Let's Collaborate</h1>

                    <CollabItem
                        img={collabItemImg1}
                        title={"AI + RPA is what we do"}
                        text={"Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"}
                        link={"automation"}
                        linkText={"AI + RPA Automation"}
                    />
                    <CollabItem
                        img={collabItemImg2}
                        title={"Make Bolder Choices"}
                        text={"Digital focused strategies to realize market-changing ideas"}
                        link={"enterprise"}
                        linkText={"Build Better Apps"}
                    />
                    <CollabItem
                        img={collabItemImg3}
                        title={"Innovate with Speed"}
                        text={"Create higher quality software, deliver on customer expectations and business goals"}
                        link={"devops"}
                        linkText={"DevOps"}
                    />
                    <CollabItem
                        img={collabItemImg4}
                        title={"Embrace Cloud"}
                        text={"With Cloud-First accelerate innovation and optimize performance"}
                        link={"cloud"}
                        linkText={"Cloud Services"}
                    />
                </div>

                <button className='btn'>Get in touch</button>
            </section>
        </div>


    )
}

export default Collaborate
