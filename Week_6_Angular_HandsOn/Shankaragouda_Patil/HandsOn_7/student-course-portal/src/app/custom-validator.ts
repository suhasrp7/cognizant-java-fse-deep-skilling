import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noLeadingSpaceValidator(
  control: AbstractControl
): ValidationErrors | null {

  if (control.value && control.value.startsWith(' ')) {
    return { leadingSpace: true };
  }

  return null;
}

export function invalidCourseValidator(
  control: AbstractControl
): ValidationErrors | null {

  if (control.value === 'XX101') {
    return { invalidCourse: true };
  }

  return null;
}