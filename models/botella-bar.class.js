class BotellaBar extends DrawableObject {

    percentage = 0;

    constructor() {
        super().loadImage('img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 450;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLE[this.resolveImageIndex()]
        this.img = this.imageCache[path];


    }

    resolveImageIndex() {
        if(this.percentage == 10) {
            return 5;
        } else if(this.percentage >= 8) {
            return 4;
        } else if(this.percentage >= 6) {
            return 3;
        } else if(this.percentage >= 4) {
            return 2;
        } else if(this.percentage >= 2) {
            return 1;
        } else {
            return 0;
        }
    }

    IMAGES_BOTTLE = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];
}