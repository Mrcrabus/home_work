window.addEventListener('load', function () {

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let opt = document.querySelector('.select')


    // opt.addEventListener('change', () => console.log(opt.value))

    btn.addEventListener('click', solve)

    function solve() {

        res.innerHTML = {
            '+': parseInt(inp1.value) + parseInt(inp2.value),
            '-': parseInt(inp1.value) - parseInt(inp2.value),
            '/': parseInt(inp1.value) / parseInt(inp2.value),
            '*': parseInt(inp1.value) * parseInt(inp2.value)
        }[opt.value]

    }


});






