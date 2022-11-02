let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

//Laço de repetição para multiplicar a as figuras
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 3; j++){
        
        //Retângulo em volta
        ctx.fillStyle = 'white'
        ctx.strokeStyle = "#000075"
        ctx.strokeRect(100 + (110 * i), 125 + (135 * j), 100, 100)

        //Função para criar o triângulo
        function drawTriangle1() { 

        //Formula do triângulo
        let height = 300 * Math.cos(Math.PI / 3)

        //Medida dos lados do triângulo & Formula para muiltiplicar as figuras
        ctx.beginPath()
        ctx.moveTo(120 + (110 * i), 200 + (135 * j))
        ctx.lineTo(180 + (110 * i), 200 + (135 * j))
        ctx.lineTo(150 + (110 * i), 300 + (135 * j) - height)
        ctx.closePath()

        //Contorno do triângulo
        ctx.strokeStyle = "#000075"
        ctx.stroke()
        }
        drawTriangle1()
    }
}