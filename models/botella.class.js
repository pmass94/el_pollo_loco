class Botella extends MovableObject {
    width = 80;
    height = 100;
        constructor(imagePath, x, y) {
            super().loadImage(imagePath);
            this.x = x;
            this.y = 340;
        }
}