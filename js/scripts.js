window.addEventListener('load', function () {

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let opt = document.querySelector('.select')

    btn.disabled = true


    inp1.addEventListener('keypress', checkInput)
    inp2.addEventListener('keypress', checkInput)
    btn.addEventListener('click', solve)
    opt.addEventListener('click', () => {
        btn.disabled = false
    })


    function solve() {

        res.innerHTML = {
            '+': parseInt(inp1.value) + parseInt(inp2.value),
            '-': parseInt(inp1.value) - parseInt(inp2.value),
            '/': parseInt(inp1.value) / parseInt(inp2.value),
            '*': parseInt(inp1.value) * parseInt(inp2.value)
        }[opt.value]
        btn.disabled = true
    }

    function checkInput(event) {
        btn.disabled = false
        this.addEventListener('focus', () => this.value = '')
        console.log(validate(event.target.value))

    }

    function validate(event) {
        let rgx = /^[0-9]+$/;
        return event.match(rgx)
    }

});






