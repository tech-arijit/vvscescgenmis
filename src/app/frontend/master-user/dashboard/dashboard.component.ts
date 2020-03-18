import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenpopupComponent } from './genpopup/genpopup.component';
import { ColumpopupComponent } from './columpopup/columpopup.component';
import { ApiService } from '../../_services/api.service';
import { GsmdComponent } from './gsmd/gsmd.component';
import { AUTO_STYLE } from '@angular/animations';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
// tslint:disable:max-line-length
export interface ColCharMtdData {
  BBGS: any;
  DIL: any;
  HEL: any;
  SGS: any;
  TOTAL: any;
}

export interface YtdData {
  Units_Generated: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  /*tslint:disable*/
  // gu - chart - BBGS
  public bcanvasWidth = 250;
  public bneedleValue = 0;
  public bcentralLabel = '';
  public bname = 'BBGS';
  public bbottomLabel = '0';
  public boptions = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    // tslint:disable-next-line:max-line-length
    arcColors: ['#c7ddf1', '#c7ddf1', '#c7ddf1', '#c7ddf1', '#98c1e5', '#98c1e5', '#78aedd', '#78aedd', '#69a4d9', '#599bd5'],
    // arcDelimiters: [30],
    rangeLabel: ['0', '7000'],
    needleStartValue: 50,

    // arc options
    // arcDelimiters: [9, 18, 27, 36, 45, 54, 63, 72, 81, 99],
    arcDelimiters: [10, 20, 30, 40, 50, 60, 70, 80, 90, 99],
    arcPadding: 1,
    arcPaddingColor: 'white',
    // tslint:disable-next-line:max-line-length
    arcLabels: ['700', '1400', '2100', '2800', '3500', '4200', '4900', '5600', '6300', '7000'],
  };

  // gu - chart - SGS
  public scanvasWidth = 250;
  public sneedleValue = 0;
  public scentralLabel = '';
  public sname = 'SGS';
  public sbottomLabel = '0';
  public soptions = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    // tslint:disable-next-line:max-line-length
    arcColors: ['#f5b68b', '#f5b68b', '#f5b68b', '#f5b68b', '#f3ab79', '#f3ab79', '#f09455', '#f09455', '#ef8843', '#ed7d31'],
    // arcDelimiters: [30],
    rangeLabel: ['0', '7000'],
    needleStartValue: 50,

    // arc options
    arcDelimiters: [10, 20, 30, 40, 50, 60, 70, 80, 90, 99],
    arcPadding: 1,
    arcPaddingColor: 'white',
    // tslint:disable-next-line:max-line-length
    arcLabels: ['700', '1400', '2100', '2800', '3500', '4200', '4900', '5600', '6300', '7000'],
  };

  // gu - chart - HEL
  public hcanvasWidth = 250;
  public hneedleValue = 0;
  public hcentralLabel = '';
  public hname = 'HEL';
  public hbottomLabel = '0';
  public hoptions = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    // tslint:disable-next-line:max-line-length
    arcColors: ['#c9e9d3', '#c9e9d3', '#c9e9d3', '#c9e9d3', '#aedebc', '#aedebc', '#a0d8b0', '#a0d8b0', '#84cc99', '#68c182'],
    // arcDelimiters: [30],
    rangeLabel: ['0', '7000'],
    needleStartValue: 50,

    // arc options
    arcDelimiters: [10, 20, 30, 40, 50, 60, 70, 80, 90, 99],
    arcPadding: 1,
    arcPaddingColor: 'white',
    // tslint:disable-next-line:max-line-length
    arcLabels: ['700', '1400', '2100', '2800', '3500', '4200', '4900', '5600', '6300', '7000'],
  };

  // gu - chart - DIL
  public dcanvasWidth = 250;
  public dneedleValue = 0;
  public dcentralLabel = '';
  public dname = 'DIL';
  public dbottomLabel = '0';
  public doptions = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    // tslint:disable-next-line:max-line-length
    arcColors: ['#ffdf73', '#ffdf73', '#ffdf73', '#ffdf73', '#ffd64b', '#ffd64b', '#ffcd24', '#ffcd24', '#ffc811', '#fcc200'],
    // arcDelimiters: [30],
    rangeLabel: ['0', '7000'],
    needleStartValue: 50,

    // arc options
    arcDelimiters: [10, 20, 30, 40, 50, 60, 70, 80, 90, 99],
    arcPadding: 1,
    arcPaddingColor: 'white',
    // tslint:disable-next-line:max-line-length
    arcLabels: ['700', '1400', '2100', '2800', '3500', '4200', '4900', '5600', '6300', '7000'],
  };

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

  public dashData: any;
  onDate: '';
  dailyData: any = [];
  MtmData: any = [];
  public YtdData: YtdData;
  DailyDataDCLR: any = [];
  MtdDataDCLR: any = [];
  YtdDataDCLR: any = [];
  DailyDataASHSR: any = [];
  GenMtdData: any = [];
  public ColCharMtdData: ColCharMtdData;
  GenMtdDate: any;
  coalSummaryData: any = [];
  ldoSummaryData: any = [];
  FinYear: any;
  ser: any;


  // COLUMN -chart -CS_OP STOCK
  // title = 'Year: 2019-2020';
  csoscol_type = 'ColumnChart';

  csoscol_data = [];
  csoscol_columnNames: any[] = [
    { label: '', type: 'string', p: {} },
    { label: '', type: 'number' },
    { role: 'style', type: 'string' }
  ];
  csoscol_options = {
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        min: 0
      },
      gridlines: {
        count: 5,
      }
    },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    chartArea: { left: 80, width: '75%' },
    legend: 'none',
    series: { 3: { type: 'line'  } },

  };
  csoscol_width = 250;
  csoscol_height = 150;

  // COLUMN -chart _CS Received
  // title = 'Year: 2019-2020';
  csrcol_type = 'ColumnChart';

  csrcol_data = [];

  csrcol_columnNames: any[] = [
    { label: '', type: 'string', p: {} },
    { label: '', type: 'number' },
    { role: 'style', type: 'string' }
  ];
  csrcol_options = {
    // hAxis: {
    //   title: 'Month',
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        // max:3000,
        min: 0
      },
      gridlines: {
        count: 5,
      }
    },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    // colors: ['#5DADE2', '#2874A6', '#1B4F72', '#1B4A72'],
    chartArea: { left: 80, width: '75%' },
    // legend: { position: 'bottom', alignment: 'start' },
    legend: 'none',
    series: { 3: { type: 'line' } }
  };
  csrcol_width = 250;
  csrcol_height = 150;

  // COLUMN -chart _CS Consump
  // title = 'Year: 2019-2020';
  csccol_type = 'ColumnChart';

  csccol_data = [];

  csccol_columnNames: any[] = [
    { label: '', type: 'string', p: {} },
    { label: '', type: 'number' },
    { role: 'style', type: 'string' }
  ];
  csccol_options = {
    // hAxis: {
    //   title: 'Month',
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        // max:3000,
        min: 0
      },
      gridlines: {
        count: 5,
      },

    },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    // colors: ['#5DADE2', '#2874A6', '#1B4F72', '#1B4A72'],
    chartArea: { left: 80, width: '75%' },
    // legend: { position: 'bottom', alignment: 'start' },
    legend: 'none',
    series: { 3: { type: 'line' } }
  };
  csccol_width = 250;
  csccol_height = 150;

  // COLUMN -chart _CS CL. STOCK
  // title = 'Year: 2019-2020';
  cscscol_type = 'ColumnChart';

  cscscol_data = [];

  cscscol_columnNames: any[] = [
    { label: '', type: 'string', p: {} },
    { label: '', type: 'number' },
    { role: 'style', type: 'string' }
  ];
  cscscol_options = {
    // hAxis: {
    //   title: 'Month',
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        // max:3000,
        min: 0
      },
      gridlines: {
        count: 5,
      }
    },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    // colors: ['#5DADE2', '#2874A6', '#1B4F72', '#1B4A72'],
    chartArea: { left: 80, width: '75%' },
    // legend: { position: 'bottom', alignment: 'start' },
    legend: 'none',
    series: { 3: { type: 'line' } }
  };
  cscscol_width = 250;
  cscscol_height = 150;

  // COLUMN -chart _LS OP. STOCK
  // title = 'Year: 2019-2020';
  lscscol_type = 'ColumnChart';

  lscscol_data = [];

  lscscol_columnNames: any[] = [
    { label: '', type: 'string', p: {} },
    { label: '', type: 'number' },
    { role: 'style', type: 'string' }
  ];
  lscscol_options = {
    // hAxis: {
    //   title: 'Month',
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        // max:3000,
        min: 0
      },
      gridlines: {
        count: 5,
      }
    },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    // colors: ['#5DADE2', '#2874A6', '#1B4F72', '#1B4A72'],
    chartArea: { left: 80, width: '75%' },
    // legend: { position: 'bottom', alignment: 'start' },
    legend: 'none',
    series: { 3: { type: 'line' } }
  };
  lscscol_width = 250;
  lscscol_height = 150;

  // COLUMN -chart _LS OP. STOCK
  // title = 'Year: 2019-2020';
  lsrcol_type = 'ColumnChart';

  lsrcol_data = [];

  lsrcol_columnNames: any[] = [
    { label: '', type: 'string', p: {} },
    { label: '', type: 'number' },
    { role: 'style', type: 'string' }
  ];
  lsrcol_options = {
    // hAxis: {
    //   title: 'Month',
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        // max:3000,
        min: 0
      },
      gridlines: {
        count: 5,
      }
    },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    // colors: ['#5DADE2', '#2874A6', '#1B4F72', '#1B4A72'],
    chartArea: { left: 80, width: '75%' },
    // legend: { position: 'bottom', alignment: 'start' },
    legend: 'none',
    series: { 3: { type: 'line' } }
  };
  lsrcol_width = 250;
  lsrcol_height = 150;

  // COLUMN -chart _LS CONSUMP
  // title = 'Year: 2019-2020';
  lsccol_type = 'ColumnChart';

  lsccol_data = [];

  lsccol_columnNames: any[] = [
    { label: '', type: 'string', p: {} },
    { label: '', type: 'number' },
    { role: 'style', type: 'string' }
  ];
  lsccol_options = {
    // hAxis: {
    //   title: 'Month',
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        // max:3000,
        min: 0
      },
      gridlines: {
        count: 5,
      }
    },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    // colors: ['#5DADE2', '#2874A6', '#1B4F72', '#1B4A72'],
    chartArea: { left: 80, width: '75%' },
    // legend: { position: 'bottom', alignment: 'start' },
    legend: 'none',
    series: { 3: { type: 'line' } }
  };
  lsccol_width = 250;
  lsccol_height = 150;

  // COLUMN -chart _CL. STOCK
  // title = 'Year: 2019-2020';
  lsclscol_type = 'ColumnChart';

  lsclscol_data = [];

  lsclscol_columnNames: any[] = [
    { label: '', type: 'string', p: {} },
    { label: '', type: 'number' },
    { role: 'style', type: 'string' }
  ];
  lsclscol_options = {
    // hAxis: {
    //  textPosition: 'in'
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    vAxis: {
      viewWindowMode: 'explicit',
      viewWindow: {
        // max:3000,
        min: 0
      },
      gridlines: {
        count: 5,
      }
    },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    // colors: ['#5DADE2', '#2874A6', '#1B4F72', '#1B4A72'],
    chartArea: { left: 80, width: '75%' },
    // legend: { position: 'bottom', alignment: 'start' },
    legend: 'none',
    series: { 3: { type: 'line' } }
  };
  lsclscol_width = 250;
  lsclscol_height = 150;


  constructor(private fb: FormBuilder, public dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    this.dashData = this.fb.group({
      sdate: new FormControl('', [Validators.required])
    });
    const date: Date = new Date(Date.now() - 86400000);
    const searc: any = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
    this.appSearchByDateLoad(searc);
    this.appDashColChartLoad(searc);
    this.appDashGenMtdLoad(searc);
    this.appDashCoalSummary(searc);
    this.appDashLdoSummary(searc);
    // this.openGomGomStyle(searc);

  }

  dashSearchByDate() {
    const searchf = moment(this.dashData.value.sdate).format('YYYY-MM-DD');
    this.appSearchByDateLoad(searchf);
    this.appDashColChartLoad(searchf);
    this.appDashGenMtdLoad(searchf);
    this.appDashCoalSummary(searchf);
    this.appDashLdoSummary(searchf);
    // this.openGomGomStyle(searchf);
  }

  appSearchByDateLoad(ser) {

    const searchDateLoad: any = { sdate: ser };
    const searchDateLoadx: any = { data: JSON.stringify(searchDateLoad) };
    this.apiService._appGetMisDetails(searchDateLoadx).subscribe(
      (res: any) => {
        if (res) {
          this.onDate = res.sdate;
          this.YtdData = res.YTDdata;
          // console.log(this.onDate);
          if (this.YtdData.Units_Generated) {
            this.bbottomLabel = this.YtdData.Units_Generated.BBGS_YTD_TOTAL ? this.YtdData.Units_Generated.BBGS_YTD_TOTAL : 0;
            const bblval = parseFloat(this.bbottomLabel);
            this.bneedleValue = ((bblval / 7000) * 100) ? ((bblval / 7000) * 100) : 0;

            this.sbottomLabel = this.YtdData.Units_Generated.SGS_YTD_TOTAL ? this.YtdData.Units_Generated.SGS_YTD_TOTAL : 0;
            const sblval = parseFloat(this.sbottomLabel);
            this.sneedleValue = ((sblval / 7000) * 100) ? ((sblval / 7000) * 100) : 0;

            this.hbottomLabel = this.YtdData.Units_Generated.HEL_YTD_TOTAL ? this.YtdData.Units_Generated.HEL_YTD_TOTAL : 0;
            const hblval = parseFloat(this.hbottomLabel);
            this.hneedleValue = ((hblval / 7000) * 100) ? ((hblval / 7000) * 100) : 0;

            this.dbottomLabel = this.YtdData.Units_Generated.DIL_YTD_TOTAL ? this.YtdData.Units_Generated.DIL_YTD_TOTAL : 0;
            const dblval = parseFloat(this.dbottomLabel);
            this.dneedleValue = ((dblval / 7000) * 100) ? ((dblval / 7000) * 100) : 0;
          }
        }
      },
      err => {

      });
  }

  appDashColChartLoad(ser) {
    const searchDateColChartLoad: any = { sdate: ser };
    const searchDateColChartLoadx: any = { data: JSON.stringify(searchDateColChartLoad) };
    this.apiService._appGetDashGenMtd(searchDateColChartLoadx).subscribe(
      (res: any) => {
        if (res) {

          this.ColCharMtdData = res.GenMTDData;
          this.data = [
            ['APR', this.ColCharMtdData.BBGS.APR ? this.ColCharMtdData.BBGS.APR : 0, this.ColCharMtdData.SGS.APR ? this.ColCharMtdData.SGS.APR : 0, this.ColCharMtdData.HEL.APR ? this.ColCharMtdData.HEL.APR : 0, this.ColCharMtdData.DIL.APR ? this.ColCharMtdData.DIL.APR : 0],
            ['MAY', this.ColCharMtdData.BBGS.MAY ? this.ColCharMtdData.BBGS.MAY : 0, this.ColCharMtdData.SGS.MAY ? this.ColCharMtdData.SGS.MAY : 0, this.ColCharMtdData.HEL.MAY ? this.ColCharMtdData.HEL.MAY : 0, this.ColCharMtdData.DIL.MAY ? this.ColCharMtdData.DIL.MAY : 0],
            ['JUN', this.ColCharMtdData.BBGS.JUN ? this.ColCharMtdData.BBGS.JUN : 0, this.ColCharMtdData.SGS.JUN ? this.ColCharMtdData.SGS.JUN : 0, this.ColCharMtdData.HEL.JUN ? this.ColCharMtdData.HEL.JUN : 0, this.ColCharMtdData.DIL.JUN ? this.ColCharMtdData.DIL.JUN : 0],
            ['JUL', this.ColCharMtdData.BBGS.JUL ? this.ColCharMtdData.BBGS.JUL : 0, this.ColCharMtdData.SGS.JUL ? this.ColCharMtdData.SGS.JUL : 0, this.ColCharMtdData.HEL.JUL ? this.ColCharMtdData.HEL.JUL : 0, this.ColCharMtdData.DIL.JUL ? this.ColCharMtdData.DIL.JUL : 0],
            ['AUG', this.ColCharMtdData.BBGS.AUG ? this.ColCharMtdData.BBGS.AUG : 0, this.ColCharMtdData.SGS.AUG ? this.ColCharMtdData.SGS.AUG : 0, this.ColCharMtdData.HEL.AUG ? this.ColCharMtdData.HEL.AUG : 0, this.ColCharMtdData.DIL.AUG ? this.ColCharMtdData.DIL.AUG : 0],
            ['SEP', this.ColCharMtdData.BBGS.SEP ? this.ColCharMtdData.BBGS.SEP : 0, this.ColCharMtdData.SGS.SEP ? this.ColCharMtdData.SGS.SEP : 0, this.ColCharMtdData.HEL.SEP ? this.ColCharMtdData.HEL.SEP : 0, this.ColCharMtdData.DIL.SEP ? this.ColCharMtdData.DIL.SEP : 0],
            ['OCT', this.ColCharMtdData.BBGS.OCT ? this.ColCharMtdData.BBGS.OCT : 0, this.ColCharMtdData.SGS.OCT ? this.ColCharMtdData.SGS.OCT : 0, this.ColCharMtdData.HEL.OCT ? this.ColCharMtdData.HEL.OCT : 0, this.ColCharMtdData.DIL.OCT ? this.ColCharMtdData.DIL.OCT : 0],
            ['NOV', this.ColCharMtdData.BBGS.NOV ? this.ColCharMtdData.BBGS.NOV : 0, this.ColCharMtdData.SGS.NOV ? this.ColCharMtdData.SGS.NOV : 0, this.ColCharMtdData.HEL.NOV ? this.ColCharMtdData.HEL.NOV : 0, this.ColCharMtdData.DIL.NOV ? this.ColCharMtdData.DIL.NOV : 0],
            ['DEC', this.ColCharMtdData.BBGS.DEC ? this.ColCharMtdData.BBGS.DEC : 0, this.ColCharMtdData.SGS.DEC ? this.ColCharMtdData.SGS.DEC : 0, this.ColCharMtdData.HEL.DEC ? this.ColCharMtdData.HEL.DEC : 0, this.ColCharMtdData.DIL.DEC ? this.ColCharMtdData.DIL.DEC : 0],
            ['JAN', this.ColCharMtdData.BBGS.JAN ? this.ColCharMtdData.BBGS.JAN : 0, this.ColCharMtdData.SGS.JAN ? this.ColCharMtdData.SGS.JAN : 0, this.ColCharMtdData.HEL.JAN ? this.ColCharMtdData.HEL.JAN : 0, this.ColCharMtdData.DIL.JAN ? this.ColCharMtdData.DIL.JAN : 0],
            ['FEB', this.ColCharMtdData.BBGS.FEB ? this.ColCharMtdData.BBGS.FEB : 0, this.ColCharMtdData.SGS.FEB ? this.ColCharMtdData.SGS.FEB : 0, this.ColCharMtdData.HEL.FEB ? this.ColCharMtdData.HEL.FEB : 0, this.ColCharMtdData.DIL.FEB ? this.ColCharMtdData.DIL.FEB : 0],
            ['MAR', this.ColCharMtdData.BBGS.MAR ? this.ColCharMtdData.BBGS.MAR : 0, this.ColCharMtdData.SGS.MAR ? this.ColCharMtdData.SGS.MAR : 0, this.ColCharMtdData.HEL.MAR ? this.ColCharMtdData.HEL.MAR : 0, this.ColCharMtdData.DIL.MAR ? this.ColCharMtdData.DIL.MAR : 0],
          ];

        }
      },
      err => {

      });
  }

  appDashGenMtdLoad(ser) {
    const searchDateGenMtdLoad: any = { sdate: ser };
    const searchDateGenMtdLoadx: any = { data: JSON.stringify(searchDateGenMtdLoad) };
    this.apiService._appGetDashGenMtd(searchDateGenMtdLoadx).subscribe(
      (res: any) => {
        if (res) {
          this.GenMtdDate = res.sdate;
          this.GenMtdData = res.GenMTDData;
          this.FinYear = res.FinYear;
        }
      },
      err => {

      });
  }

  appDashCoalSummary(ser) {
    const searchDateCoalSummaryLoad: any = { sdate: ser };
    const searchDateCoalSummaryLoadx: any = { data: JSON.stringify(searchDateCoalSummaryLoad) };
    this.apiService._appGetDashCoalSummary(searchDateCoalSummaryLoadx).subscribe(
      (res: any) => {
        if (res) {
          this.coalSummaryData = res.CoalSummaryData;
          this.csoscol_data = [
            ['BBGS', parseFloat(this.coalSummaryData.BBGS_OPENING_STOCK) ? parseFloat(this.coalSummaryData.BBGS_OPENING_STOCK) : 0, '#599bd5'],
            ['SGS', parseFloat(this.coalSummaryData.SGS_OPENING_STOCK) ? parseFloat(this.coalSummaryData.SGS_OPENING_STOCK) : 0, '#ed7d31'],
            ['HEL', parseFloat(this.coalSummaryData.HEL_OPENING_STOCK) ? parseFloat(this.coalSummaryData.HEL_OPENING_STOCK) : 0, '#68c182'],
            ['DIL', parseFloat(this.coalSummaryData.DIL_OPENING_STOCK) ? parseFloat(this.coalSummaryData.DIL_OPENING_STOCK) : 0, '#fcc200']
          ];
          this.csrcol_data = [
            ['BBGS', parseFloat(this.coalSummaryData.BBGS_RECEIVED) ? parseFloat(this.coalSummaryData.BBGS_RECEIVED) : 0, '#599bd5'],
            ['SGS', parseFloat(this.coalSummaryData.SGS_RECEIVED) ? parseFloat(this.coalSummaryData.SGS_RECEIVED) : 0, '#ed7d31'],
            ['HEL', parseFloat(this.coalSummaryData.HEL_RECEIVED) ? parseFloat(this.coalSummaryData.HEL_RECEIVED) : 0, '#68c182'],
            ['DIL', parseFloat(this.coalSummaryData.DIL_RECEIVED) ? parseFloat(this.coalSummaryData.DIL_RECEIVED) : 0, '#fcc200']
          ];
          this.csccol_data = [
            ['BBGS', parseFloat(this.coalSummaryData.BBGS_CONSUMPTION) ? parseFloat(this.coalSummaryData.BBGS_CONSUMPTION) : 0, '#599bd5'],
            ['SGS', parseFloat(this.coalSummaryData.SGS_CONSUMPTION) ? parseFloat(this.coalSummaryData.SGS_CONSUMPTION) : 0, '#ed7d31'],
            ['HEL', parseFloat(this.coalSummaryData.HEL_CONSUMPTION) ? parseFloat(this.coalSummaryData.HEL_CONSUMPTION) : 0, '#68c182'],
            ['DIL', parseFloat(this.coalSummaryData.DIL_CONSUMPTION) ? parseFloat(this.coalSummaryData.DIL_CONSUMPTION) : 0, '#fcc200']
          ];
          this.cscscol_data = [
            ['BBGS', parseFloat(this.coalSummaryData.BBGS_CLOSING_STOCK) ? parseFloat(this.coalSummaryData.BBGS_CLOSING_STOCK) : 0, '#599bd5'],
            ['SGS', parseFloat(this.coalSummaryData.SGS_CLOSING_STOCK) ? parseFloat(this.coalSummaryData.SGS_CLOSING_STOCK) : 0, '#ed7d31'],
            ['HEL', parseFloat(this.coalSummaryData.HEL_CLOSING_STOCK) ? parseFloat(this.coalSummaryData.HEL_CLOSING_STOCK) : 0, '#68c182'],
            ['DIL', parseFloat(this.coalSummaryData.DIL_CLOSING_STOCK) ? parseFloat(this.coalSummaryData.DIL_CLOSING_STOCK) : 0, '#fcc200']
          ];
        }
      },
      err => {

      });
  }

  appDashLdoSummary(ser) {
    const searchDateLdoSummaryLoad: any = { sdate: ser };
    const searchDateLdoSummaryLoadx: any = { data: JSON.stringify(searchDateLdoSummaryLoad) };
    this.apiService._appGetDashLdoSummary(searchDateLdoSummaryLoadx).subscribe(
      (res: any) => {
        if (res) {
          this.ldoSummaryData = res.LDOSummaryData;
          this.lscscol_data = [
            ['BBGS', parseFloat(this.ldoSummaryData.BBGS_OPENING_STOCK) ? parseFloat(this.ldoSummaryData.BBGS_OPENING_STOCK) : 0, '#599bd5'],
            ['SGS', parseFloat(this.ldoSummaryData.SGS_OPENING_STOCK) ? parseFloat(this.ldoSummaryData.SGS_OPENING_STOCK) : 0, '#ed7d31'],
            ['HEL', parseFloat(this.ldoSummaryData.HEL_OPENING_STOCK) ? parseFloat(this.ldoSummaryData.HEL_OPENING_STOCK) : 0, '#68c182'],
            ['DIL', parseFloat(this.ldoSummaryData.DIL_OPENING_STOCK) ? parseFloat(this.ldoSummaryData.DIL_OPENING_STOCK) : 0, '#fcc200']
          ];
          this.lsrcol_data = [
            ['BBGS', parseFloat(this.ldoSummaryData.BBGS_RECEIVED) ? parseFloat(this.ldoSummaryData.BBGS_RECEIVED) : 0, '#599bd5'],
            ['SGS', parseFloat(this.ldoSummaryData.SGS_RECEIVED) ? parseFloat(this.ldoSummaryData.SGS_RECEIVED) : 0, '#ed7d31'],
            ['HEL', parseFloat(this.ldoSummaryData.HEL_RECEIVED) ? parseFloat(this.ldoSummaryData.HEL_RECEIVED) : 0, '#68c182'],
            ['DIL', parseFloat(this.ldoSummaryData.DIL_RECEIVED) ? parseFloat(this.ldoSummaryData.DIL_RECEIVED) : 0, '#fcc200']
          ];
          this.lsccol_data = [
            ['BBGS', parseFloat(this.ldoSummaryData.BBGS_CONSUMPTION) ? parseFloat(this.ldoSummaryData.BBGS_CONSUMPTION) : 0, '#599bd5'],
            ['SGS', parseFloat(this.ldoSummaryData.SGS_CONSUMPTION) ? parseFloat(this.ldoSummaryData.SGS_CONSUMPTION) : 0, '#ed7d31'],
            ['HEL', parseFloat(this.ldoSummaryData.HEL_CONSUMPTION) ? parseFloat(this.ldoSummaryData.HEL_CONSUMPTION) : 0, '#68c182'],
            ['DIL', parseFloat(this.ldoSummaryData.DIL_CONSUMPTION) ? parseFloat(this.ldoSummaryData.DIL_CONSUMPTION) : 0, '#fcc200']
          ];
          this.lsclscol_data = [
            ['BBGS', parseFloat(this.ldoSummaryData.BBGS_CLOSING_STOCK) ? parseFloat(this.ldoSummaryData.BBGS_CLOSING_STOCK) : 0, '#599bd5'],
            ['SGS', parseFloat(this.ldoSummaryData.SGS_CLOSING_STOCK) ? parseFloat(this.ldoSummaryData.SGS_CLOSING_STOCK) : 0, '#ed7d31'],
            ['HEL', parseFloat(this.ldoSummaryData.HEL_CLOSING_STOCK) ? parseFloat(this.ldoSummaryData.HEL_CLOSING_STOCK) : 0, '#68c182'],
            ['DIL', parseFloat(this.ldoSummaryData.DIL_CLOSING_STOCK) ? parseFloat(this.ldoSummaryData.DIL_CLOSING_STOCK) : 0, '#fcc200']
          ];
        }
      },
      err => {

      });
  }

  openGomGomStyle(stnId: any,sdt): void {

   // let rowData: any;
    let searchDate: any;
    if (stnId === 1) {
      searchDate = {data: JSON.stringify({sdate: sdt, station: 'BBGS'}) }
    } else if (stnId === 2) {
      searchDate = {data: JSON.stringify({sdate: sdt, station: 'SGS'}) }
    } else if (stnId === 3) {
      searchDate = {data: JSON.stringify({sdate: sdt, station: 'HEL'}) }
    } else if (stnId === 4) {
      searchDate = {data: JSON.stringify({sdate: sdt, station: 'DIL'}) }
    }

    this.apiService._appGetDashGenStationUnitYtd(searchDate).subscribe(
      (res: any) => {
       // rowData = res;
        const dialogRef = this.dialog.open(GenpopupComponent, {
          width: '1200px',
          height: '700px',
          data: res
        });

        dialogRef.afterClosed().subscribe(() => { });
      });

  }
  openGomGomColumStyle(station: any, date: any): void {
    const rowData = { station: station, date: date };
    const dialogChRef = this.dialog.open(ColumpopupComponent, {
      width: '80%',
      height: 'auto',
      data: rowData
    });

    dialogChRef.afterClosed().subscribe(() => { });
  }

  // GENERATION_STATION_MONTHWISE_DAILY
  openGomGomGsmdStyle(station: any, month: any, year: any): void {
    const rowData = { station: station, month: month, year: year };
    const dialogChRef = this.dialog.open(GsmdComponent, {
      width: '600px',
      height: 'auto',
      data: rowData
    });
    dialogChRef.afterClosed().subscribe(() => { });
  }


}
