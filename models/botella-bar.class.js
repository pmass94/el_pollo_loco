class BotellaBar extends StatusBar {

    x = 450;

    constructor() {
        super().loadImage('img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png');
        this.loadImages(this.IMAGES);

        this.setPercentage(0);
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

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];
}