let elCodeInput = document.getElementById('code-input');
let elCodeOutput = document.getElementById('display-output');
let elRunBadCode = document.getElementById('run-code');

let value = elCodeInput.value;
let correct;

let handleChange = (e) => {
    value = e.target.value;
};

function testFunc() {
    console.log('test func')
    console.log(value)
    return value
}

let handleClick = () => {
    let func = document.createElement('script');
    func.innerHTML = value;
    elCodeInput.appendChild(func);
    let testCat = reverseString('cat');
    let testOne = document.createElement('div');
    elCodeOutput.appendChild(testOne);
    let testDog = reverseString('dog');
    let testTwo = document.createElement('div');
    elCodeOutput.appendChild(testTwo);
    let testCoding = reverseString('coding');
    let testThree = document.createElement('div');
    elCodeOutput.appendChild(testThree);

    if(testCat !== 'tac') {
        testOne.innerHTML = `expected "tac" but got "${testCat}", Try again`;
        correct = false;
    } else {
        testOne.innerHTML = `expected "tac" and got "${testCat}", Great Work!`;
        correct = true;
    }
    if(testDog !== 'god') {
        testTwo.innerHTML = `expected "god" but got "${testDog}", Try again`;
        correct = false;
    } else {
        testTwo.innerHTML = `expected "god" and got "${testDog}", Great Work!`;
        correct = true;
    }
    if(testCoding !== 'gnidoc') {
        testThree.innerHTML = `expected "gnidoc" but got "${testCoding}", Try again`;
        correct = false;
    } else {
        testThree.innerHTML = `expected "gnidoc" and got "${testCoding}", Great Work!`;
        correct = true;
    }

    let result = document.createElement('div');
    elCodeOutput.appendChild(result);
    if(correct === true) {
        result.innerHTML = 'You did it!  You\'re like a real coder!';
    } else {
        result.innerHTML = 'Not quite there, but keep trying!';
    }

};

elCodeInput.addEventListener('change', handleChange);
elRunCode.addEventListener('click', handleClick);
