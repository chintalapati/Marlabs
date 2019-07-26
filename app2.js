// // var a = document.getElementById("h1");
// // a.innerHTML = "hello";
// // console.log(h1);

// // var div_elem = document.getElementsByClassName("div");

// // for(var i=0; i<div_elem.length; i++) {
// //     div_elem[i].innerHTML = "updated" +i;
// // }

// // var elems = document.querySelectorAll("div[id^= 'div_']");
// // console.log(elems);
// //document.getElementById('cntr').innerHTML = "<h1>Welcome Everyone!!</h1>";

// // var elem = document.createElement("div");
// // elem.innerHTML= "hello";
// // console.log(elem);

// function clickFn() {
//     alert("This is acustom alert message!!");
// }

// document.getElementById("btn").addEventListener("click", clickFn);

// document.getElementById("remove").addEventListener("click", function(){
//     document.getElementById("btn").removeEventListener("click",clickFn);
// });

// document.getElementById("a_elem").addEventListener("click",function(event){
//     event.preventDefault();
//     alert("Hello");
// });

// document.getElementById("div1").insertAdjacentHTML("beforebegin", "<h1>Before Content</h1>");
// document.getElementById("div1").insertAdjacentHTML("afterbegin","<h1>After content</h1>");
// document.getElementById("div1").insertAdjacentHTML("beforeend","<h1>Before End </h1>");
// document.getElementById("div1").insertAdjacentHTML("afterend", "<h1>After End </h1>");

//Storage

//local storage
//session storage
// localStorage.username = "SeshaChintalapati";
// console.log(localStorage.getItem("username"));

// localStorage.setItem("org","Marlabs");
// localStorage.removeItem("org");

var obj = [
    {
        "user_id":1,
        "username":"User 1"
    },
    {
        "user_id":2,
        "username":"user 2"
    }
];

localStorage.setItem("users", JSON.stringify(obj));

console.log(JSON.parse(localStorage.getItem("users")));