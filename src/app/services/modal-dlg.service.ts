import { Injectable } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Injectable()
export class ModalDlgService {

  constructor(
      public modal: Modal
  ) { }

  termsModalDlg() {
    return this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Terms and Conditions')
        .body(`
            <p><h3>Introduction</h3></p>
    <p>
        These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.
    </p>
    <p><h3>1. License to Service use</h3></p>

    <p>
        Unless otherwise stated, Bizns tool and/or its licensors own the intellectual property rights in the service and material on the service site.  Subject to the license below, all these intellectual property rights are reserved.
    </p>
    <p>
        You may view, download for download and print from the service for your own organization use, subject to the restrictions set out below and elsewhere in these terms and conditions.
    </p>
    <p>You must not:</p>
    <ul>
        <li>
            republish material from this website (including republication on another service)
        </li>
        <li>
            sell, rent or sub-license material from the cloud service
        </li>
        <li>
            show any material from the site in public
        </li>
        <li>
            reproduce, duplicate, copy or otherwise exploit material on this service and site for a commercial purpose

        </li>
    </ul>
    <p><h3>2. Acceptable use</h3></p>

    <p>
        You must not use this service in any way that causes, or may cause, damage to the service or impairment of the availability or accessibility of the service; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
    </p>
    <p>
        You must not use this service to copy, store, host, transmit, send, use, publish or distribute any material which consists of any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
    </p>
    <p><h3>3. Restricted access</h3></p>

    <p>
        If Bizns tool provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.
    </p>
    <p>
        Bizns tool may disable your user ID and password in Bizns tool’s sole discretion without notice or explanation.
    </p>
    <p><h3>4. No warranties</h3></p>

    <p>
        This service is provided “as is” without any representations or warranties, express or implied.  Bizns tool makes no representations or warranties in relation to this website or the information and materials provided on this website.
    </p>
    <p>
        Without prejudice to the generality of the foregoing paragraph, Bizns tool does not warrant that:
    </p>
    <p>
        <ul>
            <li>
                this service will be constantly available, or available at all; or
            </li>
            <li>the information on this service is complete, true, accurate or non-misleading.</li>
        </ul>
    </p>

    <p>
        Nothing on this service or site constitutes or is meant to constitute, an advice of any kind.
    </p>
    <p><h3>5. Limitations of liability</h3></p>

    <p>
        Bizns tool will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:
    </p>
    <p>
        <ul>
            <li>
                for any indirect, special or consequential loss; or
            </li>
            <li>
                for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.
            </li>
        </ul>
    </p>
    <p>
        These limitations of liability apply even if Bizns tool has been expressly advised of the potential loss.

    </p>
    <p><h3>6. Indemnity</h3></p>

    <p>
        You hereby indemnify Bizns tool and undertake to keep Bizns tool indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by Bizns tool to a third party in settlement of a claim or dispute on the advice of Bizns tool’s legal advisers) incurred or suffered by Bizns tool arising out of any breach by you of any provision of these terms and conditions.
    </p>
    <p><h3>7. Breaches of these terms and conditions</h3></p>

    <p>
        Without prejudice to Bizns tool’s other rights under these terms and conditions, if you breach these terms and conditions in any way, Bizns tool may take such action as Bizns tool deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the service and site, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.
    </p>
    <p><h3>8. Assignment</h3></p>

    <p>
        Bizns tool may transfer, sub-contract or otherwise deal with Bizns tool’s rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.
    </p>
    <p>
        You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.
    </p>
    <p><h3>9. Service Payment and Refunds</h3></p>

    <p>
        Payment for paid license are accepted in credit or debit card with PCI Compliance processing, All paid plans are supported in monthly and annual subscriptions with a minimum of 2 users required. Upgraded accounts will be charged on credit card approval. An annual subscription cannot be downgraded to monthly before its end of time period. </p>
    <p>
        Once upgraded plans account be refunded after a trial period, but you can cancel the account by sending us an email at <a href=""> support@biznstool.com</a> Price change in service may occur over period time based on different cases, We will Notify you about any changes in 90 days.
     </p>
    <p><h3>10. Discontinue or End Service  </h3></p>

    <p>
        You can request for termination of service, we will terminate service once request received, please send us an email at support@biznstool.com for the request. You can also delete a user from your account for termination, but once delete account cannot retrieve data. But you will be charged until end of subscription period.
     </p>
    <p><h3>11. Law and jurisdiction</h3></p>

    <p>
        These terms and conditions will be governed by and construed in accordance with the State of California, and any disputes relating to these terms and conditions will be subject to the non-exclusive jurisdiction of the courts of  State of California.
    </p>

    <p>
        If you have any questions about terms and conditions or service, please reach us at<a href=""> support@biznstool.com</a>
    </p>`)
        .open();
  }

  privacyModalDlg() {
    return this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Privacy Policy')
        .body(`<p>
        Your privacy is important to<a href=""> www.biznstool.com </a> This privacy statement provides information about the personal information that Bizns tool collects, and the ways in which Bizns tool uses that personal information.
    </p>
    <p><h3>1. Personal information collection</h3></p>

    <p><a href="">www.biznstool.com</a> may collect and use the following kinds of personal information: </p>
    <p>
        <ul>
            <li>
                information that you provide using for the purpose of registering with service includes first name, last name, email id and company name
            </li>
            <li>
                information about payment transactions carried out over this service includes credit card details, but we don’t store them with us. Its stored securely with PCI Compliance providers.
            </li>
            <li>
                information that you provide for the purpose of subscribing to the website services first name, last name, email id, company name and other business transaction details
            </li>
        </ul>
    </p>
    <p><h3>2. Using personal information</h3></p>

    <p>Bizns tool may use your personal information to:  </p>

    <p>
        <ul>
            <li>
                administer this service and site
            </li>
            <li>
                personalize the service and site for you.
            </li>
            <li>
                send to you products that you purchase.
            </li>
            <li>
                supply to you services that you purchase and provide access to other external app services like Google, MailChip, QuickBooks online and more.
            </li>
            <li>
                send to you statements and invoices
            </li>
            <li>
                collect payments from you
            </li>
            <li>
                send you marketing communications on approval
            </li>
        </ul>
    </p>
    <p>
        In addition to the disclosures reasonably necessary for the purposes identified elsewhere above, Bizns tool may disclose your personal information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.
    </p>
    <p><h3>3. Securing your data</h3></p>

    <p>
        Bizns tool will take reasonable technical and organisational precautions to prevent the loss, misuse or alteration of your personal information.
    </p>
    <p>
        Bizns tool will store all the personal information you provide on its secure servers.
    </p>

    <p><h3>4. Cookies and Local Storage</h3></p>

    <p>
        Bizns tool uses Cookies and Local Storage (HTML5) from services to provide better features and functionality, Bizns tool in noway Cookies and Local Storage for personal benefits.
    </p>

    <p><h3>5. Updating this statement</h3></p>


    Bizns tool may update this privacy policy by posting a new version on this website.

    You should check this page occasionally to ensure you are familiar with any changes.

    <p><h3>6. Third Party Services</h3></p>

    <p>
        This site and service  contains links to other websites.
    </p>
    <p>
        Bizns tool is not responsible for the privacy policies or practices of any third party. Please read carefully about Thrid Party Services provided by Bizns tool, before you give us access.
    </p>
    <p><h3>7. Contact Bizns tool</h3></p>

    <p>
        If you have any questions about this privacy policy or Bizns tool treatment of your personal information, please write:
    </p>
    <p>
        by email to <a href="">privacy@biznstool.com</a>

    </p>`)
        .open();
  }

}
