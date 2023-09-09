// Função para gerar um número aleatório de 1 a 15
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 15) + 1;
}

// Função para executar a animação quando "Pegou" é escolhido
function animacaoPegou() {
    // Coloque aqui o código da animação "Pegou"
        const garraAberta2 = document.getElementById("garra_aberta");
        const urso12 = document.getElementById("urso1");
        const startPosition2 = 30; // Posição vertical inicial em porcentagem

        // Função para mover a imagem para baixo
        async function moverParaBaixo2() {
            garraAberta2.style.top = "54%"; // Mover para a parte inferior
            garraAberta2.style.width = "8%"; // Definir largura como 80px permanentemente
        }

        // Função para mover a imagem de volta para cima e restaurar a posição vertical inicial
        async function moverParaCima2() {
            garraAberta2.style.top = startPosition2 + "%"; // Mover de volta à posição centralizada vertical
            garraAberta2.style.width = "8%"; // Manter a largura como 80px
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
    const garraAberta = document.getElementById("garra_aberta");
    const startPosition = 30; // Posição vertical inicial em porcentagem
    const startWidth = 100; // Largura inicial em porcentagem

    async function moverParaBaixo() {
        garraAberta.style.top = "54%"; // Mover para a parte inferior
        garraAberta.style.width = "8%"; // Reduzir a largura para 8% após mover para baixo
    }

    function pausarPorUmSegundo() {
        return new Promise(resolve => setTimeout(resolve, 1000)); // 1000 milissegundos (1 segundo)
    }

    async function moverParaCima() {
        await pausarPorUmSegundo();
        garraAberta.style.top = `${startPosition}%`; // Mover de volta à posição centralizada vertical
        garraAberta.style.width = "10%"; // Restaurar a largura inicial em porcentagem
    }

    // Use try-catch para lidar com erros e garantir que a animação termine
    async function executarAnimacao() {
            await moverParaBaixo();
            await moverParaCima();
    }

    // Inicie a animação
    executarAnimacao();
}

    // Função para executar a animação apenas quando o número gerado for múltiplo de 5
function executarAnimacao() {
    const numeroAleatorio = gerarNumeroAleatorio();

    if (numeroAleatorio % 5 === 0) {
        animacaoPegou();
        console.log("Parabéns!");
    } else {
        animacaoNaoPegou();
        console.log("Tente de novo!");
    }

}

// Associe a função ao evento de clique do botão
const botaoExecutar = document.getElementById('startAnimation');
botaoExecutar.addEventListener('click', executarAnimacao);
