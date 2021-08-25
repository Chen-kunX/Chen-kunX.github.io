let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('输入你的名字：');
    if(myName == null || !myName){
        alert('名字不许为空哦！');
        setUserName();
    }else {
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hello!' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else { 
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I love you ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
