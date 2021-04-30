import { Component, OnInit } from '@angular/core'
import { QuestionRepository } from '../services/repositories/questionRepository.service';


@Component({
    selector: 'questions-list',
    templateUrl: './questions-list.component.html',
    styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent {
    searchText: string;
    questions: Question[];
    isLoading: boolean;
    filteredQuestions: Question[];
    constructor(questionRepository: QuestionRepository) {
        this.isLoading = true;
        questionRepository.getAllQuestions().subscribe(result => {
            this.questions = result;
            this.filteredQuestions = this.questions;
            this.isLoading = false;
        }, error => console.error(error));
    }



    search() {
        if (this.searchText.length > 0) {
    
            this.filteredQuestions = this.questions.filter(t => t.questionText.search(new RegExp(this.searchText, "i")) >= 0);
        }
        else {
            this.filteredQuestions = this.questions
        }
    }
}
