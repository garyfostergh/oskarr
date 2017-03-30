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
    apiKey: "AIzaSyBGn5gCkaHB_Z6QkCqgIDOQMlzIGZ0-nYw",
    authDomain: "garys-service-tracker.firebaseapp.com",
    databaseURL: "https://garys-service-tracker.firebaseio.com",
    storageBucket: "garys-service-tracker.appspot.com",
    messagingSenderId: "311523347379"    
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
