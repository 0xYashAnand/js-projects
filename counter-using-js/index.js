
let count = 0;

let countEL = document.getElementById('count-el');

function increment() {
    count++;
    countEL.innerText = count;
}

function decrement() {
  count--;
  countEL.innerText = count;
}

let saveEL = document.getElementById("save-el");

var i = 0;
function save(){
   let temp = i + " -> " + count + " ";
   saveEL.textContent += temp;
   count = 0;
   countEL.textContent = 0;
   i++;
}