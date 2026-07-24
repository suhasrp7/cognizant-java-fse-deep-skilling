import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];
  allCourses: Course[] = [];

  selectedCourseId?: number;

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.loadCourses();

    this.route.queryParamMap.subscribe(params => {

      this.searchTerm = params.get('search') || '';

      if (this.searchTerm) {
        this.courses = this.allCourses.filter(course =>
          course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        this.courses = [...this.allCourses];
      }

    });

    this.isLoading = false;
  }

  loadCourses(): void {
    this.allCourses = this.courseService.getCourses();
    this.courses = [...this.allCourses];
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

  viewCourse(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }

  searchCourses(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.searchTerm
      },
      queryParamsHandling: 'merge'
    });
  }
}