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
