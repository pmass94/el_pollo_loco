class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastCollision = 0;
    bottleAmount = 0;
    coinAmount = 0;
    AUDIO_BOTTLE = new Audio('audio/bottle.mp3');
    AUDIO_COIN = new Audio('audio/coin.mp3');

    // Colliding with chicken, endboss and bottles
    isColliding(mo) {
        return this.x + this.width - 35 > mo.x &&
            this.y + this.height + 20 > mo.y &&
            this.x - 70 < mo.x &&
            this.y < mo.y + mo.height;
    }

    // Colliding with coins
    isCollidingCoin(mo) {
        return this.x + this.width - 35 > mo.x &&
            this.y + this.height - 50 > mo.y &&
            this.x - 70 < mo.x &&
            this.y + 130 < mo.y + mo.height;
    }

    // Damage taken by chicken
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastCollision = new Date().getTime();
        }
    }

    // Damage taken by endboss
    hitByEndboss() {
        this.energy -= 40;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastCollision = new Date().getTime();
        }
    }

    // Time playing images when hurt
    isHurt() {
        let timepassed = new Date().getTime() - this.lastCollision;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject || this instanceof Endboss) {
            return true;
        } else if (this.isDead()) {
            return true;
        } else {
            return this.y < 150;
        }
    }

    jump() {
        this.speedY = 25;
    }

    collectBottle() {
        this.bottleAmount += 10;
        this.AUDIO_BOTTLE.play();
        this.AUDIO_BOTTLE.volume = 0.3;
    }

    reduceBottle() {
        this.bottleAmount -= 10;

    }

    collectCoin() {
        this.coinAmount += 5;
        this.AUDIO_COIN.play();
        this.AUDIO_COIN.volume = 0.3;
    }

}