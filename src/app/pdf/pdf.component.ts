import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
//import  jsPDF  from "jspdf";
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  
  @ViewChild('reportContent') reportContent:ElementRef;
    
  constructor() { }
  downloadPDF() {
    const doc = new jsPDF('landscape', 'pt');
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
  }

  USERS = [
    {
      "userid": 1,
      "username": "Surya ",
      "password": "surya" ,
      "email":"suryarajan361@gmail.com",
      "phoneno":"9566572539",
      "address": "abc street, Chennai"      
     },
     {"userid": 2,
     "username": "Matheswari ",
     "password": "123", 
     "email":"matheswari123.com",
     "phoneno":"9566572565", 
     "address": "xyz street,Coimbatore"     
     },
     {
      "userid": 3,
      "username": "Rajamaheswari ",
      "password": "mahi123", 
      "email":"rajamaheshwari@gmail.com",
      "phoneno":"95665654667",
      "address": "dfl street, Trichy"
     }
   ];

}
