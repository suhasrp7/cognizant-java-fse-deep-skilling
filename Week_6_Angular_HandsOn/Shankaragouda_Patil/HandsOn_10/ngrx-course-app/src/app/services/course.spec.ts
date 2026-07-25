import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { CourseService } from './course';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all courses', async () => {
    const courses = await firstValueFrom(service.getCourses());

    expect(courses.length).toBe(3);
    expect(courses[0].title).toBe('Angular Basics');
    expect(courses[1].title).toBe('NgRx Store');
    expect(courses[2].title).toBe('RxJS');
  });
});