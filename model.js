export class Ball{
    constructor({position, radius, velocity, color, c}){
        this.position = {
            x: position.x,
            y: position.y,
        }
        this.radius = radius,
        this.velocity = {
            x: velocity.x,
            y: velocity.y
        }
        this.color = color,
        this.c = c
    }

    update(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
    
    resetPosition(){
        this.position.x = 300
        this.position.y = 200
    }

    collision(){
        if(this.position.x + this.velocity.x < 0 || this.position.x + this.velocity.x > 600){
            this.velocity.x *= -1
        }
        if(this.position.y + this.velocity.y < 0 || this.position.y + this.velocity.y > 400){
            if(this.position.y <= 0){
                Paddle.blueScore++
                this.resetPosition()
            }else if(this.position.y >= 400){
                Paddle.redScore++
                this.resetPosition()
            }


            this.velocity.y *= -1
        }
        
    }

    addPoint(){
        this.score++
    }

    render(){
        this.collision()
        this.update()
        this.c.beginPath();
        this.c.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        this.c.fillStyle = this.color
        this.c.fill()
    }
}


export class Paddle{

    static redScore = 0
    static blueScore = 0

    constructor({position, width, heigth, velocity, color, c}){
        this.position = {
            x: position.x,
            y: position.y,
        },
        this.width = width,
        this.heigth = heigth,
        this.velocity = {
            x: velocity.x,
            y: velocity.y,
        }
        this.color = color
        this.c = c
    }

    checkCollision(){
        if(this.position.x <= 0){
            return 'left'
        }else if(this.position.x + this.width >= 600){
            return 'right'
        }
    }

    update(direction){
        if(direction === 'right' && this.checkCollision() != 'right'){
            this.position.x += this.velocity.x
        }else if(direction === 'left' && this.checkCollision() != 'left'){
            this.position.x -= this.velocity.x
        }
    }

    render(){
        this.c.fillStyle = this.color
        this.c.fillRect(this.position.x, this.position.y, this.width, this.heigth)
    }
}