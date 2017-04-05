import { AngularFire } from 'angularfire2';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
static NO_LOGIN = new User();
public user: User
private usersubject: BehaviorSubject<User> = new BehaviorSubject<User>(UserService.NO_LOGIN);
public user$: Observable<User> = this.usersubject.asObservable();

  constructor(private af: AngularFire) { 
    this.af.auth.subscribe(login => {
      if (login && login.auth && login.uid) {
        var newUser = new User();
        newUser.email = login.auth.email;
        newUser.uid = login.auth.uid;
        newUser.name = login.auth.displayName;
        newUser.photoURL = login.auth.photoURL;           
            } else {
              var newUser = UserService.NO_LOGIN;
            }
            this.user = newUser;
            this.usersubject.next(newUser);
    });
  }
  
  login(){
     console.log("UserService login",this.af.auth);
     this.af.auth.login();
     console.log("UserService login - after");
   }

   logout(){
     console.log("UserService logout");
     this.af.auth.logout();
   }
}
