import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../models/course';
import { CourseCard } from '../../components/course-card/course-card';

import * as CourseActions from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  courses$!: Observable<Course[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CourseActions.loadCourses());
    this.courses$ = this.store.select(selectAllCourses);
  }
}