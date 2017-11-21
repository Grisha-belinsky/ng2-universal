import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  option: any;
  itemVisible: boolean;

  constructor( private authService: AuthService, private titleService: Title ) { }

  ngOnInit() {
    this.option = {
      Name: ''
    };
    this.itemVisible = true;
    this.titleService.setTitle('Manage CRM Account | Bizns Tool');
  }

  onSubmit(form: any): void {
    console.log(this.option);
    if (form.valid) {
      this.getPassword();
    }
  }

  getPassword() {
    this.authService.forget(this.option)
        .subscribe(
            data => {
              this.itemVisible = false;
            },
            error => {
              this.itemVisible = false;
            });
  }

}
