import React from 'react';

const CartContext = React.createContext({
  items: [], totalAmount: 0,
  // eslint-disable-next-line no-unused-vars
  addItem: (item) => {},  removeItem: (id) => {}
});

export default CartContext;