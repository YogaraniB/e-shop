import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
//import  jsPDF  from "jspdf";

//import * as jspdf from 'jspdf';
import jspdf from 'jspdf';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  userDisplayName = '';
  userDisplayAdd='';
  userDisplayEmail='';
  userDisplayPhone='';
  userDisplayCity='';
  userDisplayState='';
  @ViewChild('reportContent') reportContent:ElementRef;
    
  constructor() { }
  downloadPDF() {
    const doc = new jspdf('landscape', 'pt');
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content = this.reportContent.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    
    doc.save('details' + '.pdf');
  }


  
  /*
  downloadPDF() { 
    const doc = new jsPDF();
    doc.addHTML(this.reportContent.nativeElement, function() {
       doc.save("details.pdf");
    });
  }
  */

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem('token');
    this.userDisplayEmail = localStorage.getItem('email');
    this.userDisplayPhone = localStorage.getItem('phoneno');
    this.userDisplayAdd = localStorage.getItem('address');
    this.userDisplayCity = localStorage.getItem('city');
    this.userDisplayState = localStorage.getItem('state');
  }

 

}