// Banco de Dados Consolidado com Links Brutos da PokeAPI (100% Livres de Bloqueio)
const pokemonDatabase = {
    "charizard-x": {
        numero: "006", nome: "Mega Charizard X", categoria: "Chama", geracao: "Geração VI", tipos: ["Fogo", "Dragão"],
        altura: "1.7 m", peso: "110.5 kg", status: { hp: 180, atk: 130, def: 111, spAtk: 150, spDef: 120, speed: 140 },
        habilidades: { normal: "Tough Claws", oculta: "Solar Power" }, fraquezas: ["Terra", "Pedra", "Dragão"],
        lore: "A energia da Mega Evolução tornou seu corpo negro e suas chamas azuis, aumentando drasticamente seu poder físico.",
        corPrincipal: "#00d4ff", fxBorda: "fx-fogo-azul", ambiente: "cenario-vulcao",
        modelo: "https://githubusercontent.com",
        golpes: [{ nome: "Dragon Claw", dano: 40 }, { nome: "Flamethrower", dano: 45 }, { nome: "Blast Burn", dano: 80 }]
    },
    "rayquaza": {
        numero: "384", nome: "Mega Rayquaza Shiny", categoria: "Céu", geracao: "Geração III", tipos: ["Dragão", "Voador"],
        altura: "10.8 m", peso: "392.0 kg", status: { hp: 250, atk: 180, def: 100, spAtk: 180, spDef: 100, speed: 115 },
        habilidades: { normal: "Delta Stream", oculta: "Nenhuma" }, fraquezas: ["Gelo", "Pedra", "Dragão", "Fada"],
        lore: "Diz-se que viveu na camada de ozônio por centenas de milhões de anos. Sua forma shiny reluz em tons negros e esmeralda.",
        corPrincipal: "#00ff66", fxBorda: "fx-esmeralda", ambiente: "cenario-espaco",
        modelo: "https://githubusercontent.com",
        golpes: [{ nome: "Extreme Speed", dano: 35 }, { nome: "Dragon Pulse", dano: 50 }, { nome: "Dragon Ascent", dano: 90 }]
    },
    "greninja": {
        numero: "658", nome: "Greninja Ash Form", categoria: "Ninja", geracao: "Geração VI", tipos: ["Água", "Noturno"],
        altura: "1.5 m", peso: "40.0 kg", status: { hp: 150, atk: 145, def: 67, spAtk: 153, spDef: 71, speed: 132 },
        habilidades: { normal: "Battle Bond", oculta: "Protean" }, fraquezas: ["Elétrico", "Planta", "Lutador", "Fada"],
        lore: "Esta forma rara é alcançada através do Fenômeno do Vínculo, quando a sincronia entre treinador e Pokémon atinge o ápice.",
        corPrincipal: "#3b82f6", fxBorda: "borda-padrao", ambiente: "cenario-oceano",
        modelo: "https://githubusercontent.com",
        golpes: [{ nome: "Night Slash", dano: 35 }, { nome: "Water Shuriken", dano: 50 }, { nome: "Mega Shuriken", dano: 80 }]
    },
    "pikachu": {
        numero: "025", nome: "Pikachu G-Max", categoria: "Rato", geracao: "Geração I", tipos: ["Elétrico"],
        altura: "21.0 m", peso: "??? kg", status: { hp: 130, atk: 110, def: 95, spAtk: 120, spDef: 90, speed: 150 },
        habilidades: { normal: "Static", oculta: "Lightning Rod" }, fraquezas: ["Terra"],
        lore: "A energia do Gigantamax gerou uma cauda colossal capaz de acumular raios tão destrutivos quanto uma tempestade elétrica.",
        corPrincipal: "#ffcc00", fxBorda: "fx-raios-amarelos", ambiente: "cenario-tempestade",
        modelo: "https://githubusercontent.com",
        golpes: [{ nome: "Quick Attack", dano: 25 }, { nome: "Thunderbolt", dano: 45 }, { nome: "10M Volt Trovão", dano: 85 }]
    },
    "groudon": {
        numero: "383", nome: "Groudon Primal", categoria: "Continente", geracao: "Geração III", tipos: ["Terra", "Fogo"],
        altura: "5.0 m", peso: "999.7 kg", status: { hp: 230, atk: 180, def: 160, spAtk: 150, spDef: 90, speed: 90 },
        habilidades: { normal: "Desolate Land", oculta: "Nenhuma" }, fraquezas: ["Terra", "Água"],
        lore: "A personificação dos continentes. Em sua forma Primal, faz a lava transbordar dilatando as massas terrestres.",
        corPrincipal: "#ff2a00", fxBorda: "fx-magma", ambiente: "cenario-lava",
        modelo: "https://githubusercontent.com",
        golpes: [{ nome: "Fire Punch", dano: 35 }, { nome: "Earthquake", dano: 55 }, { nome: "Precipice Blades", dano: 85 }]
    },
    "kyogre": {
        numero: "382", nome: "Kyogre Primal", categoria: "Bacia Marítima", geracao: "Geração III", tipos: ["Água"],
        altura: "9.8 m", peso: "430.0 kg", status: { hp: 240, atk: 150, def: 90, spAtk: 180, spDef: 160, speed: 90 },
        habilidades: { normal: "Primordial Sea", oculta: "Nenhuma" }, fraquezas: ["Elétrico", "Planta"],
        lore: "O titã lendário dos oceanos. Sua forma primitiva invoca dilúvios colossais que expandem as bacias marítimas.",
        corPrincipal: "#0066ff", fxBorda: "fx-oceano", ambiente: "cenario-oceano",
        modelo: "https://githubusercontent.com",
        golpes: [{ nome: "Ice Beam", dano: 40 }, { nome: "Origin Pulse", dano: 60 }, { nome: "Water Spout", dano: 90 }]
    }
};
