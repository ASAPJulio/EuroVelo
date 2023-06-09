// document.querySelector('#open-menu').addEventListener('click', () => {
//   const aside = document.querySelector('aside')
//   const toggle = aside.classList.toggle('active')
//   const openMenu = document.querySelector('#open-menu')
//   console.log(toggle)
//   if (toggle) {
//     openMenu.src = '/assets/images/close.png'
//   } else {
//     openMenu.src = '/assets/images/menu-burger.png'
//   }
// })

/////////////////////////////////////////////////////////////////////////////////////////

// const menuBurger = document.querySelector('ti-menu');
// const sidebar = document.querySelector('sidebar');

// menuBurger.addEventListener('click', () => {
//   sidebar.classList.toggle('active');
// });



const burgerMenu = document.querySelector('.ti-menu');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sideClose');


burgerMenu.addEventListener('click', function() {
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'flex';
    sidebar.classList.toggle('active');
  } else {
    sidebar.style.display = 'none';
  }

});

closeBtn.addEventListener('click', function() {
  if (sidebar.style.display === 'flex') {
    sidebar.style.display = 'none'; 
  } else {
    sidebar.style.display = 'flex';
  }
});