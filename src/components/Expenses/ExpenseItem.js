import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// props can be named as anything
const ExpenseItem = (props) => {
 


  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} /> 
      {/* Pass date to the ExpenseDate.js as props date only  */}
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}7</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
