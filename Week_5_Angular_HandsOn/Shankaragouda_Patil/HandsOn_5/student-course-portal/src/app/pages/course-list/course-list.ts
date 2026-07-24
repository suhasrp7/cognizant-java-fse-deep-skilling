import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Java', code: 'JAVA201', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Python', code: 'PY301', credits: 2, gradeStatus: 'pending' },
    { id: 4, name: 'React', code: 'RCT401', credits: 4, gradeStatus: 'passed' },
    { id: 5, name: 'NodeJS', code: 'ND501', credits: 3, gradeStatus: 'pending' }
  ];

  selectedCourseId?: number;

  ngOnInit(): void {
  this.isLoading = false;
}

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}