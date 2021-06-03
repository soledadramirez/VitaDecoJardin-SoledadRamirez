import './NavBar.css';
import logo from '../../assets/images/logoVita.png';
import logow from '../../assets/images/wspIcon.png';
import logoe from '../../assets/images/emailIcon.png';
import logoi from '../../assets/images/instagramIcon.png';


function NavBar () {
    return (
            <nav className = 'topNavBar'>
                <ul className = 'topMenu'>
                    <li >
                    <img className = 'imgMenu' src = {logo}></img>
                    </li>
                    <li className = 'icons'>
                    <img className = 'icon' src = {logoi}></img>
                    <img className = 'icon' src = {logoe}></img>
                    <img className = 'icon' src = {logow}></img>
                    </li>    
                </ul>
                <ul className = 'menu'>
                    <li className='prom'>
                        <a href = '#seccion2'> Promociones</a>
                    </li>
                    <li className='interior'>
                        <a href = '#seccion1'>Plantas de interior</a>
                    </li>
                    <li className='exterior'>
                        <a href = '#seccion2'> Plantas de exterior</a>
                    </li>
                    <li className='huerta'>
                        <a href = '#seccion2'> Huerta</a>
                    </li>
                    <li className='home'>
                        <a href = '#seccion2'> Hogar</a>
                    </li>
                    <li className='contact'>
                        <a href = '#seccion2'> Contactanos</a>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar;

