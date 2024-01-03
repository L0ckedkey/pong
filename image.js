const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600
canvas.height = 400


var images = []

path = 'mop cat '

for(let i=1; i<=2;i++){
    const image = new Image()
    image.src = path + i + ".png"
    images.push(image)
}

var index = 0
var oldTime = 0
const fps = 1000/5

window.onload = function(){
   
    function animate(currentTime){

        if(currentTime - oldTime > fps){
            c.drawImage(images[index], 0,0, 100,100)
            index = (index + 1 ) % 2
            oldTime = currentTime
        }
        requestAnimationFrame(animate)
    }

    animate()

}