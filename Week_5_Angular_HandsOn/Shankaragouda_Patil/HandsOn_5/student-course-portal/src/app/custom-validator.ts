import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noLeadingSpaceValidator(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  if (value && value.startsWith(' ')) {
    return { leadingSpace: true };
  }

  return null;
}