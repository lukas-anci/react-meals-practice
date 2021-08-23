import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from './../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemHandler = (item) => {
    console.log('cartItemHandler', item);
  };
  const cartItemRemoveHandler = (id) => {
    console.log('cartItemRemoveHandler', id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        // Create CartItem component
        <CartItem
          key={item.id}
          // bind suteikia argumenta ka negalim jo prideti
          onAddItem={cartItemHandler.bind(null, item)}
          onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}
          {...item}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>
          Close
        </button>

        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
