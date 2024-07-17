// Selecionar os elementos do DOM

// Auto Falante Autonomo
const rangeInputafautonomo = document.getElementById('rangeafautonomo');
const rangeValueafautonomo = document.getElementById('afautonomo');

// Amplificador Autonomo
const rangeInputampautonomo = document.getElementById('rangeampautonomo');
const rangeValueampautonomo = document.getElementById('ampautonomo');

// Numero da Equipe
const equipe = document.getElementById('equipe');

// Auto Falante no Tele-operado
const rangeInputaf = document.getElementById('rangeaf');
const rangeValueaf = document.getElementById('af');

// Auto Falante Amplificado no Tele-Op
const rangeInputafc = document.getElementById('rangeafc');
const rangeValueafc = document.getElementById('afc');

// Amplificador no Tele-Op
const rangeInputapf = document.getElementById('rangeapf');
const rangeValueapf = document.getElementById('apf');

// Saida da Zona
const labelsaida = document.getElementById('labelsaida');
const checksaida = document.getElementById('checksaida');

// Corrente
const checkcorrente = document.getElementById('checkcorrente');
const labelcorrente = document.getElementById('labelcorrente');

// Estacionou em Baixo do Palco
const checkestacionou = document.getElementById('checkestacionou');
const labelestacionou = document.getElementById('labelestacionou');

// Trap - Palco
const checktrap = document.getElementById('checktrap');
const labeltrap = document.getElementById('labeltrap');

// Microfone - Palco
const checkmic = document.getElementById('checkmic');
const labelmic = document.getElementById('labelmic');

// Coopertition
const checkcoop = document.getElementById('checkcoop');
const labelcoop = document.getElementById('labelcoop');

// Botão de Enviar
const btnEnviar = document.getElementById('enviar');

// Variáveis Mutaveis
let zona = 0;
let corrente = 0;
let trap = 0;
let mic = 0;
let coop = 0;
let estacionou = 0;
let conteudo = document.getElementById('body');

// Checagem de Botões de Verificação - Saida da Zona - Coopertition - Microfone - Trap - Corrente - Estacionou

checksaida.addEventListener('change', function () {
    if (this.checked) {
        labelsaida.textContent = 'Sim';
        zona = 2; // Pontuação Zona
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
    } else {
        labelcorrente.textContent = 'Não';
        corrente = 0;
    }
    updateTotalValue();
});

checkestacionou.addEventListener('change', function () {
    if (corrente == 1) {
        this.checked = true;
        labelestacionou.textContent = 'Sim';
        estacionou = 1;
    } else if (this.checked) {
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

// 
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
    if (coop != 0) {
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
        equipe: equipe.value, // Número da Equipe
        rangeInputafautonomo: parseInt(rangeInputafautonomo.value), // Notas no Auto-Falante no Autonomo
        rangeInputampautonomo: parseInt(rangeInputampautonomo.value), // Notas no Amplificador no Autonomo
        rangeInputaf: parseInt(rangeInputaf.value), // Notas no Auto-Falante Tele-Operado
        rangeInputafc: parseInt(rangeInputafc.value), // Notas Amplificadas no Auto-Falante no Tele-Operado
        rangeInputapf: parseInt(rangeInputapf.value), // Notas no Amplificador
        zona, // Se Saiu da Zona
        corrente, // Se fez corrente
        trap, // Se fez trap
        mic, // Se fez microfone
        coop, // Se fez coopertition
        estacionou, // Se estacionou
        totalValue // Pontos Totais
    };

    try {
        const response = await fetch('http://localhost:3000/data', {
            // Passando Dados em json para a API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }
        const result = await response.json();
        console.log('Enviado com sucesso:', result);
        conteudo.innerHTML = '<div class="alert alert-info" role="alert"> Dados Enviados Com Sucesso </div>'
        // Recarregar a página após o envio bem-sucedido
        setTimeout(() => {window.location.reload();}, 5000);
    } catch (error) {
        console.error('Deu ruim ao enviar:', error);
        conteudo.innerHTML = '<div class="alert alert-danger" role="alert">Erro Ao Enviar, Tente Novamente!</div>';
        // Recarregar a página após o erro de envio
        setTimeout(() => {window.location.reload();}, 5000);
    }
}

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    sendData();
});
