import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'ng2-meta';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private titleService: Title, private metaService: MetaService ) { }

  ngOnInit() {
    this.titleService.setTitle('CRM for Small Business and Contractors | Bizns Tool');
    this.metaService.setTitle('CRM for Small Business and Contractors | Bizns Tool');
    this.metaService.setTag('og:description', 'Bizns Tool is Online CRM Software for Small Business, ' +
        'Micro Business, Freelancers and Contractors. Create Projects, Estimates, Quotes and Invoices in one Software.');
  }

}
