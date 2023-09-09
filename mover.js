document.addEventListener("DOMContentLoaded", function () {
    const moveDireitaButton = document.getElementById("moveDireita");
    const moveEsquerdaButton = document.getElementById("moveEsquerda");
    const garra = document.getElementById("garra_aberta");

    let intervalId = null;
    let step = 5;

    // Obter a posição inicial da garra do estilo (CSS)
    let currentPosition = parseInt(getComputedStyle(garra).left) || 0;

    function moveDireita() {
        currentPosition += step;
        garra.style.left = currentPosition + "px";
    }

    function moveEsquerda() {
        currentPosition -= step;
        garra.style.left = currentPosition + "px";
    }

    // Evento de clique ou toque para mover para a direita
    moveDireitaButton.addEventListener("mousedown", () => {
        intervalId = setInterval(moveDireita, 50);
    });

    moveDireitaButton.addEventListener("touchstart", () => {
        intervalId = setInterval(moveDireita, 50);
    });

    // Evento de clique ou toque para mover para a esquerda
    moveEsquerdaButton.addEventListener("mousedown", () => {
        intervalId = setInterval(moveEsquerda, 50);
    });

    moveEsquerdaButton.addEventListener("touchstart", () => {
        intervalId = setInterval(moveEsquerda, 50);
    });

    // Evento de clique ou toque quando qualquer botão é liberado
    document.addEventListener("mouseup", () => {
        clearInterval(intervalId);
    });

    document.addEventListener("touchend", () => {
        clearInterval(intervalId);
    });

    // Evento de toque quando qualquer botão é cancelado
    document.addEventListener("touchcancel", () => {
        clearInterval(intervalId);
    });
});
