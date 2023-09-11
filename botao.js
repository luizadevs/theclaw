// Função para gerar um número aleatório de 1 a 15
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 15) + 1;
}
// Função para executar a animação quando "Pegou" é escolhido
function animacaoPegou() {
    // Coloque aqui o código da animação "Pegou"
    const garraAberta2 = document.getElementById("garra_aberta");
    const startPosition2 = 31; // Posição vertical inicial em porcentagem

    // Array com as IDs das imagens próximas
    const imagensProximas = ["urso1", "urso2", "urso3", "urso4", "urso6"];

    // Função para encontrar a imagem mais próxima
    function encontrarImagemMaisProxima() {
        let imagemMaisProxima = null;
        let distanciaMaisProxima = Number.MAX_SAFE_INTEGER;

        // Obtém as coordenadas da garra
        const garraBoundingBox = garraAberta2.getBoundingClientRect();
        const garraX = garraBoundingBox.left + garraBoundingBox.width / 2; // Posição horizontal da garra

        imagensProximas.forEach(imagemId => {
            const imagem = document.getElementById(imagemId);
            if (imagem) {
                // Obtém as coordenadas da imagem
                const imagemBoundingBox = imagem.getBoundingClientRect();
                const imagemX = imagemBoundingBox.left + imagemBoundingBox.width / 2; // Posição horizontal da imagem

                // Calcula a distância entre a garra e a imagem (horizontalmente)
                const distanciaX = Math.abs(garraX - imagemX);

                if (distanciaX < distanciaMaisProxima) {
                    distanciaMaisProxima = distanciaX;
                    imagemMaisProxima = imagem;
                }
            }
        });

        return imagemMaisProxima;
    }

    // Função para mover a imagem para baixo
    async function moverParaBaixo2() {
        garraAberta2.style.top = "54%"; // Mover para a parte inferior
        garraAberta2.style.width = "8%"; // Definir largura como 80px permanentemente

        // Espere um segundo
        await pausarPorUmSegundo();

        const imagemMaisProxima = encontrarImagemMaisProxima();
        if (imagemMaisProxima) {
            // Calcula a posição da garra em relação à imagem mais próxima
            garraAberta2.style.top = startPosition2 + "%";
            imagemMaisProxima.style.top = startPosition2 + "%"; // Agora move a imagem mais próxima junto com a garra
        }

        // Exibe no console a imagem mais próxima
        console.log("Imagem mais próxima atual: ", imagemMaisProxima ? imagemMaisProxima.id : "Nenhuma imagem próxima encontrada");

        let premio;

        if (imagemMaisProxima) {
            // Verifica qual imagem foi encontrada e define o prêmio correspondente
            switch (imagemMaisProxima.id) {
                case "urso1":
                    premio = "Sonic.html";
                    break;
                case "urso2":
                    premio = "Ralsei.html";
                    break;
                case "urso3":
                    premio = "Donald.html";
                    break;
                case "urso4":
                    premio = "Luffy.html";
                    break;
                case "urso6":
                    premio = "Freddy.html";
                    break;
                default:
                    premio = "outra.html"; // Página padrão para outras imagens não especificadas
            }
        } else {
            premio = ""; // Página padrão se nenhuma imagem for encontrada
        }

        setTimeout(function() {
            window.location.href = premio;
        }, 2000);
    }

    // Função para pausar por um segundo
    function pausarPorUmSegundo() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000); // 1000 milissegundos (1 segundo)
        });
    }

    // Chame a função para iniciar a animação
    moverParaBaixo2();
}

// Função para pausar por um segundo
function pausarPorUmSegundo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000); // 1000 milissegundos (1 segundo)
    });

    // Chame a função para iniciar a animação
    moverParaBaixo2();
}



// Função para executar a animação quando "Não Pegou" é escolhido
function animacaoNaoPegou() {
    const garraAberta = document.getElementById("garra_aberta");
    const startPosition = 30; // Posição vertical inicial em porcentagem
    const startWidth = 100; // Largura inicial em porcentagem

    async function moverParaBaixo() {
        garraAberta.style.top = "60%"; // Mover para a parte inferior
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
