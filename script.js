const form = document.getElementById('form');
const n_succession = document.getElementById('user-input');
const result = document.getElementById('result');

form.addEventListener( 'submit', event => {
    event.preventDefault();

    const userSuccession = Number(n_succession.value.trim());

    if(!Number.isInteger(userSuccession) || userSuccession == '') {
        result.textContent = 'Ingresa un numero entero no negativo.';
    } else {
        const successionFibonacci = [0, 1];
        const fibonacci = (n) => {
            if (n == 0) return `El número debe ser mayor a cero`;
            if (n == 1) return `La sucesión es: ${[0]}`;

            for (let i = 2; i < n; i++) {
                successionFibonacci.push(successionFibonacci[i - 1] + successionFibonacci[i - 2]);
            }
            return `La sucesión es: ${successionFibonacci}`;
        }
        result.textContent = fibonacci(userSuccession);
    }
});
