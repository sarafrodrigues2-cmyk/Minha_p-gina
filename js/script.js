const mario = document.querSelector(' .mario');
const pipe = document.querSelector(' .pipe');

const jump = () => {
    mario.classList.add("jump");

    sentTimeut(() => {
    mario.classList.add("jump");
    } 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).botton.replace('px', ' ')

    console.log(marioPosition);
    
     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.botton = `${marioPosition}px`;

        mario.src = './img/game-over.png'; 
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
     }

}, 10)

document.addEventListener('keydown', jump);