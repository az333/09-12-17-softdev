

var listnorm = document.getElementById("thelist").getElementsByTagName("li");
var listfib = document.getElementById("fib").getElementsByTagName("li");

var addNormal = function (e){
  var node;
  var linode = document.createElement("LI");
  node = document.createTextNode("item " + listnorm.length);
  linode.appendChild(node);
  addEL(linode);
  document.getElementById("thelist").appendChild(linode);
};

var addFib = function (e){
  var node;
  var linode = document.createElement("LI");
  console.log(listfib.length);
  console.log(fibonacci(listfib.length ));
  node = document.createTextNode("" + fibonacci(listfib.length));
  linode.appendChild(node);
  addEL(linode);
  document.getElementById("fib").appendChild(linode);
};

document.getElementById('b').addEventListener('click', addNormal);
document.getElementById('fb').addEventListener('click', addFib);


var change = function(element){
    document.getElementById('h').innerHTML = this.innerHTML;
};

var changeBack = function() {
  document.getElementById("h").innerHTML = "Hello World!";
};

var remove = function () {
  this.remove();
}

var fibonacci = function(n){
  if(n < 2) return 1;
  else return (fibonacci(n-1) + fibonacci(n-2));
};

console.log (fibonacci(1));


var addEL = function(element) {
  element.addEventListener('mouseover', change);
  element.addEventListener("mouseout", changeBack);
  element.addEventListener("click", remove);
}

var mouses = function(){
    for (element = 0; element < listnorm.length; element++){
      addEL(listnorm[element]);
    };
    for (element = 0; element < listfib.length; element++){
      addEL(listfib[element]);
    };
};

mouses();
