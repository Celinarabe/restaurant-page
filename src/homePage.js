
function onload(){



let page = document.getElementById("content");

//clear existing content
page.innerHTML='';

let restaurantTitle = document.createElement('h1');
restaurantTitle.innerHTML = "The Arctic Cafe";

let description = document.createElement('p');
description.innerHTML = "The Arctic Cafe is an arctic-themed restaurant chain that offers sumptuous food and cool shade among the frosty icebergs of this unique eco-system. Come on down and have a try!";

let image = document.createElement('img');
image.src = "/img/boat.jpg";

let items = [restaurantTitle, description, image]

appendChildren(page, items);
}



function appendChildren (parent, children){
  children.forEach(element => {
    parent.appendChild(element);
  })
  }


  export {
    onload
  };
