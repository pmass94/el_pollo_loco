class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // ThrowableObject should alway fall
            return true;
        } else {
            return this.y < 155;
        }
    }




    // character.isColliding(chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    isCollidingEnemiesAndCollectable(mo) {
        return this.x + this.width - 35 > mo.x &&
            this.y + this.height - 50 > mo.y &&
            this.x - 70 < mo.x &&
            this.y + 130 < mo.y + mo.height
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // difference in ms
        timepassed = timepassed / 1000; // difference in s
        return timepassed < 1
    }

    isDead() {
        return this.energy == 0;
    }



    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;


    }

    moveLeft() {
        this.x -= this.speed;

    }

    jump() {
        this.currentImage = 0;
        this.speedY = 30;
    }
}