import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  isLoading = true;

  courses: Course[] = [];

  selectedCourseId?: number;

  ngOnInit(): void {
    this.loadCourses();
    this.isLoading = false;
  }

  loadCourses(): void {
    this.courses = this.courseService.getCourses();
  }

  addDummyCourse(): void {
    const nextId = this.courses.length + 1;

    this.courseService.addCourse({
      id: nextId,
      name: 'New Course ' + nextId,
      code: 'NEW' + nextId,
      credits: 3,
      gradeStatus: 'pending'
    });

    this.loadCourses();
  }

  onEnroll(courseId: number): void {
    this.enrollmentService.enroll(courseId);
    this.selectedCourseId = courseId;
  }

  onUnenroll(courseId: number): void {
    this.enrollmentService.unenroll(courseId);

    if (this.selectedCourseId === courseId) {
      this.selectedCourseId = undefined;
    }
  }

  isEnrolled(courseId: number): boolean {
    return this.enrollmentService
      .getEnrolledCourses()
      .some(course => course.id === courseId);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}