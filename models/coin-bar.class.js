class CoinBar extends StatusBar {
 
    x = 250;
    
    constructor() {
        super().loadImage('img/7.Marcadores/Barra/Marcador moneda/azul/0_.png');
        this.loadImages(this.IMAGES);

        this.setPercentage(0);
    }

    resolveImageIndex() {
        if(this.percentage == 25) {
            return 5;
        } else if(this.percentage >= 20) {
            return 4;
        } else if(this.percentage >= 15) {
            return 3;
        } else if(this.percentage >= 10) {
            return 2;
        } else if(this.percentage >= 5) {
            return 1;
        } else {
            return 0;
        }
    }

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
    ];
}