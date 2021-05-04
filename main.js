/*
This exercise is to understand how can we pass placeholder/ argument inside the function reference of addEventListener.
We all know the thumb rule , that inside addEventListner, we can only pass function reference not function call.

So,  the way to pass argument and not cause error is that, we must create function defination , may be annonymous function and inside that pass the function call of eventhandler with parameter, ass we can observe on line no 31 


*/
const COLOR = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "navy",
    "brown",
    "wheat",
    "aqua",
]

// let heading = document.querySelector(".heading");
// let boxContainer = document.querySelector(".box-container");

// COLOR.forEach((color) => {
//     let div = document.createElement("div");
//     div.classList.add("box");
//     div.style.backgroundColor = color;
//     div.setAttribute("data-color", color);

//     div.addEventListener("click", function(event){
//         // console.log(event);
//         handleBox(color,event);
//     } );

//     boxContainer.append(div);
// })


// function handleBox(colorText,e){
//     if (e.shiftKey === true) {
//         heading.innerText = colorText;
//         heading.style.backgroundColor = colorText;
//     }
    
// }


// // event delegation - means giving responsibility to take charge of events to the parents. for example here, div with the class "box" are the childrens and box with the calss "box-container" is parent of children. So, becuase of bubbling effect , whenever event is over it bubbles out to its parent node. Hence, whenever any event will happen on div with class "box" it will bubble out to parent's and can be handled through it. This, will reduce the no. of events when childrens strength is more.

// function handleEvent(event){
//     console.log("delegation :", event.target);
//     let color = event.target.dataset.color;
//     heading.innerText = color;
//     heading.style.backgroundColor = color;
// }

// boxContainer.addEventListener("click",handleEvent);




let boxContainer = document.querySelector(".box-container");
let h1 = document.querySelector(".heading");
COLOR.forEach(color => {
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = color;
    div.setAttribute("data-color", color);
    boxContainer.append(div);
})

function handleEvent(event){
    console.dir(event.target);
    let color = event.target.dataset.color;
    h1.innerText = color
    h1.style.backgroundColor = color;
}


boxContainer.addEventListener("click", handleEvent);