buttons = document.querySelectorAll('button')
hello = document.querySelector('#hello')
selector = document.querySelector('#colors')

buttons.forEach(button => {
    button.onclick = () => {
        hello.style.color = button.dataset.color
        hello.innerHTML = button.dataset.text

    }
});

selector.onchange = function () {
    hello.style.color = this.value
}