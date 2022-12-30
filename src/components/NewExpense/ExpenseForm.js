import React from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
  return (
    <form className = "new-expense__form">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label > Title</label>
          <input type="text" />
        </div> 
        {/* end of the new-expense__control */}

        <div className="new-expense__control">
          <label > Amount</label>
          <input type="number" min = "0.01" step = "0.01" />
        </div> 
        {/* end of the new-expense__control */}

        <div className="new-expense__control">
          <label > Title</label>
          <input type="date" min = "2019-01-01" max = "2022-12-31" />
        </div> 
        {/* end of the new-expense__control */}

      </div>
      {/* end of the new-expense__controls */}

      <div className="new_expense__actions">
          <button type = "submit"> Add Expense</button>
      </div>
      
    </form>
  )
}
export default ExpenseForm;
