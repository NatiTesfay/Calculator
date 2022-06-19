let holder = document.getElementById('holderScreen');
function display(num){
    holder.value += num;
}

function calculate() {
 try{
    holder.value =eval (holder.value)
}
catch {
holder.value = 'error';

}}

del.onclick() = function clear() {
    holder.value = '';
}

