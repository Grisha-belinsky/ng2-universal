import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor( private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle('Reset Account | Bizns Tool');
  }

}
