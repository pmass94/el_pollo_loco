class ThrowableObject extends MovableObject {

    constructor(x, y, otherDirection) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png')

        this.otherDirection = otherDirection
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();


    }


    throw() {
        this.speedY = 18;
        this.applyGravity();

        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 10;
            } else {
                this.x += 15;
            }

        }, 25);
    }
}