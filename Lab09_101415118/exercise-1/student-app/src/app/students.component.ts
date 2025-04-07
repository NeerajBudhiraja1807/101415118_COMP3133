import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  template: `<h2>{{ title }}</h2>
             <p>{{ getCurrentDate() }}</p>`
})
export class StudentsComponent {
  title = "COMP3133 - Students List";

  getCurrentDate() {
    return new Date().toLocaleDateString();
  }
}
