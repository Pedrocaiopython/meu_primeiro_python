// Motor de Injeção Atmosférica de Partículas CSS
function dispararParticulasAtmosfera(cor) {
    const container = document.getElementById("particulas-fundo");
    if (!container) return;
    container.innerHTML = ""; // Limpa rastros passados

    for (let i = 0; i < 15; i++) {
        const particula = document.createElement("div");
        particula.classList.add("p-fundo");

        const tamanho = Math.floor(Math.random() * 25) + 8;
        const posEsquerda = Math.floor(Math.random() * 100);
        const delay = (Math.random() * 4).toFixed(1);
        const duracao = (Math.random() * 4 + 4).toFixed(1);

        particula.style.width = `${tamanho}px`;
        particula.style.height = `${tamanho}px`;
        particula.style.left = `${posEsquerda}%`;
        particula.style.animationDelay = `${delay}s`;
        particula.style.animationDuration = `${duracao}s`;
        particula.style.background = `radial-gradient(circle, ${cor || '#ffffff'} 0%, rgba(0,0,0,0) 70%)`;

        container.appendChild(particula);
    }
}
