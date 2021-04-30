import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../../resources/endpoints';
@Injectable()
export class QuestionRepository {

    constructor(private http: HttpClient) {
    }

    getAllQuestions() {
        return this.http.get<Question[]> (ROOT_URL+'/questions')
    }

    addQuestion(question: Question) {
        return this.http.post<Question>(ROOT_URL + '/questions', { questionText: question.questionText, answer: question.answer });
    }
}