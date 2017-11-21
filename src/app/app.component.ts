import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router, public googleAnalyticsService: GoogleAnalyticsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  submitEvent() {
    this.googleAnalyticsService.emitEvent("testCategory", "testAction", "testLabel", 10);
  }
}
