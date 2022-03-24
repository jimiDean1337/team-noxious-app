import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DataService } from './data.service';

interface User {
  firstname?: string;
  lastname?: string;
  email?: string;
  username?: string;
  linkedAccounts?: any[];
  joinedOn?: Date;
  interests?: string[];
  avatar?: any;
  level?: string;
  isPremium?: boolean;
  courses?: any;
  roles?: string[];
  providerId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDefaults: User = {
    linkedAccounts: [],
    joinedOn: new Date(),
    interests: [
      'Team Noxious'
    ],
    level: 'NOOB',
    isPremium: false,
    courses: {
      inProgress: [
        {courseId: 'welcome101', chapter: 1, startedOn: new Date(), isPremium: false}
      ]
    },
    roles: ['MEMBER']
  };

  constructor(public dataService: DataService) {
  }

  public createFromEmail(firstname: string, lastname: string, email: string, username: string, userId: any) {
    const props = {
      firstname,
      lastname,
      email,
      username,
      avatar: this.generateAvatar(firstname, lastname),
      providerId: '',
      ...this.userDefaults
    }
    return this.dataService.getCollection('users').doc(userId).set(props)
  }

  public createUserFromGithub(provider: any) {
    const props = {
      firstname: 'Not Set',
      lastname: 'Not Set',
      email: provider.user.email,
      username: provider.user.displayName,
      avatar: provider.additionalUserInfo.profile.avatar_url,
      ...this.userDefaults
    };
    props.linkedAccounts?.push('Github');
    return this.dataService.getCollection('users').doc(provider.user.uid).set(props)
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

    return this.dataService.getCollection('users').doc(provider.user.uid).set(props)
  }

  public update(uid: string, data: User) {
    // TODO: Finish
    return this.dataService.getDocument('users', uid).update(data);
  }

  public delete(uid: string) {
    // TODO: Finish
  }


  public getUserById(userId: string): AngularFirestoreDocument<User> {
    return this.dataService.getCollection('users').doc(userId);
  }

  public generateAvatar(firstname: string, lastname: string): string {
    const url = 'https://ui-avatars.com/api/?';
    return `${url}name=${firstname}+${lastname}&background=3ed12b`;
  }
}

/* Github Auth AdditionalUserInfo Profile Properties
avatar_url?: string;
bio?: string;
blog?: string;
company?: string;
created_at?: string;
email?: string;
events_url?: string;
followers?: number;
followers_url?: string;
following?: number;
following_url?: string;
gists_url?: string;
gravatar_id?: string;
hireable?: boolean;
html_url?: string;
id?: number;
location?: string;
login?: string;
name?: string;
node_id?: string;
organizations_url?: string;
public_gists?: number;
public_repos?: number;
received_events_url?: string;
repos_url?: string;
site_admin?: boolean;
starred_url?: string;
subscriptions_url?: string;
twitter_username?: string;
type?: string;
updated_at?: string;
url?: string;
*/

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
