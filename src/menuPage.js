import penguinoImage from './img/penguin.jpeg';

function loadMenu(){
  let page = document.getElementById("content");

  //clear existing content
  page.innerHTML='';

  
  let menuTitle = document.createElement('h1');
  menuTitle.innerHTML = "Our Menu";
  
  let description = document.createElement('p');
  description.innerHTML = "Our menu rotates seasonally. Check back often for our newest dishes.";
  
  let image = document.createElement('img');
  image.src = penguinoImage;
  
  let items = [menuTitle, description, image]
  
  appendChildren(page, items);
  }
  
  
  
  function appendChildren (parent, children){
    children.forEach(element => {
      parent.appendChild(element);
    })
    }
  
  
    export {
      loadMenu
    };
  