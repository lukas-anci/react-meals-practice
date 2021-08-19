import './App.css';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/Meals/MealsSummary';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </div>
  );
}

export default App;
