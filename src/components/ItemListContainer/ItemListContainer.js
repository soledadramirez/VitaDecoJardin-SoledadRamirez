import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return(
        <div >
            <p className = 'itemListContainer'> { greeting } </p>
        </div>
    )
    
}

export default ItemListContainer;