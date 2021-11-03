const calc = function (price = 100, animationTime = 2) {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total')

    const countCalc = function () {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = +calcSquare.value;
        console.log(calcSquareValue)


        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
            animate(totalValue, animationTime);
        } else if (calcSquareValue == 0) {
            total.textContent = 0;
        }

        function animate(value, time) {
            let count = time * 25;
            const newValue = Math.round(value / count);
            let totalSum = 0;
            requestAnimationFrame(function anim() {
                    totalSum += newValue;
                    total.textContent = totalSum;
                    if (totalSum > totalValue) {
                        total.textContent = totalValue;
                    } else {
                        requestAnimationFrame(anim)
                    }
                }
            )
        }
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    })
}
export default calc;
