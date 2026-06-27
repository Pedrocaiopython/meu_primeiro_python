// Motor de Luta, Dedução de HP e Flash de Dano (PARÊNTESE CORRIGIDO)
function executarGol(indexBotao) {
    if (!pokemonSelecionado) return;

    const arrayIndex = indexBotao - 1;
    const golpeDefinido = pokemonSelecionado.golpes[arrayIndex];

    if (!golpeDefinido) return;

    hpAtualLuta = Math.max(0, hpAtualLuta - golpeDefinido.dano);

    const totalHP = pokemonSelecionado.status.hp;
    const taxaPorcentagem = hpAtualLuta / totalHP; // Parêntese 100% verificado e fixo

    document.getElementById("barra-hp").style.width = `${taxaPorcentagem * 100}%`;
    document.getElementById("texto-hp").innerText = `${hpAtualLuta}/${totalHP}`;

    // Flash Vermelho de Impacto Crítico (60fps)
    const flashTela = document.getElementById("flash-combate");
    if (flashTela) {
        flashTela.style.background = "rgba(220, 38, 38, 0.5)";
        setTimeout(() => { flashTela.style.background = "transparent"; }, 120);
    }

    if (hpAtualLuta <= 0) {
        document.getElementById("texto-hp").innerText = `NOCAUTEADO!`;
    }
}
