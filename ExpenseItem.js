import React,{ useState } from 'react';
import './Expense.css';
import Card from './card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    const [title,sett]=useState(props.title);
    const [amount,seta]=useState(props.amount);
 function clickexpense(){
    seta('100');
    console.log(amount);
 }
function clickHandler(){
    
    sett('update');
    console.log(title);
    clickexpense();
 } 
    return( 
        <Card className='expense-item'>
  <ExpenseDate date={props.date}></ExpenseDate>
   <div className='expense-item__description'>
    <div className='expense-item h2'>{title}</div>
<div className='expense-item__price'>${amount}</div>

   </div>
   <button onClick={clickHandler}>Delete Expense</button>
   </Card>
    );
}
export default ExpenseItem;