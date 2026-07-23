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

  @Output() enrollRequested = new EventEmitter<number>();

  enroll(): void {
    this.enrollRequested.emit(this.course.id);
  }

}