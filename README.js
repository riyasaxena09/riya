import { useState } from 'react';
import './ExpenseForm.css';
function Add(){
    function show(e){
        e.preventDefault();
       
const obj={
    Title:to,
    Amount:am,
    Date:new Date(dat)
}
console.log(obj)

    }
    const [am,seta]=useState('');
    const [to,sett]=useState('');
    const [dat,setd]=useState('');
    function updatea(e){
      seta(e.target.value);
//console.log(am)
    }
    function updatet(e){
        sett(e.target.value);
     //  console.log(to)
      }
      function updated(e){
        setd(e.target.value);
       // console.log(dat)
      }
    return (
        
            <form onSubmit={show}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control input'>

<label>Title
    <input id="t" type="text" onChange={updatet}></input>
</label>

</div>
<div className='new-expense__control input'>
<label>Amount
    <input id="a" type="number" onChange={updatea}></input>
</label>
</div>
<div className='new-expense__control input'>
<label>Date
    <input id="d" type="date" onChange={updated}></input>
</label>
</div>
<div className='new-expense__actions'>
<button>ADD Expense</button>
</div>
</div>
</form>

    );
}
export default Add;
