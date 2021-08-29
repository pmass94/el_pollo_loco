class Endbossbar extends DrawableObject {
 
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png',
    ];

    percentage = 100;
    
    constructor() {
        super().loadImage('img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png');
        this.loadImages(this.IMAGES);
        this.x = 450;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.setPercentage(25);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
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


}