import './Expense.css';
import Card from './card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
function clickHandler(){
    console.log("clikc");
 } 
    return( 
        <Card className='expense-item'>
  <ExpenseDate date={props.date}></ExpenseDate>
   <div className='expense-item__description'>
    <div className='expense-item h2'>{props.title}</div>
<div className='expense-item__price'>${props.amount}</div>

   </div>
   <button onClick={clickHandler}>Delete Expense</button>
   </Card>
    );
}
export default ExpenseItem;