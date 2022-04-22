import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'tna-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  private Courses?: Observable<Course[]> | any;
  public coursesList?: Course[] | any;
  public selectedCourse?: Course;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  private get courses(): Observable<Course[] | any> {
    return this.Courses = this.dataService.getDBList('courses').valueChanges()
  }

  public getCoursesList() {
    this.courses.subscribe(courses => this.coursesList = courses)
  }

  public getSelectedCourse(id: number) {
    this.selectedCourse = this.coursesList[id];
  }

  goToCourseDetails(courseId: string) {
    this.router.navigate(['course-details', courseId], {relativeTo: this.route})
  }

  ngOnInit(): void {
    this.getCoursesList();
  }

}
