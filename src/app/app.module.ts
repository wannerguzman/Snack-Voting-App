import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDWq0CLk1Pz_VoQBS_A5JVM6D3Rx6fcBzE",
  authDomain: "snackvotingapp.firebaseapp.com",
  databaseURL: "https://snackvotingapp.firebaseio.com",
  projectId: "snackvotingapp",
  storageBucket: "snackvotingapp.appspot.com",
  messagingSenderId: "349293908461"
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
