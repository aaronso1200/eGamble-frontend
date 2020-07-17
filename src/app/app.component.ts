import {Component, OnInit} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'eGamble';

constructor(private dialog: MatDialog) {
}
  ngOnInit(): void {
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      hasBackdrop: true,
      panelClass: 'my-panel',
      autoFocus: false,
    });
  }

  signup() {
    const dialogRef = this.dialog.open(SignupComponent, {
      hasBackdrop: true,
      panelClass: 'my-panel',
      autoFocus: false,
      minWidth: '400px'
    });
  }

  logout() {

  }
}
