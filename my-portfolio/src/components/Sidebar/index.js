import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faClose, faBars,faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import './index.scss'
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () =>  {
  const [showNav, setShowNav] = useState(false);
  return(
  <div className="nav-bar">
    <Link className="logo" to="/" onClick={() => setShowNav(false)}>
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Tbossun" />
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#73ff00"
          size="3x"
          className='close-icon' />
          
    </nav>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/sodiq-alabi-7a3b99a4/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" className="anchor-icon"/>
        </a>
      </li>
      <li>
        <a href="https://github.com/Tbossun" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sodiq-alabi-7a3b99a4/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" className="anchor-icon"/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sodiq-alabi-7a3b99a4/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" className="anchor-icon"/>
        </a>
      </li>
    </ul>
    <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#73ff00"
          size="3x"
          className='hamburger-icon' />
  </div>
)
  }

export default Sidebar;
