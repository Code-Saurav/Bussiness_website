//html code inside the jsx function :
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: "e2", title: "Auto", amount: 39.67, date: new Date(2019, 2, 28) },
  { id: "e3", title: "HairCut", amount: 2.67, date: new Date(2023, 4, 28) },
  { id: "e4", title: "Grocery", amount: 32.67, date: new Date(2022, 2, 28) },
  { id: "e5", title: "Laptop", amount: 32.67, date: new Date(2019, 3, 28) },
  { id: "e6", title: "Mobile", amount: 32.67, date: new Date(2019, 7, 28) },
  { id: "e7", title: "Airpods", amount: 32.67, date: new Date(2020, 10, 28) },
];

const App = (props) => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;

// Imperative approach : <p>This is also visible </p>
// const para = document.createElement('p');
// para.textContent = 'This is also visible';
// document.getElementById('root').append(para)
