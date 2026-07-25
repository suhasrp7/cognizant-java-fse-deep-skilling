import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of([
      {
        id: 1,
        title: 'Angular Basics',
        description: 'Learn Angular fundamentals',
        instructor: 'John'
      },
      {
        id: 2,
        title: 'NgRx Store',
        description: 'State Management using NgRx',
        instructor: 'David'
      },
      {
        id: 3,
        title: 'RxJS',
        description: 'Reactive Programming',
        instructor: 'Smith'
      }
    ]);
  }
}