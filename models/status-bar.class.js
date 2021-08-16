class StatusBar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png', // 0
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png', // 1
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png', // 2
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png', // 3
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png', // 4
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png', // 5
    ];

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES)
        this.x = 100;
        this.y = 100;
        this.setPercentage(100);
    }

    // setPercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }






}