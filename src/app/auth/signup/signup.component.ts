import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSetting } from '../../app-setting';
import { ModalDlgService } from '../../services/modal-dlg.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  savedSuccessfully = false;
  message: string;
  itemVisible = true;
  isBusy = false;
  termAgree = false;
  registrationData: any = {};

  constructor(
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute,
      private modalService: ModalDlgService,
      private titleService: Title
  ) { }

  ngOnInit() {
    this.registrationData = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      industryType: '1',
      employeeCount: 1,
      TimeOffsetStr: Date().toString()
    };
    this.message = '';
    this.titleService.setTitle('Free Sign up | Bizns Tool');
  }

  agreeCondition() {
    if (this.termAgree) {
      this.termAgree = false;
    } else {
      this.termAgree = true;
      this.message = '';
    }
  }

  onSubmit(form: any): void {
    if (form.valid) {
      if (this.termAgree === true) {
        this.signUp();
      } else {
        this.message = 'Please Go through Terms & Conditions';
      }
    }
  }

  signUp() {
    if (AppSetting.tempEmail && this.isTempEmail(this.registrationData.userName)) {
      this.message = 'We found email used for registering account is temporary email provider, ' +
          'Sorry we do not accept temporary email for our services. Contact support@biznstool.com for more help.';
    } else {
      this.isBusy = true;
      this.authService.register(this.registrationData)
          .subscribe(
              data => {
                this.savedSuccessfully = true;
                this.message = 'User has been registered successfully, you will be redicted to login page in 2 seconds.';
                this.isBusy = false;
                this.startTimer();
              },
              error => {

                let res_errs = JSON.parse(error._body);
                console.log(res_errs.modelStatus);
                this.message = 'Failed to register user due to: ';
                this.isBusy = false;
              });
    }
  }

  startTimer() {
      setTimeout(function() {
        this.itemVisible = false;
      }, 2000);
  }

  openTermsModalDlg(e: any) {
    e.preventDefault();
    this.modalService.termsModalDlg();
  }

  isTempEmail(email: string) {
    let tempMailProviders = ['0815.ru0clickemail.com', '0wnd.net', '0wnd.org', '10minutemail.com', '20minutemail.com',
      '2prong.com', '3d-painting.com', 'bodhi.lawlita.com', 'correo.blogos.net', 'deadaddress.com', 'emailmiser.com',
      '4warding.com', '4warding.net', '4warding.org', '9ox.net', 'a-bc.net', 'amilegit.com', 'anonbox.net', 'anonymbox.com', 'antichef.com',
      'antichef.net', 'antispam.de', 'baxomale.ht.cx', 'beefmilk.com', 'binkmail.com', 'bio-muesli.net', 'bobmail.info',
      'bofthew.com', 'brefmail.com', 'bsnow.net', 'bugmenot.com', 'bumpymail.com', 'casualdx.com', 'chogmail.com', 'cool.fr.nf',
      'cosmorph.com', 'courriel.fr.nf', 'courrieltemporaire.com', 'curryworld.de', 'cust.in', 'dacoolest.com', 'dandikmail.com',
      'despam.it', 'devnullmail.com', 'dfgh.net', 'digitalsanctuary.com', 'discardmail.com', 'discardmail.de', 'disposableaddress.com',
      'disposemail.com', 'dispostable.com', 'dm.w3internet.co.uk', 'example.com', 'dodgeit.com', 'dodgit.com', 'dodgit.org', 'dontreg.com',
      'dontsendmespam.de', 'dump-email.info', 'dumpyemail.com', 'e4ward.com', 'email60.com', 'emailias.com', 'emailinfive.com',
      'emailtemporario.com.br', 'emailwarden.com', 'ephemail.net', 'explodemail.com', 'fakeinbox.com', 'fakeinformation.com',
      'fastacura.com', 'girlsundertheinfluence.com', 'guerillamail.org', 'guerrillamail.com', 'imails.info', 'inboxclean.com',
      'filzmail.com', 'fizmail.com', 'frapmail.com', 'garliclife.com', 'get1mail.com', 'getonemail.com', 'getonemail.net',
      'gishpuppy.com', 'great-host.in', 'gsrv.co.uk', 'guerillamail.biz', 'guerillamail.com', 'guerillamail.net',
      'guerrillamailblock.com', 'haltospam.com', 'hotpop.com', 'ieatspam.eu', 'ieatspam.info', 'ihateyoualot.info',
      'inboxclean.org', 'incognitomail.com', 'incognitomail.net', 'ipoo.org', 'irish2me.com', 'jetable.com', 'jetable.fr.nf',
      'jetable.net', 'jetable.org', 'lookugly.com', 'lopl.co.cc', 'maileater.com', 'mailexpire.com', 'mailnator.com', 'mailnull.com',
      'junk1e.com', 'kaspop.com', 'kulturbetrieb.info', 'kurzepost.de', 'lifebyfood.com', 'link2mail.net', 'litedrop.com',
      'lr78.com', 'maboard.com', 'mail.by', 'mail.mezimages.net', 'mail4trash.com', 'mailbidon.com', 'mailcatch.com',
      'mailin8r.com', 'mailinator.com', 'mailinator.net', 'mailinator2.com', 'mailincubator.com', 'mailme.lv',
      'mailzilla.org', 'mbx.cc', 'mega.zik.dj', 'meltmail.com', 'mierdamail.com', 'mintemail.com', 'moncourrier.fr.nf',
      'monemail.fr.nf', 'monmail.fr.nf', 'nogmailspam.info', 'objectmail.com', 'obobbo.com',
      'mt2009.com', 'mx0.wwwnew.eu', 'mycleaninbox.net', 'mytrashmail.com', 'neverbox.com', 'nobulk.com', 'noclickemail.com',
      'nomail.xl.cx', 'nomail2me.com', 'no-spam.ws', 'nospam.ze.tc', 'nospam4.us', 'nospamfor.us', 'nowmymail.com',
      'onewaymail.com', 'ordinaryamerican.net', 'owlpic.com', 'pookmail.com', 'proxymail.eu', 'punkass.com',
      'putthisinyourspamdatabase.com', 'sandelf.de', 'saynotospams.com', 'smellfear.com', 'snakemail.com',
      'quickinbox.com', 'rcpt.at', 'recode.me', 'recursor.net', 'regbypass.comsafe-mail.net', 'safetymail.info',
      'selfdestructingmail.com', 'sendspamhere.com', 'shiftmail.com', '****mail.me', 'skeefmail.com', 'slopsbox.com',
      'sneakemail.com', 'sofort-mail.de', 'sogetthis.com', 'soodonims.com', 'spam.la', 'spamavert.com', 'spambob.net',
      'spambob.org', 'spambog.com', 'spammotel.com', 'spamobox.com', 'tempemail.biz', 'tempemail.com',
      'spambog.de', 'spambog.ru', 'spambox.info', 'spambox.us', 'spamcannon.com', 'spamcannon.net', 'spamcero.com', 'spamcorptastic.com',
      'spamcowboy.com', 'spamcowboy.net', 'spamcowboy.org', 'spamday.com', 'spamex.com', 'spamfree24.com', 'spamfree24.de', 'spamfree24.eu',
      'spamfree24.info', 'spamfree24.net', 'spamfree24.org', 'spamgourmet.com', 'spamgourmet.net', 'spamgourmet.org', 'spamherelots.com',
      'spamhereplease.com', 'spamhole.com', 'spamify.com', 'spaminator.de', 'spamkill.info', 'spaml.com', 'spaml.de',
      'spamspot.com', 'spamthis.co.uk', 'spamthisplease.com', 'speed.1s.fr', 'suremail.info', 'tempalias.com',
      'tempe-mail.com', 'tempemail.net', 'tempinbox.co.uk', 'tempinbox.com', 'tempomail.fr', 'temporaryemail.net',
      'temporaryinbox.com', 'thankyou2010.com', 'trash2009.com', 'trash-amil.com', 'trashmail.net', 'trashymail.com',
      'thisisnotmyrealemail.com', 'throwawayemailaddress.com', 'tilien.com', 'tmailinator.com', 'tradermail.info',
      'trashmail.at', 'trash-mail.at', 'trashmail.com', 'trash-mail.com', 'trash-mail.de', 'trashmail.me',
      'trashymail.net', 'tyldd.com', 'uggsrock.com', 'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfmail.org', 'wh4f.org', 'whyspam.me',
      'willselfdestruct.com', 'winemaven.info', 'wronghead.com', 'wuzupmail.net', 'xoxy.net', 'yogamaven.com', 'yopmail.com',
      'yopmail.fr', 'yopmail.net', 'yuurok.com', 'zippymail.info', 'jnxjn.com', 'trashmailer.com', 'klzlk.com', 'nospamforus',
      'kurzepost.de', 'objectmail.com', 'proxymail.eu', 'rcpt.at', 'trash-mail.at', 'trashmail.at', 'trashmail.me',
      'trashmail.net', 'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfmail.org', 'jetable', 'link2mail', 'meltmail',
      'anonymbox', 'courrieltemporaire', 'sofimail', '0-mail.com', 'moburl.com', 'get2mail', 'yopmail', '10minutemail',
      'mailinator', 'dispostable', 'spambog', 'mail-temporaire', 'filzmail', 'sharklasers.com', 'guerrillamailblock.com',
      'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.biz', 'guerrillamail.org', 'guerrillamail.de',
      'mailmetrash.com', 'thankyou2010.com', 'trash2009.com', 'mt2009.com', 'trashymail.com', 'mytrashmail.com',
      'mailcatch.com', 'trillianpro.com', 'junk.', 'joliekemulder', 'lifebeginsatconception', 'beerolympics',
      'smaakt.naar.gravel', 'q00.', 'dispostable', 'spamavert', 'mintemail', 'tempemail', 'spamfree24', 'spammotel',
      'spam', 'mailnull', 'e4ward', 'spamgourmet', 'mytempemail', 'incognitomail', 'spamobox', 'mailinator.com',
      'trashymail.com', 'mailexpire.com', 'temporaryinbox.com', 'MailEater.com', 'spambox.us', 'spamhole.com',
      'spamhole.com', 'jetable.org', 'guerrillamail.com', 'uggsrock.com', '10minutemail.com', 'dontreg.com',
      'tempomail.fr', 'TempEMail.net', 'spamfree24.org', 'spamfree24.de', 'spamfree24.info', 'spamfree24.com',
      'spamfree.eu', 'kasmail.com', 'spammotel.com', 'greensloth.com', 'spamspot.com', 'spam.la', 'mjukglass.nu',
      'slushmail.com', 'trash2009.com', 'mytrashmail.com', 'mailnull.com', 'jetable.org', '10minutemail.com',
      '20minutemail.com', 'anonymbox.com', 'beefmilk.com', 'bsnow.net', 'bugmenot.com', 'deadaddress.com', 'despam.it',
      'disposeamail.com', 'dodgeit.com', 'dodgit.com', 'dontreg.com', 'e4ward.com', 'emailias.com', 'emailwarden.com',
      'enterto.com', 'gishpuppy.com', 'goemailgo.com', 'greensloth.com', 'guerrillamail.com', 'guerrillamailblock.com',
      'hidzz.com', 'incognitomail.net ', 'jetable.org', 'kasmail.com', 'lifebyfood.com', 'lookugly.com', 'mailcatch.com',
      'maileater.com', 'mailexpire.com', 'mailin8r.com', 'mailinator.com', 'mailinator.net', 'mailinator2.com',
      'mailmoat.com', 'mailnull.com', 'meltmail.com', 'mintemail.com', 'mt2009.com', 'myspamless.com', 'mytempemail.com',
      'mytrashmail.com', 'netmails.net', 'odaymail.com', 'pookmail.com', 'shieldedmail.com', 'smellfear.com',
      'sneakemail.com', 'sogetthis.com', 'soodonims.com', 'spam.la', 'spamavert.com', 'spambox.us', 'spamcero.com',
      'spamex.com', 'spamfree24.com', 'spamfree24.de', 'spamfree24.eu', 'spamfree24.info', 'spamfree24.net',
      'spamfree24.org', 'spamgourmet.com', 'spamherelots.com', 'spamhole.com', 'spaml.com', 'spammotel.com',
      'spamobox.com', 'spamspot.com', 'tempemail.net', 'tempinbox.com', 'tempomail.fr', 'temporaryinbox.com',
      'tempymail.com', 'thisisnotmyrealemail.com', 'trash2009.com', 'trashmail.net', 'trashymail.com', 'tyldd.com',
      'yopmail.com', 'zoemail.com', 'deadaddress', 'soodo', 'tempmail', 'uroid', 'spamevader', 'gishpuppy',
      'privymail.de', 'trashmailer.com', 'fansworldwide.de', 'onewaymail.com', 'mobi.web.id', 'ag.us.to',
      'gelitik.in', 'fixmail.tk', 'shitmail.org'];

    let found = false;
    if (tempMailProviders.indexOf(email) !== -1) {
      found = true;
    }
    return found;
  }

}
