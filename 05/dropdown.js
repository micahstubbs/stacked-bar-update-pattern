var activeDropdown = {};  
document.getElementById('datasets-dropdown').addEventListener('click',function(){  
  if (activeDropdown.id && activeDropdown.id !== event.target.id) {
    activeDropdown.element.style.visibility = 'hidden';
  }
  //checking if a list element was clicked, changing the inner button value
  if (event.target.tagName === 'LI') {
    activeDropdown.button.innerHTML = event.target.innerHTML;
  }
  for (var i = 0;i<this.children.length;i++){
    if (this.children[i].classList.contains('dropdown-selection')){
        activeDropdown.id = this.id;
        activeDropdown.element = this.children[i];
        this.children[i].style.visibility = 'visible';
     }
    //adding the dropdown-button to our object
    else if (this.children[i].classList.contains('dropdown-button')){
      activeDropdown.button = this.children[i];
    }
  }
});

window.onclick = function(event){  
  if (!event.target.classList.contains('dropdown-button')){
    activeDropdown.element.style.visibility = 'hidden';
  }
}