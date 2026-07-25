import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CourseCard } from './course-card';
import { Course } from '../../models/course';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;

  const mockCourse: Course = {
    id: 1,
    title: 'Data Structures',
    description: 'Learn DS',
    instructor: 'John'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideMockStore({
          initialState: {
            enrollment: {
              enrolledCourses: []
            }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    component.course = mockCourse;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive course input', () => {
    expect(component.course.title).toBe('Data Structures');
  });

  it('should dispatch enroll action', () => {
    let dispatchedAction: any;

    (store as any).dispatch = (action: any) => {
      dispatchedAction = action;
    };

    component.enroll();

    expect(dispatchedAction).toEqual(
      EnrollmentActions.enrollInCourse({
        courseId: 1
      })
    );
  });

  it('should dispatch unenroll action', () => {
    let dispatchedAction: any;

    (store as any).dispatch = (action: any) => {
      dispatchedAction = action;
    };

    component.unenroll();

    expect(dispatchedAction).toEqual(
      EnrollmentActions.unenrollFromCourse({
        courseId: 1
      })
    );
  });
});