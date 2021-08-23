import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// pagrindine reducer funkcija===========
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // visa pridejimo i krepseli logika ir grazinti nauja state versija
      const { item } = action;
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;

      // 2 keliai
      /// 1a itemas jau yra krepselyje mes norim padidinti jo kieki ir totalAmount
      const existingCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        /// 2a itemo nera krepsely mes ji idedam

        updatedItems = [...state.items, item];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case 'REMOVE':
      // surasti item krepselyje ir
      // 1a jei item yra tik vienas krepselyje - pasalinti visa item
      // 2a jei daugiau tai pamazinam kieki
      // totalAmount
      throw new Error('remove item not completed yet');

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    // add to cart action
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
