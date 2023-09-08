import { Component } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent {
  user: any
  pass: any
  IsLoggedIn:boolean=false

  constructor() {
  }

  Admin() {
    if (this.user === 'admin' && this.pass === 'password') {
      // Successful login
      alert('Successful login!');
      // Redirect to admin page
      window.location.href="/adminDashboard";
      // ...
    } else {
      // Invalid login
      alert('Invalid login!');
    }
    // Clear form fields
  }
  Logout(){

    localStorage.removeItem("User");
    location.href = "/Admin";
    
  }
}
