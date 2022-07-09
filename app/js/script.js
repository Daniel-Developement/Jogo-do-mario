const personagem = document.querySelector('.personagem');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const reset = document.querySelector('.reset');

scope = document.getElementById("score")

const jump = () => {
    personagem.classList.add('jump')
    
    setTimeout(() => {
        personagem.classList.remove('jump')
    }, 500);
}

var n = 0;
const conta = window.setInterval(function() {
scope.innerHTML = 'Score: ' + n;
n++;
}, 100);


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && personagemPosition < 100){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;

        personagem.src = './app/img/game-over.png';
        personagem.style.width = '75px';
        personagem.style.marginLeft = '50px';

        scope.innerHTML = 'Score: ' + n;

        reset.style.display = 'block';

        clearInterval(loop);
    }
    
}, 1)

const pipePosition = pipe.offsetLeft;
const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');

if(pipePosition <= 120 && pipePosition > 0 && personagemPosition < 100){
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    
}

document.addEventListener('keydown', jump);
document.addEventListener('mousedown', jump);