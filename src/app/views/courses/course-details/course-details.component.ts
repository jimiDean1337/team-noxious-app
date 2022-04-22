import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'tna-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  public course: Course | any;
  selectedSectionTab: number = 0;
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  public selectSectionTab(id: number) {
    console.log(id)
    this.selectedSectionTab = id;
  }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('courseId');
    this.dataService.getDBList('courses')
    .valueChanges()
    .subscribe(courses => {
      console.log(courses, courseId)
      // courses.forEach((course: any) => {
      //   if (course.id === courseId) {
      //     this.course = course;
      //   }
      // })
      this.course = courses.filter((course: Course | any): any => {
        console.log(course)
           if (`${course.id}` === courseId) {
          return course;
        }
      })[0]
    })
  }

}
