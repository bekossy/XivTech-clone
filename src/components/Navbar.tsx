import Logo from '../assets/XivTechLogo.svg'
import Main from "../assets/Logo.svg"
import search from "../assets/searchIcon.svg"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navImg">
                <img src={Main} alt="" />
                <img src={Logo} alt="" />
            </div>

            <div className="navOpt">
                <div className="navBtns">
                    <a href="#">Services</a>
                    <a href="#">Careers</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <img src={search} alt="" />
                </div>
                <button type='button' className='navBtn'>Let's Talk</button>
            </div>
        </nav>
    )
}

export default Navbar
