import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Category} from "../models/category";


@Injectable()
export class CategoriesService {
  private API_PATH = 'https://private-385270-curriculumvitae.apiary-mock.com/categories';

  constructor(private http: Http) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json() || []);
  }

}
