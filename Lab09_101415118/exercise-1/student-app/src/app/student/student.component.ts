import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title = "Student Management System";

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return new Date().toLocaleDateString();
  }
}
