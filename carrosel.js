const carrosel2 = document.querySelector('.carrosel2')

let pressed = false
let startX = 0

//addEventListener('mouse...') -> MouseEvent
//permitem ativar uma função quando houver alteração por clique

carrosel2.addEventListener('mousedown', function (e) {
  //função quando pressiona
  pressed = true
  startX = e.clientX
})

wrapper.addEventListener('mousemove', function (e) {
  //função quando movimenta
  if (!pressed) {
    return
  }
  this.scrollLeft += startX - e.clientX
})