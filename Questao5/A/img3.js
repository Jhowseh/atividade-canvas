let canvasdt = document.querySelector("#doubleTriangle")
let contextdt = canvasdt.getContext("2d")


//Função para criar o triângulo 1 (ESQUERDA)
function drawTriangle1() { 

    //Formula do triângulo
    let height = 200 * Math.cos(Math.PI / 5)

    //Medida dos lados do triângulo
    contextdt.beginPath();
    contextdt.moveTo(100, 300)
    contextdt.lineTo(300, 300)
    contextdt.lineTo(200, 300 - height)
    contextdt.closePath()

   //Contorno do triângulo
    contextdt.strokeStyle = "#000075"
    contextdt.stroke()
}
drawTriangle1()

//Função para criar o triângulo 2 (DIREITA)
function drawTriangle2() { 

    //Formula do triângulo
    let height = 200 * Math.cos(Math.PI / 5)

    //Medida dos lados do triângulo
    contextdt.beginPath();
    contextdt.moveTo(250, 300)
    contextdt.lineTo(450, 300)
    contextdt.lineTo(350, 300 - height)
    contextdt.closePath()

    //Contorno do triângulo
    contextdt.strokeStyle = "#000075"
    contextdt.stroke()
}
drawTriangle2()