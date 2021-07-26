class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500; // Zahl zwischen 200 und 700
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.2;
        },1000 / 60);
        
    }

}