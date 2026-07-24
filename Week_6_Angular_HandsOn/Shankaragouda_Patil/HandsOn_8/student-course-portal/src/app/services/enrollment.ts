import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourses: Course[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {

    this.courseService.getCourseById(courseId).subscribe({

      next: (course) => {

        if (!this.enrolledCourses.find(c => c.id === course.id)) {
          this.enrolledCourses.push(course);
        }

      }

    });

  }

  unenroll(courseId: number): void {

    this.enrolledCourses = this.enrolledCourses.filter(

      course => course.id !== courseId

    );

  }

  getEnrolledCourses(): Course[] {

    return this.enrolledCourses;

  }

}