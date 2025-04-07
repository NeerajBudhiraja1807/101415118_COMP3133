import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [StudentComponent]
})
export class AppComponent {
  title = 'student-app';
}
