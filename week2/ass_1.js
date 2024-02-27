//Create a counter in JavaScript

let counter=0;

function incrementCounter(){
    counter ++;
    console.log(counter);
}

const interval = setInterval(incrementCounter,100);

setTimeout(() => {clearInterval(interval)},1000)