document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".vip-text");
    const car = document.querySelector(".vip-car");

    if (!text || !car) return;

    // Estado inicial
    text.classList.add("show");
    car.classList.add("hide");

    setInterval(() => {
        // Texto sale suave
        text.classList.remove("show");
        text.classList.add("hide");

        // Carro entra después
        setTimeout(() => {
            car.classList.remove("hide");
            car.classList.add("show");
        }, 1200);

        // Carro sale
        setTimeout(() => {
            car.classList.remove("show");
            car.classList.add("hide");
        }, 5200);

        // Texto vuelve
        setTimeout(() => {
            text.classList.remove("hide");
            text.classList.add("show");
        }, 6400);

    }, 9000); // ciclo largo y elegante
});

