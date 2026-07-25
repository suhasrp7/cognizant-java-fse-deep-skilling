import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';

export const selectEnrollmentState =
createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledCourses = createSelector(
  selectEnrollmentState,
  state => state.enrolledCourseIds
);