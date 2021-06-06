import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar () {
    return (
        <div className = 'topNavBar'>
            <nav className = 'topNavBar'>
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
                    <CartWidget text = 'Comprar'/> 

                </ul>
            </nav>
        </div>
    )
}

export default NavBar;

