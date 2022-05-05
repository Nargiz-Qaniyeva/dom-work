
const names = Array.from(document.querySelectorAll(".list-group-item"));

const filterName=arr1.concat(arr2.filter(value => !arr1.includes(value)));
// filterNames.forEach((element) => {
//   ul.innerHTML += `<li class="list-group-item">${element.innerHTML}</li>`;
// });
document.querySelector(".filter-name-list").appendChild(ul);

const name = Array.from(document.querySelectorAll(".filter-name-list"));
let repeatelement = function(filter, n){
   var arr = [];

   for (var i = 0; i <= n; i++) {
       arr = arr.concat(filter);
   };

   return arr;
 let ul = document.createElement("ul");
document.querySelector().appendChild(ul);
};