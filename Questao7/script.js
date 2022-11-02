function start() {
    canvas = document.querySelector("#circle")
    context = canvas.getContext("2d")
    make_base()
    return setInterval(update, 10)
}
window.addEventListener('keydown',keyDown,true)
start()
let dx = 5 //Velocidade horizontal do círculo
let dy = 5 //Velocidade vertical do círculo
let x = 300 //Posição horizontal inicial do círculo
let y = 300 //Posição vertical inicial do círculo
let WIDTH = 600 //Largura área quadrado
let HEIGHT = 600 //Altura área quadrado

//Cria a imagem
function make_base()
{
  base_image = new Image();
  base_image.src = 'img/miranha.png'
  base_image.onload = function(){
    context.drawImage(base_image, x, y)
  }
}

//Função para limpar a tela quando o círculo andar
function clearScreen() {
    context.fillStyle = "#242424"
    context.strokeStyle = "#242424"
    context.beginPath()
    context.rect(0, 0, WIDTH, HEIGHT)
    context.closePath()
    context.fill()
    context.stroke()
    context.drawImage(base_image, x/2, y/2) 
}

//Função de movimentação do círculo
function keyDown(evt){
    switch (evt.keyCode) {
        case 38:  //Seta para cima
            if (y - dy > 0){
                y -= dy
            }
            break
        case 40:  //Seta para baixo
            if (y + dy < HEIGHT){
                y += dy
            }
            break
        case 37:  //Seta para esquerda
            if (x - dx > 0){
                x -= dx
            }
            break
        case 39:  //Seta para direita
            if (x + dx < WIDTH){
                x += dx
            }
            break
    }
}

function update() {
    clearScreen() 
}