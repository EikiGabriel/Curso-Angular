import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  old = 24;
  userData = {
    email: 'joaquim@gmail.com',
    role: 'ADM',
  }

  title = 'curso-angular';
}
