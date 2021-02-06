import { Component } from '@angular/core'


@Component({
    selector: 'questions-list',
    templateUrl: './questions-list.component.html'
})
export class QuestionsListComponent {
    searchText: string;
    filteredQuestions;
    constructor() {
        this.filteredQuestions = this.questions;
    }

    search() {
        if (this.searchText.length > 0) {
            this.filteredQuestions = this.questions.filter(t => t.questionText.search(this.searchText) >= 0);
        }
        else {
            this.filteredQuestions = this.questions
        }
    }
    questions = [{
        questionText: 'czym jest boxing i unboxing',
        questionAnswer: '<ul><li>Boxing jest konwersją typu bezpośredniego na typ referencyjny</li><li>Unboxing jest konwersją typu referencyjnego na bezpośredni</li></ul>'
    },
    {
        questionText: 'czym różni się klasa abstrakcyjna do interfejsu',
        questionAnswer: 'Klasa abstrakcyjna może zawierać implementacje metod a interfejs nie '
    },
    {
        questionText: 'czym to są typy bezpośrednie i referencyjne',
        questionAnswer: `<ul><li>Typy bezpośrednie są przechowywane na stosie np (int, bool, Datetime)</li><li> Typy referencyjne przechowywane są na stercie</li></ul>`
    },
    ]
}