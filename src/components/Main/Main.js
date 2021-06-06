import './Main.css';
import NavBar from '../NavBar/NavBar.js';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';



function Main() {
  return (
    <div>
        <Header />
        <NavBar />
        <ItemListContainer greeting = 'Catálogo de productos'/>
    </div>
  );
}

export default Main;
