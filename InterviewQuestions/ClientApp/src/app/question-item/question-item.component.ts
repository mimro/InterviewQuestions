import { Component, Input } from '@angular/core'

@Component({
    selector: 'question-item',
    templateUrl: './question-item.component.html',
    styleUrls:['./question-item.component.css']
})
export class QuestionItemComponent {
    @Input() questionText: string;
    @Input() questionAnswer: string;
    @Input() index: number;
    @Input() referenceLink: string;
}