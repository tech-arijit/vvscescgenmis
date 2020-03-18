import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as XLSX from 'xlsx';  // For Excel Export
import * as moment from 'moment';
// tslint:disable:max-line-length
export interface Genmtdata {
  BBGS: any;
  DIL: any;
  HEL: any;
  SGS: any;
  TOTAL: any;
}

@Component({
  selector: 'app-powergenmis',
  templateUrl: './powergenmis.component.html',
  styleUrls: ['./powergenmis.component.scss']
})
export class PowergenmisComponent implements OnInit {

  parameters: any[];
  selParameter = null;
  powergen: any;
  public genmtdata: Genmtdata;
  genId: any;
  genDate: any;
  gmtddatafileName = 'GenerationMTDMISReport.xlsx';
  genText: any;
  FinYear: any;
  show = false;

  // Combo-chart
  // title = 'Year: 2019-2020';
  type = 'ComboChart';

  data = [];

  columnNames = ['', 'BBGS', 'SGS', 'HEL', 'DIL'];
  options3 = {
    // hAxis: {
    //   title: 'Month',
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    seriesType: 'bars',
    bar: { groupWidth: '80%' },
    colors: ['#599bd5', '#ed7d31', '#68c182', '#fcc200'],
    chartArea: { width: '90%' },
    legend: { position: 'bottom', alignment: 'start' },
    // series: {3: {type: 'line'}}
  };
  width = 1120;
  height = 200;


  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.getParameterList();
    this.powergen = this.fb.group({
      parametersId: ['', Validators.required],
      pdate: ['', Validators.required]
    });

  }

  getParameterList() {

    this.apiService._getParameterList().subscribe(
      (res: any) => {
        if (res) {
          this.parameters = res.Parameters;
        }
      },
      err => {

      });
  }

  searchParameterData() {
    const search = moment(this.powergen.value.pdate).format('YYYY-MM-DD');
    const searchDateLoadx: any = { data: JSON.stringify({ pdate: search, parametersId: this.powergen.value.parametersId }) };
    this.genId = this.powergen.value.parametersId;
    this.genText = this.getCompText(this.genId);
    this.genDate = search;
    this.apiService._appGetDashGenMtd(searchDateLoadx).subscribe(
      (res: any) => {
        if (res) {
          this.genmtdata = res.GenMTDData;
          this.show = true;
          this.FinYear = res.FinYear;
          this.data = [
            ['APR', (this.genmtdata.BBGS.APR ? this.genmtdata.BBGS.APR : 0), (this.genmtdata.SGS.APR ? this.genmtdata.SGS.APR : 0), (this.genmtdata.HEL.APR ? this.genmtdata.HEL.APR : 0), (this.genmtdata.DIL.APR ? this.genmtdata.DIL.APR : 0)],
            ['MAY', (this.genmtdata.BBGS.MAY ? this.genmtdata.BBGS.MAY : 0), (this.genmtdata.SGS.MAY ? this.genmtdata.SGS.MAY : 0), (this.genmtdata.HEL.MAY ? this.genmtdata.HEL.MAY : 0), (this.genmtdata.DIL.MAY ? this.genmtdata.DIL.MAY : 0)],
            ['JUN', (this.genmtdata.BBGS.JUN ? this.genmtdata.BBGS.JUN : 0), (this.genmtdata.SGS.JUN ? this.genmtdata.SGS.JUN : 0), (this.genmtdata.HEL.JUN ? this.genmtdata.HEL.JUN : 0), (this.genmtdata.DIL.JUN ? this.genmtdata.DIL.JUN : 0)],
            ['JUL', (this.genmtdata.BBGS.JUL ? this.genmtdata.BBGS.JUL : 0), (this.genmtdata.SGS.JUL ? this.genmtdata.SGS.JUL : 0), (this.genmtdata.HEL.JUL ? this.genmtdata.HEL.JUL : 0), (this.genmtdata.DIL.JUL ? this.genmtdata.DIL.JUL : 0)],
            ['AUG', (this.genmtdata.BBGS.AUG ? this.genmtdata.BBGS.AUG : 0), (this.genmtdata.SGS.AUG ? this.genmtdata.SGS.AUG : 0), (this.genmtdata.HEL.AUG ? this.genmtdata.HEL.AUG : 0), (this.genmtdata.DIL.AUG ? this.genmtdata.DIL.AUG : 0)],
            ['SEP', (this.genmtdata.BBGS.SEP ? this.genmtdata.BBGS.SEP : 0), (this.genmtdata.SGS.SEP ? this.genmtdata.SGS.SEP : 0), (this.genmtdata.HEL.SEP ? this.genmtdata.HEL.SEP : 0), (this.genmtdata.DIL.SEP ? this.genmtdata.DIL.SEP : 0)],
            ['OCT', (this.genmtdata.BBGS.OCT ? this.genmtdata.BBGS.OCT : 0), (this.genmtdata.SGS.OCT ? this.genmtdata.SGS.OCT : 0), (this.genmtdata.HEL.OCT ? this.genmtdata.HEL.OCT : 0), (this.genmtdata.DIL.OCT ? this.genmtdata.DIL.OCT : 0)],
            ['NOV', (this.genmtdata.BBGS.NOV ? this.genmtdata.BBGS.NOV : 0), (this.genmtdata.SGS.NOV ? this.genmtdata.SGS.NOV : 0), (this.genmtdata.HEL.NOV ? this.genmtdata.HEL.NOV : 0), (this.genmtdata.DIL.NOV ? this.genmtdata.DIL.NOV : 0)],
            ['DEC', (this.genmtdata.BBGS.DEC ? this.genmtdata.BBGS.DEC : 0), (this.genmtdata.SGS.DEC ? this.genmtdata.SGS.DEC : 0), (this.genmtdata.HEL.DEC ? this.genmtdata.HEL.DEC : 0), (this.genmtdata.DIL.DEC ? this.genmtdata.DIL.DEC : 0)],
            ['JAN', (this.genmtdata.BBGS.JAN ? this.genmtdata.BBGS.JAN : 0), (this.genmtdata.SGS.JAN ? this.genmtdata.SGS.JAN : 0), (this.genmtdata.HEL.JAN ? this.genmtdata.HEL.JAN : 0), (this.genmtdata.DIL.JAN ? this.genmtdata.DIL.JAN : 0)],
            ['FEB', (this.genmtdata.BBGS.FEB ? this.genmtdata.BBGS.FEB : 0), (this.genmtdata.SGS.FEB ? this.genmtdata.SGS.FEB : 0), (this.genmtdata.HEL.FEB ? this.genmtdata.HEL.FEB : 0), (this.genmtdata.DIL.FEB ? this.genmtdata.DIL.FEB : 0)],
            ['MAR', (this.genmtdata.BBGS.MAR ? this.genmtdata.BBGS.MAR : 0), (this.genmtdata.SGS.MAR ? this.genmtdata.SGS.MAR : 0), (this.genmtdata.HEL.MAR ? this.genmtdata.HEL.MAR : 0), (this.genmtdata.DIL.MAR ? this.genmtdata.DIL.MAR : 0)],
          ];
        }
      },
      err => {

      });
  }

  getCompText(arr) {
    const cString = [];
    let rtrStr = '';
    if (arr && (arr.length !== 0 || arr.length != null || arr.length !== 'undefine')) {
      for (const para of this.parameters) {
        // for(let i=0; i <= arr.length; i++){
        if (para.ParameterID === arr) {
          cString.push(para.ParameterName);
        }
        // }
      }
      rtrStr = cString.join();
    }
    return rtrStr === '' ? 'All' : rtrStr;
  }

  // Excel Export //
  exportgmtddataexcel(): void {
    const element = document.getElementById('gmtddata-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.gmtddatafileName);
  }

}
