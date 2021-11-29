import React, {useState} from "react";
import Header from "./components/Header";
import Product from './components/Product';
import Footer from './components/Footer';
import SNEAKERS_DATA from "./SNEAKERS_DATA";
import Cart from './components/Cart';

function App() {
  const [items, setItems] = useState([]);
  const [isCartOpen, setCartState] = useState(false);
  const totalCarItems = () => {
    let amount = 0;
    items.forEach(item => amount += item.amount);
    return amount;
  }


  function updateCart(item) {
    if (item.amount > 0) {
    const updatedOrder = [...items, item];
    setItems(updatedOrder);
    }
  }

  function deleteItem(id) {
    const remainingItems = items.filter(item => item.id !== id);
    setItems(remainingItems);
  }

  return (
    <div>
      <Header setCartState={() => setCartState(!isCartOpen)} totalCarItems={totalCarItems}/>
      <main>
        <Cart items={items} dynamicClass={isCartOpen ? 'cart-modal active' : 'cart-modal'} deleteItem={deleteItem}/>
        <Product productData={SNEAKERS_DATA} updateCart={updateCart}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
