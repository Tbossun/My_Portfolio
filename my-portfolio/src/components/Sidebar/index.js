import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Tbossun" />
    </Link>
    <nav>
      <NavLink exact activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/sodiq-alabi-7a3b99a4/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Tbossun" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sodiq-alabi-7a3b99a4/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sodiq-alabi-7a3b99a4/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
