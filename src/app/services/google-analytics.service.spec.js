"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var google_analytics_service_1 = require("./google-analytics.service");
describe('GoogleAnalyticsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [google_analytics_service_1.GoogleAnalyticsService]
        });
    });
    it('should be created', testing_1.inject([google_analytics_service_1.GoogleAnalyticsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=google-analytics.service.spec.js.map