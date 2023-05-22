import Logo from '../assets/XivTechLogo.svg'
import Main from "../assets/Logo.svg"
import search from "../assets/searchIcon.svg"
import downArrow from '../assets/downArrow.svg'
import menu from '../assets/menuIcon.svg'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navImg">
                <img src={Main} alt="" />
                <img src={Logo} alt="" />
            </div>

            <div className="navOpt">
                <div className="navBtns">
                    <a href="/">
                        <p>Services</p>
                        <img src={downArrow} alt="" />
                    </a>
                    <a href="/">Careers</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
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
