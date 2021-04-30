import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddQuestionComponent } from './add-question/add-question.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { QuestionRepository } from './services/repositories/questionRepository.service';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        QuestionItemComponent,
        QuestionsListComponent,
        AddQuestionComponent,
        ContactFormComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: QuestionsListComponent, pathMatch: 'full' },
            { path: 'add-question', component: AddQuestionComponent }
        ]),
        BrowserAnimationsModule,
        MatExpansionModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    providers: [QuestionRepository],
    bootstrap: [AppComponent]
})
export class AppModule { }
