import { useState } from 'react';

import Header from './components/Layout/Header.jsx';
import Meals from './components/Meals/Meals.jsx';
import Cart from './components/Cart/Cart.jsx';
import CartProvider from './CartProvider.jsx';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const showCartHandler = () => { setCartVisibility(true);  console.log(cartVisibility); };
  const hideCartHandler = () => { setCartVisibility(false); };
  
  console.log(cartVisibility);
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      { cartVisibility && <Cart style={{zIndex:200,}} onClose={hideCartHandler} />}   
    </CartProvider>
  );
}
export default App;