import './ItemList.css';
import { useState } from 'react';
import Item from '../ItemCount/Item';
const productList = [
    {
        title: 'Uno'
    },
    {
        title: 'Dos'
    },
    {
        title: 'Tres'
    },
    {
        title: 'Cuatro'
    }
];

const getProductList = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(productList), 2000);
});

const ItemListContainer = ({ greeting }) => {
    const [proudcts, setProducts] = useState([]);
    getProductList.then((items) => setProducts(items));

    const onAdd = (amount) => {
        console.log('Agregaste al carrito ', amount, ' productos' )
    }

    return(
        <div className = 'contItemList'>
            {
                proudcts.map((product)=> (
                    <Item name={product.title} initial = {1} stock = {6} onAdd = { onAdd }/>
                ))
            }
        </div>
    )
    
}

export default ItemListContainer;