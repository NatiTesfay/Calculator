let holder = document.getElementById('holderScreen');
function display(num){
    holder.value += num;
}

function calculate() {
 try{
    holder.value =eval (holder.value);
 }
catch(err)
{
    alert('BAD')
}
}

