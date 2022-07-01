import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {first} from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
import { NgxMasonryAnimations, NgxMasonryOptions } from 'ngx-masonry';
import { animate, stagger, style } from '@angular/animations';

@Component({
  selector: 'tna-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public defaults?: any = {};

  public currentUser$: Observable<IUser | undefined> = new Observable();
  public updateModel: IUser = {};

  public alert: any = {
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


  public tagsOptions: NgxMasonryOptions = {
    itemSelector: '.grid-item',
    columnWidth: 130,
    gutter: 5,
  };

  public modalRef?: BsModalRef;

  public codingGridContent = {
    title: 'Preferences',
    subtitle: 'Languages, Tools, & More',
    description: 'Choose up to 3 interests to help Team Noxious better understand your interests.'
  }

  constructor(private cookie: CookieService, private userService: UserService, private dataService: DataService, private route: ActivatedRoute, private modal: BsModalService) { }

  public displayTags(event: any) {
    console.log(event)
  }

  public update(uid: any, data: IUser) {
    this.userService.update(uid, data)
    .then(results => {
      console.log('User Profile Updated', {data, results})
      this.updateModel = {};
      this.alert.show = true;
      this.alert.useTemplate = true;
      this.alert.content.title = `Oh yeah!`;
      this.alert.content.html = `<p>User Profile has been updated!</p>`;
    })
  }

  public closeAlert(e: any) {
    this.alert.show = false;
    console.log('Alert was closed.', e)
  }

  // Open avatar storage and customization modal
  public openFileService(event: any, modelProperty?: string) {
    console.log('Avatar File', event)
  }

  public openModal(content: TemplateRef<any>, options?: any) {
    this.modalRef = this.modal.show(content, Object.assign({...options}, {animated: true}));
    this.modalRef.onHidden?.subscribe(results => {
      console.log('Modal Hidden', results);
    })
  }

  ngOnInit(): void {

    const uid = this.cookie.get('_tna_USER_ID')
    this.currentUser$ = this.userService.getUserById(uid).valueChanges({idField: true})
    .pipe(
      tap(user => console.log('User', user))
    )
    this.dataService.getDBList('interests')
    .valueChanges()
    .subscribe(data => this.defaults.interests = data)
  }

}
