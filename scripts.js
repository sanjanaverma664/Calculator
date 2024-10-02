const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button input');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === 'AC') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value) || 0;
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});
