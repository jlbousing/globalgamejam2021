export class GameOver extends Phaser.Scene {

    constructor(){
        super({key: "gameover"});
    }

    preload(){

        this.load.image("background-black","images/background-option-answer.png");
        this.load.image("gameover-img","images/gameover-test.png");

    }

    create(){

        this.add.image(400,250,"background-black");
        this.add.image(400,250,"gameover-img");

        this.playAGain = this.add.text(400,400,`Click Here to Play Again`,{
            fontSize: 24,
            color: "#fff",
            fontFamily: "Arial",
            backgroundColor: "#000"
        });

        this.playAGain.setInteractive();

        this.playAGain.on("pointerdown",() => {
            window.location.reload();
        });


    }
}