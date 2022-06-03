import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'tna-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public currentUser: IUser = {}

  constructor(private router: Router, private cookie: CookieService, private userService: UserService) {
    this.currentUser = new Observable();
  }




  ngOnInit(): void {
    const uid = this.cookie.get('USER_ID');
    this.userService.getUserById(uid).valueChanges({idField: true})
    .subscribe((user: IUser | any) => this.currentUser = user);
  }

}
