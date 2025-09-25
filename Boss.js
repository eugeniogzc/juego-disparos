/**
 * Jefe final del juego.
 * @extends Opponent
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el jefe
     */
    constructor (game) {
        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = OPPONENT_SPEED * 2, // El doble de velocidad que el oponente normal
            myImage = "assets/jefe.png",
            myImageDead = "assets/jefe_muerto.png";

        super(game);
        this.speed = speed;
        this.myImage = myImage;
        this.myImageDead = myImageDead;
        this.image.src = myImage;
    }
    /**
     * Mata al jefe final
     */
    collide() {
        
        if (!this.dead) {
            this.game.score++;
            setTimeout(() => {
                this.game.removeOpponent();
            }, 2000);
            super.collide();
        }

    }
}
