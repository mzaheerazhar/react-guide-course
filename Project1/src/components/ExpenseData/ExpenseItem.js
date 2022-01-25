import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const [title,setTitle]=useState(props.title);
  // const clickHandler=()=>{
  //   setTitle('Kesa lga');
  // }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>click</button> */}
    </div>
  );
}
export default ExpenseItem;
