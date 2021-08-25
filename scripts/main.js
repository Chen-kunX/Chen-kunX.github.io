let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('输入你的名字：');
    if(myName == null || !myName){
        setUserName();
    }else {
    localStorage.setItem('name',myName);
    myHeading.textContent = '666 my bro:' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '666 my bro: ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}