let elCodeInput = document.getElementById('code-input');
let elCodeOutput = document.getElementById('display-output');
let elRunBadCode = document.getElementById('run-code');

let value = '';

let handleChange = (e) => {
    value = e.target.value;
    console.log('event', e);
};

let handleClick = () => {
    elCodeOutput.innerHTML = value;
};

elCodeInput.addEventListener('change', handleChange);
elRunCode.addEventListener('click', handleClick);

console.log(elCodeOutput);
console.log(elCodeInput);

function mergeConflict() {

    return 'Value';
}