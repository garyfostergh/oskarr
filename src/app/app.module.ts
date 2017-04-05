import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule } from '@angular/router';
import { UserService } from './shared/user.service';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';

var firebaseConfig = {
    apiKey: "AIzaSyApMuZ3ZL_fg9Wu-7hzu8H-jqYDGXY3kps",
    authDomain: "oskarr-44ade.firebaseapp.com",
    databaseURL: "https://oskarr-44ade.firebaseio.com",
    projectId: "oskarr-44ade",
    storageBucket: "oskarr-44ade.appspot.com",
    messagingSenderId: "504623069976" 
  };

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),

    RouterModule.forRoot([
      { path: "about", component: AboutComponent },
      {
        path: "categories", children: [        
          { path: "", component: CategoriesComponent },
          { path: ":name", component: CategoriesComponent }
        ]
      },
      { path: "**", redirectTo: "about" }
    ], 
        
    )




  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
