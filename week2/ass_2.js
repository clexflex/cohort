//Counter without setInterval

let counter=0;

function incrementCounter(){
    counter ++;
    console.log(counter);

// const interval = setInterval(incrementCounter,100);
// setTimeout(() => {clearInterval(interval)},1000)
//to do the above we can use the if condition and setTimout Function

if (counter < 10){
    setTimeout(incrementCounter,1000);
}
}
incrementCounter();

