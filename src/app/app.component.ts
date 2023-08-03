import { Component } from '@angular/core';
import { UserInterface } from './user.interface';
import { userData } from './data';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users: UserInterface[] = userData;

  drop(event: CdkDragDrop<UserInterface[]>){
    console.log(event)
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }
}
