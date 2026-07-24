import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  submitted = false;
  studentName: string = '';
  studentEmail: string = '';
  courseId: string = '';
  preferredSemester: string = '';
  agreeToTerms: boolean = false;

  onSubmit(form: NgForm) {
  this.submitted = true;

  console.log('Enrollment Successful!');
  console.log(form.value);
  console.log('Form Valid:', form.valid);
}
}