import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionRepository } from '../services/repositories/questionRepository.service';


@Component({
    selector: 'add-question',
    templateUrl: './add-question.component.html',
    styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent {
     question:string;
    answer:string ;

    constructor(private questionRepository: QuestionRepository) {
       
    }

    postQuestion() {


            
        this.questionRepository.addQuestion(<Question>{ questionText: this.question, answer: this.answer }).subscribe(data => console.log(data));
        //console.log(this.question);
    }
}