import { Routes } from '@angular/router';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';

import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const enrollmentRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: EnrollmentForm
  },
  {
    path: 'reactive',
    component: ReactiveEnrollmentForm,
    canDeactivate: [unsavedChangesGuard]
  }
];