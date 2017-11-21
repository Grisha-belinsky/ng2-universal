"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var modal_dlg_service_1 = require("./modal-dlg.service");
describe('ModalDlgService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [modal_dlg_service_1.ModalDlgService]
        });
    });
    it('should be created', testing_1.inject([modal_dlg_service_1.ModalDlgService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=modal-dlg.service.spec.js.map