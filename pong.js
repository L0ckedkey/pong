import { Ball, Paddle } from "./model.js"

const canvas = document.getElementById('canvas')
const redScore = document.getElementById('red-score')
const blueScore = document.getElementById('blue-score')
const c = canvas.getContext('2d')

canvas.width = 600
canvas.height = 400


var ball = new Ball({
    position: {
        x: 300,
        y: 200
    },
    radius: 5,
    color: 'blue',
    velocity: {
        x: 5,
        y: 5
    },
    c: c
})

var paddle = new Paddle({
    position: {
        x: 275,
        y: 350 
    },
    color: 'black',
    velocity: {
        x: 9,
        y: 5,
    },
    c: c,
    width: 50,
    heigth: 5,
    score: 0
})

var enemy = new Paddle({
    position: {
        x: 275,
        y: 50 
    },
    color: 'red',
    velocity: {
        x: 9,
        y: 5,
    },
    c: c,
    width: 50,
    heigth: 5,
    score: 0
})

var keys = []


window.addEventListener('keydown', function(e){
    keys[e.key] = true
})

window.addEventListener('keyup', function(e){
    keys[e.key] = false
})


function checkKeys(){
    if(keys['d']){
        paddle.update('right')
    }else if(keys['a']){
        paddle.update('left')
    }

    if(keys['l']){
        enemy.update('right')
    }else if(keys['j']){
        enemy.update('left')
    }
}

function paddleAndBallCollision(){
    if(ball.position.x >= paddle.position.x && ball.position.x <= paddle.position.x + paddle.width &&
        ball.position.y >= paddle.position.y && ball.position.y <= paddle.position.y + paddle.heigth){
        ball.velocity.y *= -1
    }

    if(ball.position.x >= enemy.position.x && ball.position.x <= enemy.position.x + enemy.width &&
        ball.position.y >= enemy.position.y && ball.position.y <= enemy.position.y + enemy.heigth){
        ball.velocity.y *= -1
    }
}

function animate(){
    c.clearRect(0,0,canvas.width, canvas.height)
    ball.render()
    checkKeys()
    redScore.innerHTML = Paddle.redScore
    blueScore.innerHTML = Paddle.blueScore
    paddleAndBallCollision()
    paddle.render()
    enemy.render()
    requestAnimationFrame(animate)
}

animate()