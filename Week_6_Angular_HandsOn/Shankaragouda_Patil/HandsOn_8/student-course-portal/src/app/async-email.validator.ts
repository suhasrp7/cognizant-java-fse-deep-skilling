import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map, timer } from 'rxjs';

export function emailTakenValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return timer(800).pipe(
      map(() => {
        return control.value === 'test@example.com'
          ? { emailTaken: true }
          : null;
      })
    );
  };
}