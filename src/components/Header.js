import React from 'react'
import burger from "../images/burger.png"

const Header = () => {

    return (
        <nav>
            <div className="nav-left" ><a href="#home">Portfolio</a></div>
            <div className="nav-right" >
                <ul>
                    <li>
                        <img src={burger} alt="" className='burger' />
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#exp">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#certifs">
                            Certifications
                        </a>
                    </li>
                    <li>
                        <a href="#contacts">
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
