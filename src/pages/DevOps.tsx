import CollabTemplate from "../components/CollabTemplate"
import bgImg1 from '../assets/bgImg1.jpeg'
import capImg2 from '../assets/capabilityImg2.png'

const DevOps = () => {
    const capabilitiesArray = [
        {
            img: capImg2,
            text: ["Continuous Integration and Continuous Deployment", "Build, Integration and Testing process automation"]
        }
    ]
    return (
        <>
            <CollabTemplate
                bgImg={bgImg1}
                title="DevOps with Azure"
                text="Greater Agility, Resilience and Portability by building and deploying apps rapidly."
                info={["Collaborate", "Speed", "Innovate"]}
                moreInfo="We help you get to market quicker by integrating DevOps Automation leveraging Containers, CICD and Microservices. Achieve business outcomes by adopting DevOps. Our unique capabilities allow us to help you build continuous delivery pipeline, enhance reliability & resilience, balance agility & consistency at scale."
                capArray={capabilitiesArray}
            />
        </>
    )
}

export default DevOps
