'use strict';

document.addEventListener('DOMContentLoaded', function () {
    {
        var toggleMenu = function toggleMenu() {
            if (!showMenu) {
                menuBtn.classList.add('close');
                menu.classList.add('show');
                menuNav.classList.add('show');
                menuLogo.classList.add('show');
                navItems.forEach(function (item) {
                    return item.classList.add('show');
                });

                showMenu = true;
            } else {
                menuBtn.classList.remove('close');
                menu.classList.remove('show');
                menuNav.classList.remove('show');
                menuLogo.classList.remove('show');
                navItems.forEach(function (item) {
                    return item.classList.remove('show');
                });

                showMenu = false;
            }
        };

        // menu button
        var menuBtn = document.querySelector('.menu-btn');
        var menu = document.querySelector('.menu');
        var menuNav = document.querySelector('.menu-nav');
        var menuLogo = document.querySelector('.menu-logo');
        var navItems = document.querySelectorAll('.nav-item');
        var showMenu = false;
        menuBtn.addEventListener('click', toggleMenu);
    }
});