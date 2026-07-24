import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  map,
  tap,
  retry,
  catchError
} from 'rxjs/operators';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.apiUrl).pipe(

      retry(2),

      tap(() => console.log('Courses fetched successfully')),

      map(courses =>
        courses.sort((a, b) => a.id - b.id)
      ),

      catchError(this.handleError)

    );

  }

  getCourseById(id: number): Observable<Course> {

    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(

      retry(2),

      tap(() => console.log('Course fetched:', id)),

      catchError(this.handleError)

    );

  }

  addCourse(course: Course): Observable<Course> {

    return this.http.post<Course>(this.apiUrl, course).pipe(

      tap(() => console.log('Course Added')),

      catchError(this.handleError)

    );

  }

  updateCourse(course: Course): Observable<Course> {

    return this.http.put<Course>(
      `${this.apiUrl}/${course.id}`,
      course
    ).pipe(

      tap(() => console.log('Course Updated')),

      catchError(this.handleError)

    );

  }

  deleteCourse(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    ).pipe(

      tap(() => console.log('Course Deleted')),

      catchError(this.handleError)

    );

  }

  private handleError(error: any) {

    console.error('HTTP Error:', error);

    return throwError(() => error);

  }

}