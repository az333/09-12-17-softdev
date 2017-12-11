var list = document.getElementsByTagName("li");

var add = function (e){
    var linode = document.createElement("LI");
    var node = document.createTextNode("item " + list.length);
    linode.appendChild(node);
    addEL(linode);
    document.getElementById('thelist').appendChild(linode);
};

document.getElementById('b').addEventListener('click', add);

var change = function(element){
    document.getElementById('h').innerHTML = this.innerHTML;
};

var changeBack = function() {
  document.getElementById("h").innerHTML = "Hello World!";
};

var remove = function () {
  this.remove();
}

var addEL = function(element) {
  element.addEventListener('mouseover', change);
  element.addEventListener("mouseout", changeBack);
  element.addEventListener("click", remove);
}

var mouses = function(){
    for (element = 0; element < list.length; element++){
      addEL(list[element]);
    };
};

mouses();
