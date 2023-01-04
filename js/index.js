let input = "";

let buttons = document.querySelectorAll('.btns');

Array.from(buttons).forEach((button) => {

    button.addEventListener('click', (pressed) => {
        console.log(pressed.target);
        if (pressed.target.innerHTML == '=') {
            try {

                input = eval(input);
                document.querySelector('input').value = input;
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                    input = " ";
                    document.querySelector('input').value = input;
                }
            }
        }
        else if (pressed.target.innerHTML == 'C') {
            input = " ";
            document.querySelector('input').value = input;
        }
        else {
            input = input + pressed.target.innerHTML;
            document.querySelector('input').value = input;
        }
    })
})

