let holder = document.getElementById('holderScreen');
function display(num){
    holder.value += num;
}

function calculate() {
 if(holder.value =eval (holder.value)){
    alert('yes');
 }
}

function clear() {
    holder.value = '';
}

