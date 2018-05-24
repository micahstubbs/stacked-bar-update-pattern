window.activeDropdown = {}
function dropdownFunction() {
    if (
      window.activeDropdown.id &&
      window.activeDropdown.id !== event.target.id
    ) {
      window.activeDropdown.element.style.visibility = 'hidden'
    }
    //checking if a list element was clicked, changing the inner button value
    if (event.target.tagName === 'LI') {
      window.activeDropdown.button.innerHTML = event.target.innerHTML
    }
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].classList.contains('dropdown-selection')) {
        window.activeDropdown.id = this.id
        window.activeDropdown.element = this.children[i]
        this.children[i].style.visibility = 'visible'
      } else if (this.children[i].classList.contains('dropdown-button')) {
        //adding the dropdown-button to our object
        window.activeDropdown.button = this.children[i]
      }
    }
  }
document
  .getElementById('datasets-dropdown')
  .addEventListener('mouseover', dropdownFunction)
  // .addEventListener('click', dropdownFunction)

window.onclick = function(event) {
  if (
    !event.target.classList.contains(
      'dropdown-button' && typeof window.activeDropdown.element !== 'undefined'
    )
  ) {
    window.activeDropdown.element.style.visibility = 'hidden'
  }
}
