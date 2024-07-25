// Elementos da DOM
const equipe = document.getElementById('equipe');
const partida = document.getElementById('partida');

const alianca = () => {
    if (document.getElementById('Blue').checked == true){
        return 'Blue';
    } else {
        return 'Red';
    }
}

const resultado = () => {
    if (document.getElementById('vitoria').checked == true){
        return 'Vitória';
    } else if(document.getElementById('empate').checked == true){
        return 'Empate';
    } else {
        return 'Derrota';
    }
}


const rangeInputafautonomo = document.getElementById('rangeafautonomo');
const rangeValueafautonomo = document.getElementById('afautonomo');
const rangeInputampautonomo = document.getElementById('rangeampautonomo');
const rangeValueampautonomo = document.getElementById('ampautonomo');
const rangeInputaf = document.getElementById('rangeaf');
const rangeValueaf = document.getElementById('af');
const rangeInputafc = document.getElementById('rangeafc');
const rangeValueafc = document.getElementById('afc');
const rangeInputapf = document.getElementById('rangeapf');
const rangeValueapf = document.getElementById('apf');

const labelsaida = document.getElementById('labelsaida');
const checksaida = document.getElementById('checksaida');
const checkcorrente = document.getElementById('checkcorrente');
const labelcorrente = document.getElementById('labelcorrente');
const checkestacionou = document.getElementById('checkestacionou');
const labelestacionou = document.getElementById('labelestacionou');
const checktrap = document.getElementById('checktrap');
const labeltrap = document.getElementById('labeltrap');
const checkmic = document.getElementById('checkmic');
const labelmic = document.getElementById('labelmic');
const checkcoop = document.getElementById('checkcoop');
const labelcoop = document.getElementById('labelcoop');
const btnEnviar = document.getElementById('enviar');

const totalValueSpan = document.getElementById('totalValue');
const erro = document.getElementById('erro');
const sucesso = document.getElementById('sucesso');
const Key = document.getElementById('key');

// Variáveis de pontuação
let zona = 0;
let corrente = 0;
let trap = 0;
let mic = 0;
let coop = 0;
let estacionou = 0;

// Função para atualizar o valor total
function updateTotalValue() {
    let ValorTotal = parseInt(rangeInputafautonomo.value) * 5 +
                     parseInt(rangeInputampautonomo.value) * 2 +
                     parseInt(rangeInputaf.value) * 2 +
                     parseInt(rangeInputafc.value) * 5 +
                     parseInt(rangeInputapf.value) +
                     trap + corrente + estacionou + zona + mic;
    totalValueSpan.textContent = coop !== 0 ? `Pontos: ${ValorTotal} e 1 Coop` : `Pontos: ${ValorTotal}`;
    console.log(ValorTotal);
}

// Funções de manipulação dos checkboxes
checksaida.addEventListener('change', function () {
    zona = this.checked ? 2 : 0;
    labelsaida.textContent = this.checked ? 'Sim' : 'Não';
    updateTotalValue();
});

checkcorrente.addEventListener('change', () => {
    if (checkcorrente.checked) {
        labelcorrente.textContent = 'Sim';
        corrente = 1;
        labelestacionou.textContent = 'Sim';
    }});
checkcorrente.addEventListener('change', function () {
    corrente = this.checked ? 1 : 0;
    labelcorrente.textContent = this.checked ? 'Sim' : 'Não';
    if (this.checked) {
        estacionou = 1;
        checkestacionou.checked = true;
    } else {
        estacionou = 0;
        checkestacionou.checked = false;
    }
    labelestacionou.textContent = estacionou ? 'Sim' : 'Não';
    updateTotalValue();
});

checkestacionou.addEventListener('change', function () {
    estacionou = this.checked ? 1 : 0;
    labelestacionou.textContent = this.checked ? 'Sim' : 'Não';
    updateTotalValue();
});

checktrap.addEventListener('change', function () {
    trap = this.checked ? 5 : 0;
    labeltrap.textContent = this.checked ? 'Sim' : 'Não';
    updateTotalValue();
});

checkmic.addEventListener('change', function () {
    mic = this.checked ? 1 : 0;
    labelmic.textContent = this.checked ? 'Sim' : 'Não';
    updateTotalValue();
});

checkcoop.addEventListener('change', function () {
    coop = this.checked ? 1 : 0;
    labelcoop.textContent = this.checked ? 'Sim' : 'Não';
    updateTotalValue();
});

// Atualizar valores dos ranges
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

// Função para enviar dados
async function sendData() {
    
    let rankingPoints = 0;
    if (resultado.textContent === 'Vitória') {
        rankingPoints = 2;
    } else if (resultado.textContent === 'Empate') {
        rankingPoints = 1;
    }

    const data = {
        equipe: equipe.value,
        partida: parseInt(partida.value),
        rangeInputafautonomo: parseInt((rangeInputafautonomo.value) * 5),
        rangeInputampautonomo: parseInt((rangeInputampautonomo.value) * 2),
        rangeInputaf: parseInt((rangeInputaf.value) * 2),
        rangeInputafc: parseInt((rangeInputafc.value) * 5),
        rangeInputapf: parseInt(rangeInputapf.value),
        zona,
        corrente,
        trap: parseInt((trap) * 5),
        mic,
        coop,
        estacionou,
        alianca: alianca.value,
        Key: Key.value,
        totalValue: ValorTotal,
        rankingPoints: parseInt(rankingPoints.value)
    };

    try {
        const response = await fetch('https://scout-mt.onrender.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'PAOCOMCARNE123$',
                'key': Key.value
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Erro de internet');
        }

        const result = await response.json();
        console.log('Enviado com sucesso:', result);
        sucesso.style.display = 'block';
    } catch (error) {
        console.error('Deu ruim ao enviar:', error);
        erro.style.display = 'block';
    }

    setTimeout(() => {
        location.reload();
    }, 7000);
}

// Adicionar evento ao botão de envio
btnEnviar.addEventListener('click', sendData);
