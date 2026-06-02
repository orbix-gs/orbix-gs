const form = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();

        if (nome === "") {
            alert("Digite seu nome antes de finalizar o quiz.");
            return;
        }

        const perguntas = document.querySelectorAll("#quizForm select");

        for (let pergunta of perguntas) {

            if (pergunta.selectedIndex === 0) {

                alert("Responda todas as perguntas antes de finalizar.");

                pergunta.focus();

                return;
            }
        }

        let pontos = 0;

        perguntas.forEach(pergunta => {

            const resposta =
                pergunta.options[pergunta.selectedIndex];

            if (resposta.dataset.correta === "true") {
                pontos++;
            }

        });

        const erros = perguntas.length - pontos;

        let titulo = "";
        let mensagem = "";
        let emoji = "";

        if (pontos <= 3) {

            emoji = "🚀";
            titulo = "Cadete Espacial";

            mensagem =
                "Você está iniciando sua jornada pelo universo da tecnologia orbital. Continue explorando os conceitos da ORBIX.";

        }

        else if (pontos <= 6) {

            emoji = "🛰️";
            titulo = "Especialista em Missões";

            mensagem =
                "Você já compreende boa parte das soluções desenvolvidas pela ORBIX e seu impacto no futuro espacial.";

        }

        else if (pontos <= 8) {

            emoji = "🌍";
            titulo = "Engenheiro Orbital";

            mensagem =
                "Seu conhecimento sobre infraestrutura espacial é avançado e demonstra excelente entendimento do projeto.";

        }

        else {

            emoji = "🌌";
            titulo = "Comandante ORBIX";

            mensagem =
                "Parabéns! Você domina os conceitos da ORBIX e está pronto para liderar missões rumo ao futuro da exploração espacial.";

        }

        resultado.innerHTML = `
            <div class="resultado-card">

                <h2>RESULTADO FINAL</h2>

                <div class="resultado-nome">
                    👨‍🚀 ${nome}
                </div>

                <div class="resultado-pontos">
                    <h3>${pontos}/10</h3>
                    <p>Acertos</p>
                </div>

                <div class="resultado-erros">
                    <h3>${erros}</h3>
                    <p>Erros</p>
                </div>

                <div class="resultado-cargo">
                    <h2>${emoji} ${titulo}</h2>
                </div>

                <p class="resultado-msg">
                    ${mensagem}
                </p>

            </div>
        `;

        resultado.style.display = "block";

        resultado.scrollIntoView({
            behavior: "smooth"
        });

    });

}