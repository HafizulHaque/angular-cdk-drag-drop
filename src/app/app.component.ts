import { Component } from '@angular/core';
import { UserInterface } from './user.interface';
import { userData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserInterface[] = userData;
}
