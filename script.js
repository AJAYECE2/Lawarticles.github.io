// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.querySelector('.menu-icon');
//     const menuList = document.querySelector('.menu-list');

//     menuIcon.addEventListener('click', function() {
//         menuList.classList.toggle('show');
//     });
// });

// Toggle menu list visibility
// document.getElementById('menu-icon').addEventListener('click', function() {
//     var menuList = document.getElementById('menu-list');
//     if (menuList.style.display === 'none') {
//         menuList.style.display = 'block';
//     } else {
//         menuList.style.display = 'none';
//     }
// });


// Toggle menu list visibility
document.getElementById('menu-icon').addEventListener('click', function() {
    var menuList = document.getElementById('menu-list');
    menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
});

// Close menu list when clicking outside
document.addEventListener('click', function(event) {
    var menuList = document.getElementById('menu-list');
    var menuIcon = document.getElementById('menu-icon');
    if (menuList.style.display === 'block' && event.target !== menuList && event.target !== menuIcon) {
        menuList.style.display = 'none';
    }
});

