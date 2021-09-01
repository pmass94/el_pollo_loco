class Endboss extends MovableObject {
    height = 400;
    width = 335;
    y = 45;
    currentImage = 0;
    dead = false;
    characterNearEndboss = false;
    energyEndboss = 100;
    lastCollisionEndboss = 0;
    bottleAvailable = false;
    lastTimePressedD = 0;
    killedCharacter = false;
    characterEscaped = false;

    IMAGES_ALERT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];
    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];
    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];
    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];

    AUDIO_SCREAM = new Audio('audio/scream.mp3');
    AUDIO_HURT = new Audio('audio/endboss_hurt.mp3');

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 6500;
        this.speed = 2;
        this.animate();
        this.endbossBar = new EndbossStatusBar(this.x + 100, this.y - 10);
    }

    animate() {
        setInterval(() => {
            if (this.characterNearEndboss && this.x > 6000) {
                this.otherDirection = false;
                this.moveLeft();
                this.endbossBar.x = this.x + 100;
            } 
            if(this.characterEscaped) {
                this.speed = 5;
                this.otherDirection = true;
                this.moveRight();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.endbossIsHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.AUDIO_HURT.play();
                if (!this.endbossIsDead()) {
                    setTimeout(() => {
                        this.playAnimation(this.IMAGES_ATTACK);
                        this.AUDIO_SCREAM.play();
                        this.AUDIO_SCREAM.volume = 0.2;
                        this.x -= 20;
                        this.endbossBar.x = this.x + 100;
                    }, 1000);
                }
            } else if (this.endbossIsDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.AUDIO_SCREAM.pause();
                setTimeout(() => {
                    this.applyGravity();
                }, 1000);
                setTimeout(() => {
                    this.dead = true;
                }, 1000);
            } else if (!this.bottleAvailable && this.x <= 6000 && !this.killedCharacter && !this.characterEscaped) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.AUDIO_SCREAM.play();
                this.AUDIO_SCREAM.volume = 0.2;
                this.x -= 25;
                this.endbossBar.x = this.x + 100;
            } else if (this.killedCharacter) {
                this.playAnimation(this.IMAGES_ALERT);
                this.AUDIO_SCREAM.pause();
            } else {
                if (this.characterNearEndboss && this.x > 6000 || this.characterEscaped) {
                    this.playAnimation(this.IMAGES_WALKING);
                    this.AUDIO_SCREAM.play();
                    this.AUDIO_SCREAM.volume = 0.2;
                } else if (!this.pressedD() && this.x <= 6000 && this.bottleAvailable) {
                    this.playAnimation(this.IMAGES_ATTACK);
                    this.AUDIO_SCREAM.play();
                    this.AUDIO_SCREAM.volume = 0.2;
                    this.x -= 20;
                    this.endbossBar.x = this.x + 100;
                } else if (this.x <= 6000) {
                    this.playAnimation(this.IMAGES_ALERT);
                }
            }
        }, 200);
    }

    hitEndboss() {
        this.energyEndboss -= 4;
        if (this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else {
            this.lastCollisionEndboss = new Date().getTime();
        }
        console.log(this.energyEndboss);
    }

    endbossIsHurt() {
        let timepassed = new Date().getTime() - this.lastCollisionEndboss;
        timepassed = timepassed / 1000;
        return timepassed < 0.25;
    }

    endbossIsDead() {
        return this.energyEndboss == 0;
    }

    pressedD() {
        let timepassed = new Date().getTime() - this.lastTimePressedD;
        timepassed = timepassed / 1000;
        return timepassed < 2;
    }


}