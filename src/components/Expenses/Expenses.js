import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => ( 
        <ExpenseItem
          key = {expense.id} // Important while dealing with the lists and map
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* Map takes a function and apply that function of the every element in the array */}
    </Card>
  );
};

export default Expenses;
