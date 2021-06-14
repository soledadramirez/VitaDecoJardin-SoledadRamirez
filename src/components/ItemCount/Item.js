import './Item.css';
import { FaPlus, FaMinus} from 'react-icons/fa';
import { useState } from 'react';

const ItemCount = ({initial, stock, onAdd, name}) => {
    
    const [item, setItem] = useState (initial)
    
    const addItems = () => {
        item < stock && setItem (item + 1);
    }

    const subItems = () => {
        item > 0 && setItem (item - 1)
    }

    return(
        <div className = 'contItem'>
            <div className = 'contData'>
                <div className = 'itemName'>
                    {name}
                </div>
                <div className = 'amount'>  
                    <FaMinus onClick = {() => {subItems() }}/>
                    <span> {item} </span>
                    <FaPlus onClick = {() => { addItems() }} />
                </div>
                <div className = 'contOrangeButton'>
                    <button onClick = {() => { onAdd(item) }} className = 'orangeButton'> Agregar al carrito</button>
                </div>
            </div>
        </div>   
    )
}

export default ItemCount;