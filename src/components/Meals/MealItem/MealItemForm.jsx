import { useState, useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from './../../../store/cart-context';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [formQty, setFormQty] = useState(1);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmountIsValid(true);

    // isitikinti kad ivesta reiksme yra tap 1 ir 5 ir siusti tik tada kai reiksme tinkama
    if (formQty.trim().length === 0 || +formQty < 1 || +formQty > 5)
      return setAmountIsValid(false);
    console.log('ivest', formQty);

    cartCtx.addItem({ id: 'c1', name: 'sushi', amount: 2, price: 12.99 });
  };

  const inputValueHandler = (e) => {
    setFormQty(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Input
        onChange={inputValueHandler}
        value={formQty}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          // min: 1,
          // max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
