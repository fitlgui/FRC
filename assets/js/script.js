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

const checktrap = document.getElementById('checktrap');
const labeltrap = document.getElementById('labeltrap');

const checkmic = document.getElementById('checkmic');
const labelmic = document.getElementById('labelmic');

let zona = 0;
let corrente = 0;
let trap = 0;
let mic = 0;
let coop = 0;

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
    } else {
        labelcorrente.textContent = 'Não';
        corrente = 0;
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
