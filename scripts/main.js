// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'hello world';

// document.querySelector('html').onclick = function(){
//     alert('别戳了');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mysrc = myImage.getAttribute('src');
    if (mysrc === './images/5758y8.png') {
        myImage.setAttribute('src', './images/281d5y.png');
    }
    else {
        myImage.setAttribute('src', './images/e7ek7k.png')
    }
}

let myButton = document.querySelector('button')
let myHead = document.querySelector('h1')

function setUserName(){
    let myName = prompt('请输入你的名字')
    localStorage.setItem('name', myName)
    myHead.textContent = myHead.textContent + myName
}

if (!localStorage.getItem('name')){
    setUserName()
}
else {
    myHead.textContent = myHead.textContent + localStorage.getItem('name')
}

myButton.onclick = function(){
    setUserName()
}
