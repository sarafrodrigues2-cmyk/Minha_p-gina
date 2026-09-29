const mario = document.querSelector(' .mario');
const pipe = document.querSelector(' .pipe');

const jump = () => {
    mario.classList.add("jump");

    sentTimeut(() => {
    mario.classList.add("jump");
    } 500);
}

const loop = setInterval(() => {

    cont pipePosition = pipe.offsetLeft;
     
     if (pipePosition <= 120) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
     }

}, 10)

document.addEventListener('keydown', jump);