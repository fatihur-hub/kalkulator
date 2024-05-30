let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += ` ${operator} `;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
   result.value = 'Anda Goblok!'
}
