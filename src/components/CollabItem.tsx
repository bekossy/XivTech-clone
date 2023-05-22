import rightArrow from '../assets/rightArrow.svg';
import { Link } from 'react-router-dom';
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

interface Props {
    img: string;
    title: string;
    text: string;
    link: string;
    linkText: string;
}

const CollabItem: React.FC<Props> = ({ img, title, text, link, linkText }) => {
    useEffect(() => {
        aos.init({ duration: 1500 });
    }, []);
    return (
        <div className="collabItem" data-aos="fade-up">
            <div className="collabTitle">
                <h1>{title}</h1>

                <p>{text}</p>

                <Link to={`/${link}`}>
                    <p>{linkText}</p>
                    <img src={rightArrow} alt="" />
                </Link>
            </div>
            <div className="collabItemImg">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default CollabItem
