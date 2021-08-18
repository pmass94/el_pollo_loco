class ThrowableObject extends MovableObject {

    constructor() {
        super().loadImage('img/7.Marcadores/Icono/Botella.png')
        this.x = 100;
        this.y = 100;


    }


    throw(x, y){
        this.x = x;
        this.y = y;
        this.speedY = 30;
    }
}