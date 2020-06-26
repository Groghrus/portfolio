'use strict';

// валидация формы

var inputs = document.querySelectorAll('input[data-rule]');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var input = _step.value;

        input.addEventListener('blur', function () {
            var rule = this.dataset.rule;
            var value = this.value;
            var check = void 0;

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
            if (check) {
                this.classList.remove('line-bottom');
                this.classList.add('valid');
            } else {
                this.classList.remove('line-bottom');
                this.classList.add('invalid');
            }
        });
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}