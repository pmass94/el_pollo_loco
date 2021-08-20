class Level {

    enemies;
    clouds;
    level_end_x = 4500;
    backgroundObjects;
    coins;


    constructor(enemies, clouds, backgroundObjects, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
    }

}