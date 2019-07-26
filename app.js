var username = "Marlabs";
var phone = 1234556;
var active = true;

var var_type = typeof(username);
console.log();

 function fn() {
    var str = "hello " +arguments[0]+ " and I work for " +arguments[1];
    console.log(str);
    return str;
}
var resp = fn("sesha", "marlabs");
console.log(resp);
var fn = function() {
    console.log("hello");
}
console.log(fn());
function fn(user){
    console.log("Hello " +user());
}
var fn2 = function( ) {
    return "arun";
}
fn(fn2);
var a = "hello fellow";
a = a.replace(/hello/g, "bolo");
console.log(a);
(function a() {
    console.log("hello");
}) 
();
function f(){
    console.log("Hello");
}
setTimeout(f,2000);
var cnt = 0;
function f(){
    ++cnt;
    console.log(cnt);
}
setInterval(f,1000);
var cntr = 0;
var interval = setInterval(function() {
    ++cntr;
    console.log(cntr);
 },1000);
 clearInterval(interval);
var cntr = 0;

var interval = setInterval(function(){
    ++cntr;
    console.log(cntr);
},1000);

setTimeout(function(){
    clearInterval(interval)
},5000);
var obj = {
    "username" : "sesha",
    "company"  : "Marlabs",
    "Location" : "Piscataway"
};
for(var key in obj){
    console.log(obj[key]);
}
var resp = JSON.stringify(obj);
console.log(JSON.parse(resp));
var obj = {
    "username" : "sesha",
    "org" : "Marlabs",
    "loc" : "piscataway",
    "addr" : {
        "city" : "edison",
        "state" : "NJ",
        "country" : "US"
    }
};
var obj2 = Object.assign({},obj);
var obj2 = obj;

obj2.addr.city = "sneha";

console.log(obj);
console.log(obj2);
var obj = {
    "username" : "sesha",
    "org" : "marlabs",
    "loc" : "piscataway",
    "addr" : {
        "city" : "Edison",
        "state": "NJ",
        "country" : "US"
    }
};
var obj2 = JSON.parse(JSON.stringify(obj));
//var obj2 = Object.assign({},obj);
obj2.addr.city = "nanda;"

console.log(obj);
console.log(obj2);