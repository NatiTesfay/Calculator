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
    alert('good')
}
}
function clear() {
    holder.value = "";
    
}

function del() {
    holder.value = holder.values.splice(0,-2);
}
