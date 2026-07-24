import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course.service';
import { Notification } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  constructor(private courseService: CourseService) {}

  portalName = 'Student Course Portal';

  isPortalActive = true;

  searchTerm = '';

  message = '';

  availableCourses = 0;

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.availableCourses = courses.length;

      },

      error: (err) => {

        console.error('Error loading courses:', err);

      }

    });

    console.log('HomeComponent initialised - courses loaded');

  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

}