const btn = document.getElementById("btn");

const header_hero = document.querySelector(".header-hero");
const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");
const hero3 = document.querySelector(".publico-alvo");
const hero4 = document.querySelector(".tripulacao");
const objetivos = document.querySelectorAll(".objetivo-item");

let cor = 0;

btn.addEventListener("click", trocarCor);

function trocarCor() {
  const textosTema = document.querySelectorAll(
    ".hero1 h1, .hero1 h2, .hero1 h3, .hero1 p," +
      ".hero2 h1, .hero2 h2, .hero2 h3, .hero2 p," +
      ".publico-alvo h1, .publico-alvo h2, .publico-alvo h3, .publico-alvo p," +
      ".tripulacao h1, .tripulacao h2, .tripulacao h3, .tripulacao p",
  );

  const subtitulos = document.querySelectorAll(
    ".subtitle p, .box2-header h2, .publico-header h2, .beneficios-header h2, .boxApli h2"
  );

  const links = document.querySelectorAll(".menu-list a");

  if (cor === 0) {
    header_hero.style.background =
      "linear-gradient(90deg, #ffffff, #eff8ff, #f3f7fc)";
    hero1.style.background =
      "linear-gradient(160deg, #ffffff 0%, #ffffff 70%, #c9def8 85%, #d8e7fa 100%)";
    hero2.style.background =
      "linear-gradient(135deg, #ffffff 0%, #eff6ff 50%, #f5faff 100%)";
    hero3.style.background =
      "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f5faff 100%)";
    hero4.style.background =
      "linear-gradient(90deg, #ffffff, #e0f2fe, #ffffff)";
    textosTema.forEach((el) => {
      el.style.color = "#0F172A";
    });
    links.forEach((link) => {
      link.style.color = "#1E3A8A";
    });
    subtitulos.forEach(subtitulo => {
    subtitulo.style.color = "#22D3EE";
    });
    objetivos.forEach(card => {
    card.style.background =
        "linear-gradient(135deg, #ffffff 0%, #f8fafc 70%, #f0f0f0 100%)";

    card.style.border = "1px solid #74aff8";
    card.style.boxShadow = "0 8px 25px rgba(59,130,246,0.10)";
    });
    cor = 1;
  } else if (cor === 1) {
    header_hero.style.background =
      "linear-gradient(90deg, #000000, #000000, #000000)";
    hero1.style.background =
      "linear-gradient(90deg, #000000, #000000, #050d1d, #010613)";
    hero2.style.background =
      "linear-gradient(90deg, #000000, #000000, #050d1d, #010613)";
    hero3.style.background =
      "linear-gradient(90deg, #000000, #000000, #050d1d, #010613)";
    hero4.style.background =
      "linear-gradient(90deg, #000000, #000000, #050d1d, #010613)";
    textosTema.forEach((el) => {
      el.style.color = "#F8FAFC";
    });
    links.forEach((link) => {
      link.style.color = "#93C5FD";
    });
    subtitulos.forEach(subtitulo => {
    subtitulo.style.color = "#22D3EE";
    });
    objetivos.forEach(card => {
    card.style.background =
        "rgba(15, 23, 42, 0.8)";

    card.style.border = "1px solid rgba(96,165,250,0.2)";
    card.style.boxShadow = "none";
    });
    cor = 2;
  } else {
    header_hero.style.background = "#071226";
    hero1.style.background =
      "linear-gradient(160deg, #020817 10%, #081427 35%, #05101f 55%, #163791 90%, #3B82F6 100%)";
    hero2.style.background =
      "linear-gradient(135deg, #020817 0%, #071226 50%, #020a16 100%)";
    hero3.style.background =
      "linear-gradient(135deg, #020817 0%, #071226 50%, #020a16 100%)";
    hero4.style.background =
      "linear-gradient(90deg, #020817, #071226, #020a16)";
    textosTema.forEach((el) => {
      el.style.color = "";
    });
    links.forEach((link) => {
      link.style.color = "";
    });
    subtitulos.forEach(subtitulo => {
    subtitulo.style.color = "#22D3EE";
    });
    objetivos.forEach(card => {
    card.style.background =
        "rgba(15, 23, 42, 0.8)";

    card.style.border = "1px solid rgba(1, 115, 255, 0.2)";
    card.style.boxShadow = "none";
    });
    cor = 0;
  }
}

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let slideAtual = 0;

    setInterval(() => {

        slides[slideAtual].classList.remove("ativo");

        slideAtual++;

        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }

        slides[slideAtual].classList.add("ativo");

    }, 5000);

}