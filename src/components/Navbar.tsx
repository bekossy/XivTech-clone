import Logo from '../assets/XivTechLogo.svg'
import Main from "../assets/Logo.svg"
import search from "../assets/searchIcon.svg"
import downArrow from '../assets/downArrow.svg'
import menu from '../assets/menuIcon.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to={"/"} className="navImg">
                <img src={Main} alt="" />
                <img src={Logo} alt="" />
            </Link>

            <div className="navOpt">
                <div className="navBtns">
                    <Link to="/">
                        <p>Services</p>
                        <img src={downArrow} alt="" />
                    </Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <img src={search} alt="" />
                </div>
                <button type='button' className='navBtn'>Let's Talk</button>
            </div>

            <div className="navMenu">
                <img src={menu} alt="" />
            </div>
        </nav>
    )
}

export default Navbar
