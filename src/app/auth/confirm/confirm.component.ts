import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor( private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle('Confirm Account | Bizns Tool');
  }

}
