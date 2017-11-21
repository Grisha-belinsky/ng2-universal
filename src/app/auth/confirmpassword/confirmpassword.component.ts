import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute,
      private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle('Reset Account | Bizns Tool');
    let param_id = this.route.snapshot.params['id'];
    let param_code = this.route.snapshot.params['code'];
    this.authService.getConfirmation(param_id, param_code)
        .subscribe(
            data => {
              this.router.navigate(['/login']);
            },
            error => {
                this.router.navigate(['/confirm']);
            }
        );
  }
}
