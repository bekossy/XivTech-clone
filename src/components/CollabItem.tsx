import rightArrow from '../assets/rightArrow.svg';
import { Link } from 'react-router-dom';

interface Props {
    img: string;
    title: string;
    text: string;
    link: string;
    linkText: string;
}

const CollabItem: React.FC<Props> = ({ img, title, text, link, linkText }) => {
    return (
        <div className="collabItem">
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
