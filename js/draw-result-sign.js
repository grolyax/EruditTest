
export const drawHourglass = () => {
    var canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let cicle = 0;
    const img = new Image();
    img.src = '../pictures/icons/hourglass1.png';
    setInterval(() => {
        let step = 5;

        context.clearRect(0, 0, 100, 100);
        context.drawImage(
            img,
            cicle * step, 0,
            15 + cicle * step, 15 + cicle * step
        );
        if (cicle < 2) {
            cicle++;
        };
    }, 300);
};

