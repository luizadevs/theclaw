// Função para gerar um número aleatório de 1 a 15
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 15) + 1;
}

// Função para executar a animação quando "Pegou" é escolhido
function animacaoPegou() {
    // Coloque aqui o código da animação "Pegou"
    console.log("Parabéns!");
            const garraAberta2 = document.getElementById("garra_aberta");
            const urso12 = document.getElementById("urso1");
            const startPosition2 = 41.5; // Posição vertical inicial em porcentagem

            // Função para mover a imagem para baixo
            async function moverParaBaixo2() {
                garraAberta2.style.top = "54%"; // Mover para a parte inferior
                garraAberta2.style.width = "80px"; // Definir largura como 80px permanentemente
            }

            // Função para mover a imagem de volta para cima e restaurar a posição vertical inicial
            async function moverParaCima2() {
                garraAberta2.style.top = startPosition2 + "%"; // Mover de volta à posição centralizada vertical
                garraAberta2.style.width = "80px"; // Manter a largura como 80px
                urso12.style.top = startPosition2 + "%"; // Mover o urso de volta apenas verticalmente
            }

            // Função para pausar por um segundo
            function pausarPorUmSegundo2() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 1000); // 1000 milissegundos (1 segundo)
                });
            }

            // Chame as funções para iniciar a animação automaticamente
            moverParaBaixo2()
                .then(() => pausarPorUmSegundo2())
                .then(() => moverParaCima2());

}

// Função para executar a animação quando "Não Pegou" é escolhido
function animacaoNaoPegou() {
    // Coloque aqui o código da animação "Não Pegou"
            const garraAberta = document.getElementById("garra_aberta");
            const startPosition = 41.5; // Posição vertical inicial em porcentagem
            const startWidth = 100; // Largura inicial em pixels

            // Função para mover a imagem para baixo
            async function moverParaBaixo() {
                garraAberta.style.top = "54%"; // Mover para a parte inferior
                garraAberta.style.width = "80px"; // Reduzir a largura para 80px após mover para baixo
            }

            // Função para pausar por um segundo
            function pausarPorUmSegundo() {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 1000); // 1000 milissegundos (1 segundo)
                });
            }

            // Função para mover a imagem de volta para cima e restaurar a posição vertical inicial
            async function moverParaCima() {
                await pausarPorUmSegundo();
                garraAberta.style.top = startPosition + "%"; // Mover de volta à posição centralizada vertical
                garraAberta.style.width = startWidth + "px"; // Restaurar a largura inicial
            }

            // Chame as funções para iniciar a animação automaticamente
            moverParaBaixo()
                .then(() => moverParaCima());
}

    // Função para executar a animação apenas quando o número gerado for múltiplo de 5
function executarAnimacao() {
    const numeroAleatorio = gerarNumeroAleatorio();

    if (numeroAleatorio % 5 === 0) {
        animacaoPegou();
    } else {
        console.log("Tente de novo!");
    }

}

// Associe a função ao evento de clique do botão
const botaoExecutar = document.getElementById('startAnimation');
botaoExecutar.addEventListener('click', executarAnimacao);
