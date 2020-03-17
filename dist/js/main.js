document.addEventListener('DOMContentLoaded', () => {

    {
        // menu button
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');
        const menuNav = document.querySelector('.menu-nav');
        const menuLogo = document.querySelector('.menu-logo');
        const navItems = document.querySelectorAll('.nav-item');

        let showMenu = false;

        menuBtn.addEventListener('click', toggleMenu);

        function toggleMenu() {
            if (!showMenu) {
                menuBtn.classList.add('close');
                menu.classList.add('show');
                menuNav.classList.add('show');
                menuLogo.classList.add('show');
                navItems.forEach(item => item.classList.add('show'));

                showMenu = true;
            } else {
                menuBtn.classList.remove('close');
                menu.classList.remove('show');
                menuNav.classList.remove('show');
                menuLogo.classList.remove('show');
                navItems.forEach(item => item.classList.remove('show'));

                showMenu = false;
            }
        }

    }

   /* {
        //form
        //валидация формы

        let inputEmail = document.querySelector('.input__email');
        let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        inputEmail.onblur = function () {
            let test = inputEmail.value.length === 0 || emailRegExp.test(inputEmail.value);
            if (!test){
                inputEmail.classList.add('invalid');
                inputEmail.classList.remove('line-bottom');
            }
        };
        inputEmail.onfocus = function () {
            if (this.classList.contains('invalid')){
                this.classList.remove('invalid');
            }
        };


    }*/

});