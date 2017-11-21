import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSetting } from '../../app-setting';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  model: any = {};
  isBusy = false;
  returnUrl: string;
  message: string;

  constructor(
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute,
      private titleService: Title
  ) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();
    this.titleService.setTitle('Log In | Bizns Tool');
    // get return url from route parameters or default to '/'
    this.returnUrl = AppSetting.appBase;
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.login();
    }
  }

  login() {
    this.isBusy = true;
    this.authService.login(this.model.email, this.model.password)
        .subscribe(
            data => {
              this.isBusy = false;
              console.log(this.returnUrl);
              /*window.location.href = this.returnUrl;*/
            },
            error => {
              this.isBusy = false;
              if (error != null) {
                this.message = JSON.parse(error._body).error_description;
              }
            });
  }
}
