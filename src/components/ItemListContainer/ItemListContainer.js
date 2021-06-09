import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import itemImg from '../../assets/images/paloDeAgua.jpeg';
import { useState } from 'react';

const ItemListContainer = ({ greeting }) => {
    const onAdd = (amount) => {
        console.log('Agregaste al carrito ', amount, ' productos' )
    }
    return(
        <div className = 'contItemList'>
            <ItemCount initial = {1} stock = {6} onAdd = { onAdd }/>
        </div>
    )
    
}

export default ItemListContainer;