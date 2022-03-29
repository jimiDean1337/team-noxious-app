import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'tna-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User | undefined = {};
  updateModel: User = {};

  alert: any = {
    show: false,
    type: 'success',
    useTemplate: false,
    dismisOnTimeout: 15000,
    content: {
      title: 'Oh Snap!',
      text: 'User data has been updated!',
      html: ``,
    }
  }

  constructor(private cookie: CookieService, private userService: UserService, private route: ActivatedRoute) { }

  public async update(uid: any, data: User) {
    const results = await this.userService.update(uid, data)
    console.log('User Profile Updated', results)
    this.alert.show = true;
    this.alert.useTemplate = true;
    this.alert.content.title = `Oh yeah!`;
    this.alert.content.html = `<p>User Profile has been updated!</p>`;
  }

  public closeAlert(e: any) {
    this.alert.show = false;
    console.log('Alert was closed.', e)
  }

  openFileService(event: any) {

  }

  ngOnInit(): void {
    const uid = this.cookie.get('USER_ID')
    this.userService.getUserById(uid).valueChanges({idField: true})
    .subscribe(user => {
      console.log(user)
      this.currentUser = user;
    })
  }

}
