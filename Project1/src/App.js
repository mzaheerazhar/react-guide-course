import React, { useState } from "react";
import Expenses from "./components/ExpenseData/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  
  const dummy = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [newExpenseList, setNewExpenseList] = useState(dummy);
  const addExpenseDataHandler = (expense) => {
    setNewExpenseList((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseDataHandler} />
      <Expenses items={newExpenseList} />
    </div>
  );
}

export default App;
