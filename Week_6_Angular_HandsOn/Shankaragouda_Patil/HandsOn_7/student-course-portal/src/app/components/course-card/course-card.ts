import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CourseTitlePipe } from '../../pipes/course-title-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    Highlight,
    CourseTitlePipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course: any;

  @Input() isEnrolled = false;

  @Output() enrollRequested = new EventEmitter<number>();

  @Output() unenrollRequested = new EventEmitter<number>();

  toggleEnrollment(): void {
    if (this.isEnrolled) {
      this.unenrollRequested.emit(this.course.id);
    } else {
      this.enrollRequested.emit(this.course.id);
    }
  }
}