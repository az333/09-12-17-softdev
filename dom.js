var changeBack = function() {document.getElementById("h").innerHTML = "Hello World!"; }; 

document.getElementById("thelist").addEventListener("mouseout", changeBack);

var add = function (){
    var linode = document.createElement("LI");
    var node = document.createTextNode("new element");
    linode.appendChild(node);
    document.getElementById('thelist').appendChild(linode);
};

document.getElementById('b').addEventListener('click', add);


var change = function(element){
    document.getElementById('h').innerHTML = this.innerHTML;
};


var mouses = function(){
    var liElements = document.getElementsByTagName('li');
    for (element = 0; element < liElements.length; element++){
	liElements[element].addEventListener('mouseout', change);
    };
};

mouses();

