const rangeInputafautonomo = document.getElementById('rangeafautonomo');
const rangeValueafautonomo = document.getElementById('afautonomo');

const rangeInputampautonomo = document.getElementById('rangeampautonomo');
const rangeValueampautonomo= document.getElementById('ampautonomo');

const rangeInputaf = document.getElementById('rangeaf');
const rangeValueaf = document.getElementById('af');

const rangeInputafc = document.getElementById('rangeafc');
const rangeValueafc = document.getElementById('afc');

const rangeInputapf = document.getElementById('rangeapf');
const rangeValueapf = document.getElementById('apf');

// 
const totalValueSpan = document.getElementById('totalValue');
let totalValue = parseInt(totalValueSpan.textContent, 10);

function updateTotalValue() {
    totalValue = parseInt(rangeInputafautonomo.value) +
                 parseInt(rangeInputampautonomo.value) +
                 parseInt(rangeInputaf.value) +
                 parseInt(rangeInputafc.value) +
                 parseInt(rangeInputapf.value);
    totalValueSpan.textContent = totalValue;
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
// 

rangeInputafautonomo.addEventListener('input', function () {
    rangeValueafautonomo.textContent = this.value;
});

rangeInputampautonomo.addEventListener('input', function () {
    rangeValueampautonomo.textContent = this.value;
});

rangeInputaf.addEventListener('input', function () {
    rangeValueaf.textContent = this.value;
});

rangeInputafc.addEventListener('input', function () {
    rangeValueafc.textContent = this.value;
});

rangeInputapf.addEventListener('input', function () {
    rangeValueapf.textContent = this.value;
});
/////////////////////////////
const checksaida = document.getElementById('checksaida');
const labelsaida = document.getElementById('labelsaida');

const checkcorrente = document.getElementById('checkcorrente');
const labelcorrente = document.getElementById('labelcorrente');

const checktrap = document.getElementById('checktrap');
const labeltrap = document.getElementById('labeltrap');

const checkbox = document.getElementById('checkmic');
const label = document.getElementById('labelmic');

checksaida.addEventListener('change', function () {
    if (this.checked) {
        labelsaida.textContent = 'Sim';
    } else {
        labelsaida.textContent = 'Não';
    }
});

checkcorrente.addEventListener('change', function () {
    if (this.checked) {
        labelcorrente.textContent = 'Sim';
    } else {
        labelcorrente.textContent = 'Não';
    }
});

checktrap.addEventListener('change', function () {
    if (this.checked) {
        labeltrap.textContent = 'Sim';
    } else {
        labeltrap.textContent = 'Não';
    }
});

checkbox.addEventListener('change', function () {
    if (this.checked) {
        label.textContent = 'Sim';
    } else {
        label.textContent = 'Não';
    }
});

// Set initial label text based on checkbox state
if (checkbox.checked) {
    label.textContent = 'Sim';
} else {
    label.textContent = 'Não';
}