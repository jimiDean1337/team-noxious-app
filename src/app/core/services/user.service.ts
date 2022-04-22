import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable, switchMap } from 'rxjs';
import * as moment from 'moment';
import { DataService } from './data.service';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Users?: AngularFirestoreCollection<any>;
  private user?: AngularFirestoreDocument<User>;
  private userDefaults: User = {
    linkedAccounts: [],
    joinedOn: new Date(),
    interests: [
      'Team Noxious'
    ],
    level: 'NOOB',
    isPremium: false,
    courses: {
      inProgress: [
        {courseId: 'WELCOME', chapter: 1, startedOn: new Date(), isPremium: false}
      ]
    },
    roles: ['MEMBER']
  };

  constructor(public dataService: DataService) {
  }

  private get users() {
    return this.Users = this.dataService.getCollection<User>('users');
  }

  public checkForUserById(userId: string) {
    return this.users.valueChanges({ idField: true })
    .pipe(map(users => {
      return users.filter((user: User) => user.idField === userId).length > 0;
    }))
  }

  public checkForUserByEmail(email: string) {
    return this.dataService.getCollection<User>('users')
    .valueChanges()
      .pipe(
        map(users => users.filter(user => user.email === email)),
        map(users => !!users.length)
    )
  }

  public createUserFromEmail(firstname: string, lastname: string, email: string, username: string, userId: any) {
    const props = {
      firstname,
      lastname,
      email,
      username,
      avatar: this.generateAvatar(firstname, lastname),
      providerId: '',
      ...this.userDefaults
    }
    return this.getUserById(userId).set(props)
  }


  public createUserFromGoogle(provider: any) {
    const props = {
      firstname: provider.additionalUserInfo.profile.given_name,
      lastname: provider.additionalUserInfo.profile.family_name,
      email: provider.additionalUserInfo.profile.email,
      username: provider.additionalUserInfo.profile.name,
      avatar: provider.additionalUserInfo.profile.picture,
      ...this.userDefaults
    };
    props.linkedAccounts?.push('Google');

    return this.getUserById(provider.user.uid).set(props)
  }

  public resetPassword(email: string) {
    return this.checkForUserByEmail(email)
    .pipe(switchMap((exists: boolean) => {
      if (exists) {
        this.dataService.getCollection('password-resets').add({ email, timestamp: new Date() });
        return Promise.resolve(true)
      } else {
        return Promise.reject('Email not found');
      }
    }))

  }

  public update(uid: string, data: User) {
    return this.getUserById(uid).update({...data});
  }

  public delete(uid: string) {
    return this.getUserById(uid).delete();
  }

  public getUserById(userId: string): AngularFirestoreDocument<User> {
    return this.user = this.users.doc(userId);
  }

  public generateAvatar(firstname: string, lastname: string): string {
    const url = 'https://ui-avatars.com/api/?';
    return `${url}name=${firstname}+${lastname}&background=3ed12b`;
  }
}

/* Google Auth AdditionalUserInfo Profile Properties
email?: string;
family_name?: string;
given_name?: string;
granted_scopes?: string;
id?: string;
locale?: string;
name?: string;
picture?: string;
verified_email?: boolean;
*/
