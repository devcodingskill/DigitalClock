let hrs =document.querySelector("#hrs");
let mins =document.querySelector("#mins");       
let secs =document.querySelector("#secs");

let currentTime = new Date();

// console.log(currentTime);
setInterval(() => {
    currentTime = new Date();
    hrs.innerHTML = currentTime.getHours()<10 ? "0" + currentTime.getHours() : currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes()<10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes();
    secs.innerHTML = currentTime.getSeconds()<10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds();
}, 1000);


