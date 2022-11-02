let canvasc = document.querySelector("#circleSquare")
let context = canvasc.getContext("2d")

//Cor do círculo
context.strokeStyle = "#000075"

//Formula do círculo & Medida da circunferência
context.beginPath()
context.arc(250,210,100,0,2*Math.PI)
context.stroke()

//Quadrado
context.fillStyle = "#4874cc"
context.fillRect(185, 145, 130, 130)

//Contorno do quadrado
context.strokeStyle = "#000075"
context.strokeRect(185, 145, 130, 130)