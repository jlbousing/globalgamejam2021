
import { QuestionObject } from "./QuestionObject.js";

export class CreateElements {

    constructor(scene){
        this.relateScene = scene;
        this.relateScene.questionObject = new QuestionObject(this.relateScene);
        this.relateScene.arrayCofres = [];
    }

    createPlayer(){
        

        this.relateScene.player = this.relateScene.physics.add.sprite(200,100,"player");
        this.relateScene.animationPlayer = this.relateScene.anims.create({
            key: "pj-walk",
            frames: this.relateScene.anims.generateFrameNumbers('player'),
            frameRate: 10,
            repeat: -1 //infinite loops
        });
    }

    createCofre(){

        this.relateScene.questionObject.createQuestion();
        


        this.relateScene.question.options.forEach((item) => {
            //this.relateScene.arrayCofres.push(this.relateScene.cofre);
            //let indexCofre = this.relateScene.arrayCofres.length - 1;

            let worldX = Phaser.Math.Between(0,650);
            let worldY = Phaser.Math.Between(200,400);

            this.relateScene.cofre = this.relateScene.physics.add.sprite(worldX,worldY,"cofre").setImmovable();
            this.relateScene.cofre.question = this.relateScene.question.question;
            this.relateScene.cofre.option = item;
            this.relateScene.cofre.correct = this.relateScene.question.correct;
            this.relateScene.animationCofre = this.relateScene.anims.create({
                key: "cofre-idle",
                frames: this.relateScene.anims.generateFrameNumbers('cofre'),
                frameRate: 2,
                repeat: -1 //infinite loops
            });

            this.relateScene.cofre.anims.play("cofre-idle",true);
            console.log(this.relateScene.cofre);
            this.relateScene.add.text(this.relateScene.cofre.x,this.relateScene.cofre.y - 60,`option ${item.option}`,
            { fontFamily: 'Arial', color: '#fff', backgroundColor: "#000", fontSize: 18 });

            this.relateScene.physics.add.collider(this.relateScene.player,
            this.relateScene.cofre,
                this.collisionPlayerCofre,null,
                { this: this, cofre: this.relateScene.cofre });

            
        });
    }

    createFuego(){

        this.relateScene.fuego = this.relateScene.physics.add.sprite(500,200,"fuego").setImmovable();
        this.relateScene.animationCofre = this.relateScene.anims.create({
            key: "fuego",
            frames: this.relateScene.anims.generateFrameNumbers('fuego'),
            frameRate: 2,
            repeat: -1 //infinite loops
        });

        this.relateScene.fuego.anims.play("fuego",true);
    }

    createEnemy(){

        this.relateScene.enemy = this.relateScene.physics.add.sprite(400,400,"enemy");
        this.relateScene.animationPlayer = this.relateScene.anims.create({
            key: "lier-walk",
            frames: this.relateScene.anims.generateFrameNumbers('enemy'),
            frameRate: 10,
            repeat: -1 //infinite loops
        });

        this.relateScene.enemy.anims.play("lier-walk",true);
        this.relateScene.enemy.setVelocityX(this.relateScene.velocity);
    }

    collisionPlayerCofre(){

        console.log(this.cofre.option);

        this.this.relateScene.scene.pause();
        this.this.relateScene.scene.launch("ModalQuestion",{
            question: this.cofre.question,
            option: this.cofre.option,
            correct: this.cofre.correct
        });
    }


    run(){
        
        this.createPlayer();
        this.createCofre();
        this.createFuego();
        this.createEnemy();
    }
}