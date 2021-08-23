import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnBumpAdded, setBtnBumpAdded] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce(
    (total, currObj) => total + currObj.amount,
    0
  );
  console.log('cart items', cartCtx.items);

  const btnClasses = `${classes.button} ${btnBumpAdded ? classes.bump : ''}`;

  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnBumpAdded(true);
    const timerBump = setTimeout(() => {
      setBtnBumpAdded(false);
      return () => {
        clearTimeout(timerBump);
      };
    }, 300);
  }, [items]);
  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
