import handler from "./handler";

const calc = () => {
    const inputsCalc = document.getElementById('calc-input');
    const calcType = document.getElementById('calc-type');
    const calcMaterial = document.getElementById('calc-type-material');
    const calcTotal = document.getElementById('calc-total');
    const arrInputs = document.querySelectorAll('.calc-control');
    arrInputs.forEach(item => {
        handler(item, 'input', () => {
            inputsCalc.value = inputsCalc.value.replace(/\D/g, '');
            if ((!isNaN(+calcType.value)) && (!isNaN(+calcMaterial.value))) {
                const res = inputsCalc.value * calcType.options[calcType.selectedIndex].value * calcMaterial.options[calcMaterial.selectedIndex].value;
                calcTotal.value = Math.floor(res);
            }
        });
    });

};
export default calc;
