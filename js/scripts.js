window.addEventListener('load', function () {

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let opt = document.querySelector('.select')

    btn.disabled = true
    inp1.value = '0'
    inp2.value = '0'


    inp1.addEventListener('click', checkInput)
    inp2.addEventListener('click', checkInput)
    btn.addEventListener('click', solve)
    opt.addEventListener('click', () => {
        btn.disabled = false
    })

    function checkInput() {

        btn.disabled = false
        this.value = ''
        setInputFilter(this, function (value) {
            return /^-?\d*$/.test(value);
        });


    }


    function solve() {

        res.innerHTML = {
            '+': parseInt(inp1.value) + parseInt(inp2.value),
            '-': parseInt(inp1.value) - parseInt(inp2.value),
            '/': parseInt(inp1.value) / parseInt(inp2.value),
            '*': parseInt(inp1.value) * parseInt(inp2.value)
        }[opt.value]
        btn.disabled = true
    }


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






