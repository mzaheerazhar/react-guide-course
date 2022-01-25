import React, { useState } from "react";
import Expenselist from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

import "./Expenses.css";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense}/>
      <Expenselist items={filteredExpense}/>
    </div>
  );
}

export default Expense;
