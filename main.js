const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600
canvas.height = 400


c.fillRect(300,250,10,150)

c.save()
c.beginPath()
c.arc(450,50, 20, 0, 2 * Math.PI)
c.fillStyle = 'yellow'
c.fill()

c.beginPath()
c.arc(450,50, 28, 0, 2 * Math.PI)
c.strokeStyle = 'orange'
c.stroke()


c.beginPath()
c.moveTo(300,250)
c.lineTo(300,300)
c.lineTo(250, 275)
c.fillStyle = 'blue'
c.fill()


c.beginPath()
c.moveTo(200,350)
c.lineTo(400, 350)
c.lineTo(370, 400)
c.lineTo(230, 400)
c.fillStyle = 'black'
c.fill()

c.beginPath()
c.moveTo(50,50)
c.bezierCurveTo(50, 25, 100, 25, 100, 50)
c.moveTo(100,50)
c.bezierCurveTo(100, 25, 150, 25, 150, 50)
c.lineWidth = 3
c.scale(5,5)
c.stroke()



// c.beginPath()
// c.moveTo(90,120)
// c.quadraticCurveTo(130, 80, 150, 120)
// c.stroke()
c.restore()
c.font = '50px Georgia'
// c.translate(300,50)
// c.rotate(90)
c.transform(1,0.01,0.01,0.1,0.1,0.1)
c.globalAlpha = 0.4
c.fillText("Punya HI", 100,100)

