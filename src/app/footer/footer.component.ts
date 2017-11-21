import { Component, OnInit } from '@angular/core';
import { ModalDlgService } from '../services/modal-dlg.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private modalService: ModalDlgService) { }

  ngOnInit() {
  }

  openTermsModalDlg(e: any) {
    e.preventDefault();
    this.modalService.termsModalDlg();
  }

  openPrivacyModalDlg(e: any) {
    e.preventDefault();
    this.modalService.privacyModalDlg();
  }
}
