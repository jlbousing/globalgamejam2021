//import { questions } from "./questions";

export class ModalQuestion extends Phaser.Scene {


    constructor(){
        super({key: "ModalQuestion"});
        //this.question = question;
        //this.answer = answer;
        //this.correctAnswer = correctAnswer;
    }

    init(data){
        console.log(data);
        this.question = data.question;
        this.answer = data.option.value;
        this.correct = data.correct;
    }

    preload(){

        this.load.image("background-black","images/background-option-answer.png");
    }


    create(){

        this.add.image(400,250,"background-black");

        this.add.text(200,200,this.question,{
            fontSize: 24,
            color: "#fff",
            fontFamily: "Arial",
            backgroundColor: "#000"
        });

        this.add.text(100,250,`Answer: ${this.answer}, is correct or not ?`,{
            fontSize: 24,
            color: "#fff",
            fontFamily: "Arial",
            backgroundColor: "#000"
        });

        const yesButton = this.add.text(200, 400, 'YES!', { fill: '#0f0' });
        yesButton.setInteractive();

        yesButton.on('pointerdown', () => {
            
            if(this.answer == this.correct){

                alert("YOU WIN!!!");
                window.location.reload();
            }else{

                this.scene.launch("gameover");
            }
            
        },this);


        const noButton = this.add.text(500, 400, 'NO', { fill: '#0f0' });
        noButton.setInteractive();

        noButton.on('pointerdown', () => { 
            console.log("clicked");

            this.scene.resume("game") 
            this.scene.stop();
        },this);
    }


}