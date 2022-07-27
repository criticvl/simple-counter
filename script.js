let count_number = 0
let count_element = document.getElementById('counter')

function increment() {
    count_number = count_number + 1
    count_element.textContent = count_number
}

function decrement() {
    count_number = count_number - 1
    count_element.textContent = count_number
}

function clear_n() {
    count_number = 0
    count_element.textContent = 0
}

function save_n() {
    document.getElementById('num-list').appendChild(document.createElement('li')).textContent = count_number + ", "
}