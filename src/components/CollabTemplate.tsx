interface Props {
    bgImg: string;
    title: string;
    text: string;
    info: string[];
    moreInfo: string;
    capArray: {
        img: string;
        text: string[];
    }[];
}

const CollabTemplate: React.FC<Props> = ({ bgImg, title, text, info, moreInfo, capArray }) => {
    return (
        <div className="template">
            <div className="templatebg" style={{ background: `rgba(0, 0, 0, 0.4) url(${bgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "50% center", backgroundBlendMode: "darken", backgroundAttachment: "fixed" }}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>

            <div className="templateInfo">
                <div className="tempInfoTitle">
                    {info.map((infoText, index) => (
                        <p key={index}>{infoText}</p>
                    ))}
                </div>

                <p>{moreInfo}</p>

                <button className="btn">Get in touch</button>
            </div>

            <div className="capabilities">
                <h1>Capabilities</h1>

                <div className="cards">
                    {capArray.map((card, index) => (
                        <div className="card" key={index}>
                            <img src={card.img} alt="" />

                            <div className="cardText">
                                {card.text.map((cardText, index) => (
                                    <p key={index}>{cardText}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CollabTemplate
