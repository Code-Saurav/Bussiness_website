import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from './Card';

// props can be named as anything
function ExpenseItem(props) {
 
  // const day = 34;
  // const year = 1994;
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
