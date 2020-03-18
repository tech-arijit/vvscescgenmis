import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genpopup',
  templateUrl: './genpopup.component.html',
  styleUrls: ['./genpopup.component.scss']
})
export class GenpopupComponent implements OnInit {


  // title = 'Average Temperatures of Cities';
  type = 'LineChart';
  data = [];
  // columnNames = ['Month', 'YTD'];
  options = {
    hAxis: {
      title: 'MONTH'
    },
    vAxis: {
      title: 'MU'
    },
    chartArea: { width: '80%' },
    legend: { position: 'none', alignment: 'start' },
    pointSize: 5,
  };
  width = 1400;
  height = 700;

  constructor(public dialogRef: MatDialogRef<GenpopupComponent>, @Inject(MAT_DIALOG_DATA) public rowData) { }

  ngOnInit() {
    const mnth = this.rowData.GenStationUnitYTDData;
    console.log(this.rowData);
    this.data = [
      ['Apr', mnth.APR ? mnth.APR : null],
      ['May', mnth.MAY ? mnth.MAY : null],
      ['Jun', mnth.JUN ? mnth.JUN : null],
      ['Jul', mnth.JUL ? mnth.JUL : null],
      ['Aug', mnth.AUG ? mnth.AUG : null],
      ['Sep', mnth.SEP ? mnth.SEP : null],
      ['Oct', mnth.OCT ? mnth.OCT : null],
      ['Nov', mnth.NOV ? mnth.NOV : null],
      ['Dec', mnth.DEC ? mnth.DEC : null],
      ['Jan', mnth.JAN ? mnth.JAN : null],
      ['Feb', mnth.FEB ? mnth.FEB : null],
      ['Mar', mnth.MAR ? mnth.MAR : null]
    ];
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

}
