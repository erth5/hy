/*own jQuery selector
  $ as selector over all
  $f as selector to select first element
 */

let $ = function (object) {
    return document.querySelectorAll(object);
};
let $f = function (object) {
    return document.querySelector(object);
};
let reta = "function.js success";
console.log(reta);

