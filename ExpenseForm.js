function Add(){
    function show(e){
        e.preventDefault();
let T=document.getElementById("t").value;
console.log(T);
let A=document.getElementById("a").value;
console.log(A);
let D=document.getElementById("d").value;
console.log(D);
    }
    return (
        <div>
            <form>
<h1>Add Expense</h1>
<label>Title
    <input id="t" type="text"></input>
</label>
<label>Amount
    <input id="a" type="number"></input>
</label>
<label>Date
    <input id="d" type="date"></input>
</label>
<button onClick={show}>ADD Expense</button>
</form>
</div>
    );
}
export default Add;