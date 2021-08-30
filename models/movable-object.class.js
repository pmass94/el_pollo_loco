class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    lastIdle = 0;
    stopMoving = false;







    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else if (this instanceof Endboss) {
            return false;

        } else {
            return this.y < 150;
        }
    }

    playAnimation(images) {
        if (!this.stopMoving) {

            let i = this.currentImage % images.length
            let path = images[i];
            if (path == 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png') {
                this.stopMoving = true;
            }
            this.img = this.imageCache[path];

            this.currentImage++;
        }
    }


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.currentImage = 0;
        this.speedY = 25;
    }

    isJumping() {
        return this.speedY > 0 && this.isAboveGround();
    }

    isLanding() {
        return this.speedY < 0 && this.isAboveGround();
    }

    isInAir() {
        return this.isJumping() || this.isLanding();
    }


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    isCollidingEnemiesAndCollectable(mo) {
        return this.x + this.width - 35 > mo.x &&
            this.y + this.height - 50 > mo.y &&
            this.x - 70 < mo.x &&
            this.y + 130 < mo.y + mo.height
    }

    isCollidingEndboss(mo) {
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

    isLastHit() {
        let timePassed;
        timePassed = new Date().getTime() - this.lastHit;

        timePassed = timePassed / 1000;
        return this.energy <= 0 && timePassed < 0.3;
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }

    longIdle() {
        this.lastIdle = new Date().getTime();

    }

    isLongIdle() {
        let timepassed = new Date().getTime() - this.lastIdle;
        timepassed = timepassed / 1000;

        return timepassed > 5;
    }


}