
function loadContact(){
  let page = document.getElementById("content");

  //clear existing content
  page.innerHTML='';

  
  let contactTitle = document.createElement('h1');
  contactTitle.innerHTML = "Contact Us";
  
  let description = document.createElement('p');
  description.innerHTML = "We are currently taking reservations for Christmas Day";
  
  let image = document.createElement('img');
  image.src = "img/polarBear.jpg";
  
  let items = [contactTitle, description, image]
  
  appendChildren(page, items);
  }
  
  
  
  function appendChildren (parent, children){
    children.forEach(element => {
      parent.appendChild(element);
    })
    }
  
  
    export {
      loadContact
    };
  