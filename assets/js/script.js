// Equipe
const equipe = document.getElementById('equipe');
const partida = document.getElementById('partida');

// Aliança
const alianca = document.getElementById('alianca')

// Escolha - Notas Auto-Falante / Autônomo
const rangeInputafautonomo = document.getElementById('rangeafautonomo');
const rangeValueafautonomo = document.getElementById('afautonomo');

// Escolha - Notas Amplificador / Autônomo
const rangeInputampautonomo = document.getElementById('rangeampautonomo');
const rangeValueampautonomo = document.getElementById('ampautonomo');

// Escolha - Notas Auto-Falante / Tele-OP
const rangeInputaf = document.getElementById('rangeaf');
const rangeValueaf = document.getElementById('af');

// Escolha - Notas Auto-Falante Amplificado / Tele-OP
const rangeInputafc = document.getElementById('rangeafc');
const rangeValueafc = document.getElementById('afc');

// Escolha - Notas Amplificador / Tele-OP
const rangeInputapf = document.getElementById('rangeapf');
const rangeValueapf = document.getElementById('apf');

// Botão Saida Da Zona
const labelsaida = document.getElementById('labelsaida');
const checksaida = document.getElementById('checksaida');

// Botão Corrente
const checkcorrente = document.getElementById('checkcorrente');
const labelcorrente = document.getElementById('labelcorrente');

// Botão Estacionou
const checkestacionou = document.getElementById('checkestacionou');
const labelestacionou = document.getElementById('labelestacionou');

// Botão Trap
const checktrap = document.getElementById('checktrap');
const labeltrap = document.getElementById('labeltrap');

// Botão Microfone
const checkmic = document.getElementById('checkmic');
const labelmic = document.getElementById('labelmic');

// Botão Coopertition
const checkcoop = document.getElementById('checkcoop');
const labelcoop = document.getElementById('labelcoop');

// Botão de Enviar Dados
const btnEnviar = document.getElementById('enviar');


// Variáveis de pontuação
let zona = 0;
let corrente = 0;
let trap = 0;
let mic = 0;
let coop = 0;
let estacionou = 0;

// Pop - Up
let erro = document.getElementById('erro');
let sucesso = document.getElementById('sucesso');

// Segurança
let Key = document.getElementById('key');

// Verificação para ver se botões estão selecionados

checksaida.addEventListener('change', function () {
    if (this.checked) {
        labelsaida.textContent = 'Sim';
        zona = 2;
    } else {
        labelsaida.textContent = 'Não';
        zona = 0;
    }
    updateTotalValue();
});

checkcorrente.addEventListener('change', function () {
    if (this.checked) {
        labelcorrente.textContent = 'Sim';
        corrente = 1;
        labelestacionou.textContent = 'Sim';
        estacionou = 1;
        checkestacionou.checked = true;
    } else {
        labelcorrente.textContent = 'Não';
        labelestacionou.textContent = 'Não';
        corrente = 0;
        estacionou = 0;
        checkestacionou.checked = false;
    }
    updateTotalValue();
});

checkestacionou.addEventListener('change', function () {
    if (this.checked) {
        labelestacionou.textContent = 'Sim';
        estacionou = 1;
    } else {
        labelestacionou.textContent = 'Não';
        estacionou = 0;
    }
    updateTotalValue();
});

checktrap.addEventListener('change', function () {
    if (this.checked) {
        labeltrap.textContent = 'Sim';
        trap = 5;
    } else {
        labeltrap.textContent = 'Não';
        trap = 0;
    }
    updateTotalValue();
});

checkmic.addEventListener('change', function () {
    if (this.checked) {
        labelmic.textContent = 'Sim';
        mic = 1;
    } else {
        labelmic.textContent = 'Não';
        mic = 0;
    }
    updateTotalValue();
});

checkcoop.addEventListener('change', function () {
    if (this.checked) {
        labelcoop.textContent = 'Sim';
        coop = 1;
    } else {
        labelcoop.textContent = 'Não';
        coop = 0;
    }
    updateTotalValue();
});


// Set initial label text based on checkbox state
if (checkmic.checked) {
    labelmic.textContent = 'Sim';
} else {
    labelmic.textContent = 'Não';
}

// Valor Total 
const totalValueSpan = document.getElementById('totalValue');
let totalValue = 0;

function updateTotalValue() {
    totalValue = parseInt((rangeInputafautonomo.value) * 5) +
                 parseInt((rangeInputampautonomo.value) * 2) +
                 parseInt((rangeInputaf.value) * 2) +
                 parseInt((rangeInputafc.value) * 5) +
                 parseInt(rangeInputapf.value) +
                 parseInt(trap) +
                 parseInt(estacionou) +
                 parseInt(corrente) +
                 parseInt(zona) +
                 parseInt(mic);
    if (coop != 0){
        totalValueSpan.textContent = 'Pontos: ' + totalValue + ' e 1 Coop';
    } else {
        totalValueSpan.textContent = 'Pontos: ' + totalValue;
    }
}

rangeInputafautonomo.addEventListener('input', function () {
    rangeValueafautonomo.textContent = this.value;
    updateTotalValue();
});

rangeInputampautonomo.addEventListener('input', function () {
    rangeValueampautonomo.textContent = this.value;
    updateTotalValue();
});

rangeInputaf.addEventListener('input', function () {
    rangeValueaf.textContent = this.value;
    updateTotalValue();
});

rangeInputafc.addEventListener('input', function () {
    rangeValueafc.textContent = this.value;
    updateTotalValue();
});

rangeInputapf.addEventListener('input', function () {
    rangeValueapf.textContent = this.value;
    updateTotalValue();
});

// Enviar Dados
    async function sendData() {
        const data = {
            equipe: equipe.value,
            partida: partida.value,
            rangeInputafautonomo: parseInt(rangeInputafautonomo.value),
            rangeInputampautonomo: parseInt(rangeInputampautonomo.value),
            rangeInputaf: parseInt(rangeInputaf.value),
            rangeInputafc: parseInt(rangeInputafc.value),
            rangeInputapf: parseInt(rangeInputapf.value),
            zona,
            corrente,
            trap,
            mic,
            coop,
            estacionou,
            alianca,
            Key,
            totalValue
        };

        try {
            const response = await fetch('https://scout-mt.onrender.com/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'PAOCOMCARNE123$',
                    'key': Key.value
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Erro de internet');        
            }
            const result = await response.json();
            console.log('Enviado com sucesso:', result);
            sucesso = sucesso.show();
        } catch (error) {
            console.error('Deu ruim ao enviar:', error);
            erro = erro.show();   
        }    setTimeout(() => {
            location.reload();
        }, 7000) // Recarregar a página após envio
    }
    
    btnEnviar.addEventListener('click', sendData);