import './Header.css';
import logo from '../../assets/images/logoVitaTransp.png';
import { FaInstagram, FaWhatsapp, FaRegEnvelope, FaShoppingCart } from 'react-icons/fa';
import IconContainer from '../IconContainer/IconContainer';

const Header = () => {
    return (
    <header className = 'header'>
        <ul className = 'topMenu'>
            <li className = 'liImgMenu'>
            <img className = 'imgMenu' src = {logo}></img>
            </li>
            <IconContainer >
                <FaInstagram size = '25px' color = 'white'/> 
            </IconContainer>
            <IconContainer >
                <FaWhatsapp size = '25px' color = 'white'/>
            </IconContainer>
            <IconContainer >
                <FaRegEnvelope size = '25px' color = 'white'/> 
            </IconContainer>
        </ul>
    </header>
    )
}

export default Header;