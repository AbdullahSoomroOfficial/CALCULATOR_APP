const zero = document.querySelector('.item-14');
const one = document.querySelector('.item-11');
const two = document.querySelector('.item-10');
const three = document.querySelector('.item-9');
const four = document.querySelector('.item-5');
const five = document.querySelector('.item-6');
const six = document.querySelector('.item-7');
const seven = document.querySelector('.item-1');
const eight = document.querySelector('.item-2');
const nine = document.querySelector('.item-3');
const period = document.querySelector('.item-13');
const divide = document.querySelector('.item-4');
const mutltiply = document.querySelector('.item-8');
const minus = document.querySelector('.item-12');
const plus = document.querySelector('.item-16');
const equalTo = document.querySelector('.item-15');
const screen = document.querySelector('.item-0');
const clearScreen = document.querySelector('.item-17');


const buttons = [zero, one, two, three, four, five, six, seven, eight, nine, period, divide, mutltiply, minus, plus];

buttons.forEach(function(element) {
    element.addEventListener('click', function() {
        const value = this.innerText;
        screen.innerText += value;
    })
})