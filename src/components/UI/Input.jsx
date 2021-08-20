import classes from './Input.module.css';

const Input = ({ label, input, value, onChange }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input value={value} onChange={onChange} {...input} />
    </div>
  );
};

export default Input;
