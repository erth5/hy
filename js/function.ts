/*own jQuery selector
  $a as selector over all
  $f as selector to select first element
 */

let $a = function (object) {
    return document.querySelectorAll(object);
};
let $f = function (object) {
    return document.querySelector(object);
};

let $i = function (object){
    return document.getElementById(object);
};
let $c =function (object){
    return document.getElementsByClassName(object);
};
console.log("JS: function.js ready");
