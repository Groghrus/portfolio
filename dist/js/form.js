// валидация формы

let inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs) {
    input.addEventListener('blur', function () {
      let rule = this.dataset.rule;
      let value = this.value;
      let check;

        switch (rule) {
            case 'name':
                check = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(value);
                break;
            case 'email':
                check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
                break;
        }
        this.classList.remove('invalid');
        this.classList.remove('valid');
        if (check){
            this.classList.remove('line-bottom');
            this.classList.add('valid');
        } else {
            this.classList.remove('line-bottom');
            this.classList.add('invalid');
        }

    });
}











