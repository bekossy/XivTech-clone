import CollabTemplate from '../components/CollabTemplate';
import bgImg3 from '../assets/bgImg3.webp';
import capImg2 from '../assets/capabilityImg2.png'
import capImg3 from '../assets/capabilityImg3.png'

const Cloud = () => {
    const capabilitiesArray = [
        {
            img: capImg2,
            text: ["Cloud Services for Microsoft Azure", "Innovation, Scale, DevOps, Security & Compliance with Azure Cloud"]
        },
        {
            img: capImg3,
            text: ["Cloud Services for AWS", "Innovation, Scale, DevOps, Security & Compliance with AWS"]
        }
    ]
    return (
        <>
            <CollabTemplate
                bgImg={bgImg3}
                title='Cloud Transition = Business Outcomes'
                text='Rapidly - Rehost, Refactor, Rearchitect, Rebuild and Replace applications to transform and achieve business goals.'
                info={["On-Demand", "Transformation", "Utilization"]}
                moreInfo='Achieve business outcomes by transforming to cloud. Our unique capabilities allow us to help you, Discover New Revenue Streams, Reduce Cycle Time, Bring Scale and Reliability, Decrease Time to Market, Future Proof your Digital Estate. Why stop here? Go beyond with adopting cloud to integrate new forms of technologies to speed up, automate and improve your business. Cloud Computing integrates technologies such as Artificial Intelligence (AI), Machine Learning, Big Data Analytics, and the Internet of Things (IoT), helping you to achieve your business goals.'
                capArray={capabilitiesArray}
            />
        </>
    )
}

export default Cloud
