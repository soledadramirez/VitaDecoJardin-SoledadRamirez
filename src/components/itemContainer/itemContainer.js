import './ItemContainer.css';

const ItemContainer = ({children}) => {
    return (
        <div className={'container'}>
            {children}
        </div>
    )
}

export default ItemContainer;