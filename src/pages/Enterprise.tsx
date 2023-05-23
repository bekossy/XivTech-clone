import CollabTemplate from '../components/CollabTemplate'
import bgImg1 from '../assets/bgImg1.jpeg'
import capImg2 from '../assets/capabilityImg2.png'
import capImg3 from '../assets/capabilityImg3.png'

const Enterprise = () => {
    const capabilitiesArray = [
        {
            img: capImg2,
            text: ["Build Apps - Deliver New apps Users Love"]
        },
        {
            img: capImg3,
            text: ["Modernize Apps - Rearchitect Valuable Legacy Apps"]
        }
    ]
    return (
        <>
            <CollabTemplate
                bgImg={bgImg1}
                title='Cloud Native = Future Proof'
                text='Achieve Competitive Advantage with Agility, Reliability, Responsiveness and Speed.'
                info={["Speed", "Agility", "Cost - Effective"]}
                moreInfo='We know cloud. We help unlock real value by helping you transform your business by virtue of cloud transformation. Being Cloud-Native enables Rapid Responsiveness, Innovative Features, and Zero Downtime. We help you accelerate business velocity and growth by embracing rapid change, large scale and resilence. Our expertise and focus on the Twelve-Factor App and the API First principles allow us to build true cloud-native apps.'
                capArray={capabilitiesArray}
            />
        </>
    )
}

export default Enterprise
