import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../../interfaces/teacher';

@Component({
  selector: 'tna-teacher-profile-card',
  templateUrl: './teacher-profile-card.component.html',
  styleUrls: ['./teacher-profile-card.component.scss']
})
export class TeacherProfileCardComponent implements OnInit {
  @Input() teacher?: Teacher;
  @Input() size: string = 'col-lg-6 col-md-6 col-12';
  constructor() { }

  ngOnInit(): void {
  }

}