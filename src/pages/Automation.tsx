import CollabTemplate from '../components/CollabTemplate';
import bgImg2 from '../assets/bgImg2.png';
import capImg1 from '../assets/capabilityImg1.jpg'

const Automation = () => {
    const capabilitiesArray = [
        {
            img: capImg1,
            text: ["Bot Automation Simplified", "Build, Deploy and Scale Bots"]
        }
    ]
    return (
        <>
            <CollabTemplate
                bgImg={bgImg2}
                title={"AI + RPA = Enabling End-to-End Automation"}
                text={'Drive Efficiency, Automate and Monetize'}
                info={["Process", "Automation", "Monetization"]}
                moreInfo={"Our team of professionals help you deliver measurable business outcomes by strategizing, designing and executing results driven AI + RPA automation. With Ekisu - our flagship AI automation product, we help you with end-to end automation for your workflows. Each automation helps you save time, reduce cost of human capital, and improve efficiency! Now that’s successful Digital Transformation!"}
                capArray={capabilitiesArray}
            />
        </>
    )
}

export default Automation
