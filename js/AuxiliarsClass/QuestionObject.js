import { questions } from "../questions.js";

export class QuestionObject {

    constructor(scene){
        this.relateScene = scene;
    }

    createQuestion(){

        let index = Phaser.Math.Between(0,3);
        console.log(index);

        this.relateScene.question = questions[index];
        this.relateScene.titleQuestion = this.relateScene.add.text(200,20,this.relateScene.question.question,
            { fontFamily: 'Arial', color: '#fff', backgroundColor: "#000", fontSize: 18 });
    }


}