class ThrowableObject extends MovableObject {

    IMAGES_BOTTLES = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    constructor(x, y, otherDirection) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png')
        this.loadImages(this.IMAGES_BOTTLES);
        this.otherDirection = otherDirection
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 64;
        this.throw();


    }


    throw() {
        this.speedY = 21;
        this.applyGravity();

        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 9;
            } else {
                this.x += 14;
            }

        }, 25);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.play();
        }, 100);
    }

    play() {
        this.playAnimation(this.IMAGES_BOTTLES);
    }






}
