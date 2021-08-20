import css from './Header.module.css';
import mealImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <div>
      <header className={css.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={css['main-image']}>
        <img src={mealImg} alt="table full of food" />
      </div>
    </div>
  );
};

export default Header;
