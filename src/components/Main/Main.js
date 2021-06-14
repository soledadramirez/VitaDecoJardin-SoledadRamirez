import './Main.css';
import NavBar from '../NavBar/NavBar.js';
import ItemList from '../ItemList/ItemList';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ItemContainer from '../itemContainer/itemContainer';


 function Main() {
  return (
    <div>
        <Header />
        <NavBar />
        <ItemContainer>
          <ItemList greeting = 'Catálogo de productos'/>
        </ItemContainer>
    </div>
  );
}

export default Main;
