const rangeInputaf = document.getElementById('rangeaf');
const rangeValueaf = document.getElementById('af');

const rangeInputafc = document.getElementById('rangeafc');
const rangeValueafc = document.getElementById('afc');

const rangeInputapf = document.getElementById('rangeapf');
const rangeValueapf = document.getElementById('apf');

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
const checkcorrente = document.getElementById('checkcorrente');
const labelcorrente = document.getElementById('labelcorrente');

const checktrap = document.getElementById('checktrap');
const labeltrap = document.getElementById('labeltrap');

const checkbox = document.getElementById('checkmic');
const label = document.getElementById('labelmic');

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
