import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UsersService } from "./users.service";

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'Snack Voting App';
}
