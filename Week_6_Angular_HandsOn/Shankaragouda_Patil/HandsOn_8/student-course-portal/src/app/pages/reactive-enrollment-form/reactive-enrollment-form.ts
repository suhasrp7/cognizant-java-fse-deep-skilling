import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  noLeadingSpaceValidator,
  invalidCourseValidator
} from '../../custom-validator';

import { emailTakenValidator } from '../../async-email.validator';
import { CanComponentDeactivate } from '../../guards/unsaved-changes-guard';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements CanComponentDeactivate {

  enrollmentForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.enrollmentForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          noLeadingSpaceValidator
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          emailTakenValidator()
        ]
      ],

      courseId: [
        '',
        [
          Validators.required,
          invalidCourseValidator
        ]
      ],

      semester: [
        '',
        Validators.required
      ],

      skills: this.fb.array([
        this.fb.control('')
      ])

    });

  }

  get skills(): FormArray {
    return this.enrollmentForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    console.log('Reactive Enrollment Successful!');
    console.log(this.enrollmentForm.value);

    // Mark form as clean after submission
    this.enrollmentForm.markAsPristine();
  }

  canDeactivate(): boolean {
    if (this.enrollmentForm.dirty) {
      return window.confirm('You have unsaved changes. Leave this page?');
    }
    return true;
  }

}