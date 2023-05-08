let modal = document.querySelector('.modal')
let span = document.querySelector('.close')
let btn = document.querySelector('#myBtn')

btn.onclick = () => modal.style.display = 'block'

span.onclick = () => modal.style.display = 'none'
