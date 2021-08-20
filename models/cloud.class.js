class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 200 + Math.random() * 4000; // Zahl zwischen 200 und 700
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.05 + Math.random() * 0.3;
        }, 1000 / 60);

    }


 
}