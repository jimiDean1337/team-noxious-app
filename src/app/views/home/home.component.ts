import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, first, map, Observable, tap } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'tna-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter = new BehaviorSubject(0);
  Achievements$: Observable<any>;
  Features$: any;
  Courses$: any;
  Content$: any;
  Content: any = {};

  constructor(private dataService: DataService, private title: Title) {
    this.Achievements$ = new Observable();
    this.Features$ = new Observable();
    this.Courses$ = new Observable();
  }

  private get content() {
    return this.Content$ = this.dataService.getDBObject('home')
    .valueChanges()
    .pipe(
      first(),
      map((data: any) => this.Content = data),
      tap(res => console.log("Get Content", res)),
      );
  }

  private get courses() {
    return this.Courses$ = this.dataService.getDBList('courses').valueChanges().pipe(tap((res: ICourse) => console.log("Get Courses", res)));
  }

  private get achievements() {
    return this.Achievements$ = this.dataService.getDBList('tna-achievements').valueChanges().pipe(tap(res => console.log("Get Achievements", res)))
  }

  private get features() {
    return this.Features$ = this.dataService.getDBList('features').valueChanges().pipe(tap(res => console.log("Get Features", res)))
  }

  public getFeatures() {
    return this.features;
  }

  public getAchievements() {
    return this.achievements;
  }

  public getContent() {
    return this.content;
  }

  public getCourses() {
    return this.courses;
  }

  ngOnInit(): void {

    this.getFeatures();
    this.getAchievements();
    this.getCourses()
    this.getContent().subscribe();
    this.title.setTitle('Home | Team Noxious Academy - Tech Education For Everyone')
    // Initialising the canvas
    let canvas: any = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    let letters: any = 'TEAMNOXIOUSACADEMY   TEAMNOXIOUSACADEMY   TEAMNOXIOUSACADEMY   TEAMNOXIOUSACADEMY   TEAMNOXIOUSACADEMY   TEAMNOXIOUSACADEMY   TEAMNOXIOUSACADEMY';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 10,
    columns = canvas.width / fontSize;

    // Setting up the drops
    let drops: any = [];
    for (var i = 0; i < columns; i++) {
    drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < drops.length; i++) {
          let text: any = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillStyle = '#0f0';
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          drops[i]++;
          if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
          }
        }
    }

    // Loop the animation
    setInterval(draw, 33);
  }

}
