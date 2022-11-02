let canvast = document.querySelector("#triangle")
let ctx = canvast.getContext("2d")

//Retângulo em volta
ctx.fillStyle = 'white'
ctx.strokeStyle = "#000075"
ctx.strokeRect(5, 65, 300, 200)

//Função para criar o triângulo
function drawTriangle() { 

    //Formula do triângulo
    let height = 200 * Math.cos(Math.PI / 3)

    //Medida dos lados do triângulo
    ctx.beginPath();
    ctx.moveTo(100, 220)
    ctx.lineTo(220, 220)
    ctx.lineTo(160, 220 - height)
    ctx.closePath()

    //Cor do triângulo
    ctx.fillStyle = "#4874cc"
    ctx.fill()
}
drawTriangle()