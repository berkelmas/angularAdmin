import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  handleLoginSubmit(form: NgForm) {
    this.fireAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
      .then(res => {
        this.router.navigate(['/pages/makaleler']);
        return res;
      })
      .catch(err => err);
  }

}
