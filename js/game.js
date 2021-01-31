
//import { QuestionObject } from "./AuxiliarsClass/QuestionObject.js";
import { CreateElements } from "./AuxiliarsClass/CreateElements.js";


export class Game extends Phaser.Scene {

    
    constructor() {
        super({ key: "game"});
    }

    init(){
        //this.questionObject = new QuestionObject(this);
        this.createElements = new CreateElements(this);
    }

    preload(){

        //this.load.image("background","images/terrain-test.png");
        this.load.image("bg-terrain","images/ramon-sprites/bg-terrain.png");
        this.load.image("logo","images/ramon-sprites/logo.png");
        this.load.image("gameover","images/gameover-test.png");
        //this.load.image("cofre","images/cofre-test.png");
        this.load.spritesheet("cofre","animations/cofre-test-animation.png",{
            frameWidth: 130,
            frameHeight: 100
        });
        //this.load.image("player","images/finder-pj-test-1.png");
        this.load.spritesheet("player","animations/finder-pj-run.png",{
            frameWidth: 120,
            frameHeight: 100
        });

        this.load.spritesheet("enemy","animations/lier-animation.png",{
            frameWidth: 120,
            frameHeight: 100
        });

        this.load.spritesheet("fuego","animations/fuego-animation.png",{
            frameWidth: 120,
            frameHeight: 100
        });
    }


    

    
    create(){

     
        this.velocity = 100;
        
        this.add.image(400,250,"bg-terrain");
        this.add.image(400,250,"logo");
        this.gameoverImage = this.add.image(400,90,"gameover");
        this.gameoverImage.visible = false;
        
        this.createElements.run();
        
        this.player.setCollideWorldBounds(true);
    
        
         this.cursors = this.input.keyboard.createCursorKeys();
        
    }

    enemyMove(){

        //console.log(this.enemy.x);
        

        if(this.enemy.x <= 0){

            this.enemy.setVelocityX(this.velocity);
        }
        
        if(this.enemy.x >= 800){
            this.enemy.setVelocityX(this.velocity * -1);
        }
    }

    update(){


        //MOVIMIENTO DE ENEMIGO
        this.enemyMove();

        if (this.cursors.left.isDown){
            this.player.setVelocityX(this.velocity * -1);
            this.player.anims.play("pj-walk",true);
        }
        else if (this.cursors.right.isDown){
            this.player.setVelocityX(this.velocity);
            this.player.anims.play("pj-walk",true);
        }
        else if (this.cursors.up.isDown){
            this.player.setVelocityY(this.velocity * -1);
            this.player.anims.play("pj-walk",true);
        }
        else if (this.cursors.down.isDown){
            this.player.setVelocityY(this.velocity);
            this.player.anims.play("pj-walk",true);
        }else{
            this.player.setVelocity(0,0);
            this.player.anims.stop();
        }
    }
}
