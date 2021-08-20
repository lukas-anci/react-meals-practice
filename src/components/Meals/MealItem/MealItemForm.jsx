import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useState } from 'react';

const MealItemForm = (props) => {
  const [formQty, setFormQty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ivest', formQty);
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
          min: 1,
          max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
