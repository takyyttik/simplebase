
// TOGGLE MENU

const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');

toggleMenuButton.onclick = function() {
    if (toggleMenu.getAttribute('data-menustate') === 'closed') {
      // if closed, open it    
      toggleMenu.setAttribute('data-menustate','open');
    } else {
      // else, close it
      toggleMenu.setAttribute('data-menustate','closed');
    }
};