class Level {

    enemies;
    clouds;
    level_end_x = 4500;
    backgroundObjects;
    coins;
    botellas

    constructor(enemies, clouds, backgroundObjects, coins, botellas) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.botellas = botellas;
    }

}