import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {

  course: any;

  courses = [
    { id: 1, name: 'Angular', duration: '6 Weeks' },
    { id: 2, name: 'React', duration: '5 Weeks' },
    { id: 3, name: 'Vue', duration: '4 Weeks' }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courses.find(c => c.id === id);
  }
}