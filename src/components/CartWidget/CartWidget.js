import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = ({ text }) => {
    return (
        <li className='contact'>
            { text } <a href = '#seccion2'> <FaShoppingCart  size = '30px'/></a>
        </li>
    )
}

export default CartWidget;