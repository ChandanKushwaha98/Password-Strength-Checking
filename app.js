const password = document.getElementById('password');
const background = document.getElementById('background');
const heading = document.getElementById('heading');
const formDiv = document.getElementById('form-div');
const hrow = document.getElementById('hrow');
password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2
    var hueValue = (1 - (1 - .15 * length)) * 120
    if (hueValue >= 120) {
        hueValue = 120
    }
    background.style.filter = `blur(${blurValue}px)`
    //reference
    hrow.style.border = `5px solid hsl(${hueValue}, 100%, 50%)`
    hrow.style.backgroundColor = `hsl(${hueValue}, 100%, 50%)`

})