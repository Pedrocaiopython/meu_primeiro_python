// Centralizador e Gerenciador de Invocações por Hover (Mouse) - app.js
let pokemonSelecionado = null;
let hpAtualLuta = 100;

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
});

function inicializarMenu() {
    const itensMenu = document.querySelectorAll(".poke-item");
    
    itensMenu.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const id = item.getAttribute("data-id");
            const dadosPokemon = pokemonDatabase[id];
            
            if (dadosPokemon) {
                invocarPokemonCenario(dadosPokemon);
            }
        });
    });
}

function invocarPokemonCenario(pokemon) {
    pokemonSelecionado = pokemon;
    hpAtualLuta = pokemon.status.hp;

    // 1. Atualizar HUD da Pokédex
    document.getElementById("p-nome").innerText = pokemon.nome;
    document.getElementById("p-tipo").innerText = pokemon.tipos.join(" / ");
    document.getElementById("p-altura").innerText = pokemon.altura;
    document.getElementById("p-peso").innerText = pokemon.peso;
    document.getElementById("p-atk").innerText = pokemon.status.atk;
    document.getElementById("p-def").innerText = pokemon.status.def;
    document.getElementById("p-lore").innerText = pokemon.lore;

    // 2. Mudar Texto dos Botões de Golpes Baseado no Índice do Array (Corrigido)
    document.getElementById("atk-1").innerText = pokemon.golpes[0].nome;
    document.getElementById("atk-2").innerText = pokemon.golpes[1].nome;
    document.getElementById("atk-esp").innerText = pokemon.golpes[2].nome;

    // 3. Resetar Medidor de HP
    document.getElementById("texto-hp").innerText = `${pokemon.status.hp}/${pokemon.status.hp}`;
    document.getElementById("barra-hp").style.width = "100%";

    // 4. Trocar Cenário de Fundo
    const cenario = document.getElementById("cenario-ambiente");
    if (cenario) {
        cenario.className = "arena-visual " + pokemon.ambiente;
    }

    // 5. Mudar Moldura Neon Exclusiva
    const borda = document.getElementById("moldura-especial");
    if (borda) { 
        borda.className = "borda-padrao " + pokemon.fxBorda; 
    }

    // 6. Chamar Motor de Partículas Atmosféricas
    if (typeof dispararParticulasAtmosfera === "function") {
        dispararParticulasAtmosfera(pokemon.corPrincipal);
    }

    // 7. Renderizar Arte em Alta Resolução da PokeAPI
    const imgElement = document.getElementById("modelo-pokemon");
    const avisoElement = document.getElementById("aviso-tela");

    if (avisoElement) avisoElement.innerText = "COMPILANDO ELEMENTOS ULTRA HD...";
    if (imgElement) {
        imgElement.classList.add("escondido");
        imgElement.src = pokemon.modelo;
        
        imgElement.onload = () => {
            if (avisoElement) avisoElement.classList.add("escondido");
            imgElement.classList.remove("escondido");
        };
    }
}
