import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../models/course';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: Course;

  enrolledCourses$: Observable<number[]>;

  constructor(private store: Store) {
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }

  enroll() {
    this.store.dispatch(
      EnrollmentActions.enrollInCourse({
        courseId: this.course.id
      })
    );
  }

  unenroll() {
    this.store.dispatch(
      EnrollmentActions.unenrollFromCourse({
        courseId: this.course.id
      })
    );
  }
}