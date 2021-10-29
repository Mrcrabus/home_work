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

    setInputFilter(inp1, function (value) {
        return /^-?\d*$/.test(value);
    });

    setInputFilter(inp2, function (value) {
        return /^-?\d*$/.test(value);
    });


    function solve() {

        res.innerHTML = {
            '+': parseInt(inp1.value) + parseInt(inp2.value),
            '-': parseInt(inp1.value) - parseInt(inp2.value),
            '/': parseInt(inp1.value) / parseInt(inp2.value),
            '*': parseInt(inp1.value) * parseInt(inp2.value)
        }[opt.value]
        btn.disabled = true
    }

    function checkInput() {

        btn.disabled = false
        this.addEventListener('focus', () => this.value = '')


    }


    // I don't know how this work
    function setInputFilter(textBox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textBox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    this.value = "";
                }
            });
        });
    }


});






