import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../resources/endpoints';
@Injectable()
export class CategoryRepository {

    constructor(private http: HttpClient) {
    }

    getCategoryList() {
        return this.http.get<Category[]>(ROOT_URL + '/categories')
    }
}