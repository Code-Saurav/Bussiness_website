import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react'; // allow to define value as a use state and reuse

// props can be named as anything
const ExpenseItem = (props) => {
 
  // const day = 34;
  // const year = 1994;
  const [title, setTitle] = useState(props.title);  // first: pointer at the value second: function to set new title. Use state always return an array . 

  //function that get activated on button click 
  const clickHandler = ()=>{
    setTitle('updated');
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} /> 
      {/* Pass date to the ExpenseDate.js as props date only  */}
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${props.amount}7</div>
      </div>
      <button onClick  = {clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
