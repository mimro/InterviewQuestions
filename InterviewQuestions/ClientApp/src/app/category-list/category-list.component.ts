import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
    searchText: string;
    questions: Category[];
    isLoading: boolean;
    filteredQuestions: Category[];
    constructor(httpClient: HttpClient) {
        this.isLoading = true;
       
    }
}
interface Category {
    categoryName: string;
    categoryId: string;
}