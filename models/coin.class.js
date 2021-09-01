class Coin extends MovableObject {
    width = 120;
    height = 120;
    IMAGE_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png',
    ];
 
    constructor(x, y){
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGE_COINS);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_COINS);
        }, 500);
    }
}