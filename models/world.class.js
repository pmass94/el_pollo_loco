class World {
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];
    coinBar = new CoinBar();
    botellaBar = new BotellaBar();
    endboss = new Endboss();
    endbossHealthBar = new Endbossbar();
    coins = [];
    botellas = [];

    claim_coin = new Audio('audio/coinGrab.mp3');
    claim_botella = new Audio('audio/claimBotella.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkCollectedObjects(this.level.coins, this.level.botellas);
            this.checkThrowableObjects();
            /*this.checkDistanceToEnemy();*/
        }, 1000 / 10);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        })

        /*if (this.character.isCollidingEndboss(this.endboss) && !this.endboss.isDead()) {
            this.character.hit();
            
            this.character.collision = true;
            this.character.x -= 5;
        }
        this.healthBar.setPercentage(this.character.energy);*/
    }

    checkCollectedObjects(coins, botellas) {
        coins.forEach((coin, index) => {
            if (this.character.isCollidingEnemiesAndCollectable(coin)) {
                this.coins.push(coin);
                coins.splice(index, 1);
                this.coinBar.setPercentage(this.coins.length);
                this.claim_coin.play();
            }
        });
        botellas.forEach((botella, index) => {
            if (this.character.isCollidingEnemiesAndCollectable(botella)) {
                this.botellas.push(botella);
                botellas.splice(index, 1);
                this.botellaBar.setPercentage(this.botellas.length);
                this.claim_botella.play();
            }
        })

    }

    checkThrowableObjects() {
        if (this.keyboard.D && !this.character.isDead() && !this.character.otherDirection && this.botellas.length > 0) {
            this.botellaBottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.throwableObjects.push(this.botellaBottle);
            this.botellas.splice(0, 1);
            this.botellaBar.setPercentage(this.botellas.length);

        }
        //this.checkCollisionWithThrowableObject();
    }




    /*checkDistanceToEnemy() {
        if (this.character.isNear(this.endboss, 300) && !this.endboss.isDead() ) {
            this.endboss.animateIntro();
            //code sound
            //code

            this.endboss.otherDirection = false;
            this.endboss.x -= this.endboss.speedX;
        }
    }*/





    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        // ------ Space for fixed objects ------
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);



        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.botellas);

        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.coinBar);
        this.addToMap(this.botellaBar);
        this.addToMap(this.endbossHealthBar);




        // Draw() wird immer wieder aufgerufen
        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();

    }
}



