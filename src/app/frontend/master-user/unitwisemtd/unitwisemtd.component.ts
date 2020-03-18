import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../_services/api.service';
import * as XLSX from 'xlsx';  // For Excel Export
// tslint:disable:max-line-length
@Component({
  selector: 'app-unitwisemtd',
  templateUrl: './unitwisemtd.component.html',
  styleUrls: ['./unitwisemtd.component.scss']
})
export class UnitwisemtdComponent implements OnInit {
  dailymtd: any[];
  gmtddatafileName = 'UnitWiseGenerationMTDMISReport.xlsx';
  // title = 'GENERATION (MTD)';
  title = '';
  type = 'ComboChart';
  data = [
    // ['APR', 3, 2, 5],
    // ['MAY', 2, 3, 16],
    // ['JUN', 1, 5, 3],
    // ['JUL', 3, 9, 4],
    // ['AUG', 4, 2, 7],
    // ['SEP', 3, 2, 5],
    // ['OCT', 2, 3, 6],
    // ['NOV', 1, 5, 3],
    // ['DEC', 3, 19, 4],
    // ['JAN', 4, 2, 7],
    // ['FEB', 3, 2, 5],
    // ['MAR', 2, 3, 6],
  ];

  columnNames = ['', 'UNIT-1', 'UNIT-2', 'UNIT-3'];
  options = {
    // hAxis: {
    //   title: 'Month',
    // },
    // vAxis: {
    //   title: 'Units Generated'
    // },
    seriesType: 'bars',
    bar: { groupWidth: '50%' },
    colors: ['#ed7d31', '#68c182', '#fcc200'],
    chartArea: { width: '75%' },
    legend: { position: 'bottom', alignment: 'start' },
    // series: {3: {type: 'line'}}
  };
  width = 1120;
  height = 200;
  GenStationUnit: any;
  StationName: any;
  FinYear: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.getDailyMtdData();
  }

  getDailyMtdData() {
    this.activatedRoute.queryParams.subscribe((search: any) => {
      const searchDateLoadx: any = { data: JSON.stringify(search) };
      this.apiService._appGetDashGenStation(searchDateLoadx).subscribe(
        (res: any) => {
          if (res) {
            this.dailymtd = res;
            this.GenStationUnit = res.GenStationUnitData;
            this.StationName = res.Station;
            this.FinYear = res.FinYear;
            if (search.station === 'BBGS') {
              this.data = [
                ['APR', this.GenStationUnit[0].APR ? this.GenStationUnit[0].APR : 0, this.GenStationUnit[1].APR ? this.GenStationUnit[1].APR : 0, this.GenStationUnit[2].APR ? this.GenStationUnit[2].APR : 0],
                ['MAY', this.GenStationUnit[0].MAY ? this.GenStationUnit[0].MAY : 0, this.GenStationUnit[1].MAY ? this.GenStationUnit[1].MAY : 0, this.GenStationUnit[2].MAY ? this.GenStationUnit[2].MAY : 0],
                ['JUN', this.GenStationUnit[0].JUN ? this.GenStationUnit[0].JUN : 0, this.GenStationUnit[1].JUN ? this.GenStationUnit[1].JUN : 0, this.GenStationUnit[2].JUN ? this.GenStationUnit[2].JUN : 0],
                ['JUL', this.GenStationUnit[0].JUL ? this.GenStationUnit[0].JUL : 0, this.GenStationUnit[1].JUL ? this.GenStationUnit[1].JUL : 0, this.GenStationUnit[2].JUL ? this.GenStationUnit[2].JUL : 0],
                ['AUG', this.GenStationUnit[0].AUG ? this.GenStationUnit[0].AUG : 0, this.GenStationUnit[1].AUG ? this.GenStationUnit[1].AUG : 0, this.GenStationUnit[2].AUG ? this.GenStationUnit[2].AUG : 0],
                ['SEP', this.GenStationUnit[0].SEP ? this.GenStationUnit[0].SEP : 0, this.GenStationUnit[1].SEP ? this.GenStationUnit[1].SEP : 0, this.GenStationUnit[2].SEP ? this.GenStationUnit[2].SEP : 0],
                ['OCT', this.GenStationUnit[0].OCT ? this.GenStationUnit[0].OCT : 0, this.GenStationUnit[1].OCT ? this.GenStationUnit[1].OCT : 0, this.GenStationUnit[2].OCT ? this.GenStationUnit[2].OCT : 0],
                ['NOV', this.GenStationUnit[0].NOV ? this.GenStationUnit[0].NOV : 0, this.GenStationUnit[1].NOV ? this.GenStationUnit[1].NOV : 0, this.GenStationUnit[2].NOV ? this.GenStationUnit[2].NOV : 0],
                ['DEC', this.GenStationUnit[0].DEC ? this.GenStationUnit[0].DEC : 0, this.GenStationUnit[1].DEC ? this.GenStationUnit[1].DEC : 0, this.GenStationUnit[2].DEC ? this.GenStationUnit[2].DEC : 0],
                ['JAN', this.GenStationUnit[0].JAN ? this.GenStationUnit[0].JAN : 0, this.GenStationUnit[1].JAN ? this.GenStationUnit[1].JAN : 0, this.GenStationUnit[2].JAN ? this.GenStationUnit[2].JAN : 0],
                ['FEB', this.GenStationUnit[0].FEB ? this.GenStationUnit[0].FEB : 0, this.GenStationUnit[1].FEB ? this.GenStationUnit[1].FEB : 0, this.GenStationUnit[2].FEB ? this.GenStationUnit[2].FEB : 0],
                ['MAR', this.GenStationUnit[0].MAR ? this.GenStationUnit[0].MAR : 0, this.GenStationUnit[1].MAR ? this.GenStationUnit[1].MAR : 0, this.GenStationUnit[2].MAR ? this.GenStationUnit[2].MAR : 0],
              ];
              this.columnNames = ['', 'UNIT-1', 'UNIT-2', 'UNIT-3'];
              this.options = {
                // hAxis: {
                //   title: 'Month',
                // },
                // vAxis: {
                //   title: 'Units Generated'
                // },
                seriesType: 'bars',
                bar: { groupWidth: '50%' },
                colors: ['#ed7d31', '#68c182', '#fcc200'],
                chartArea: { width: '75%' },
                legend: { position: 'bottom', alignment: 'start' },
                // series: {3: {type: 'line'}}
              };
            } else {
              this.data = [
                ['APR', this.GenStationUnit[0].APR ? this.GenStationUnit[0].APR : 0, this.GenStationUnit[1].APR ? this.GenStationUnit[1].APR : 0, 0],
                ['MAY', this.GenStationUnit[0].MAY ? this.GenStationUnit[0].MAY : 0, this.GenStationUnit[1].MAY ? this.GenStationUnit[1].MAY : 0, 0],
                ['JUN', this.GenStationUnit[0].JUN ? this.GenStationUnit[0].JUN : 0, this.GenStationUnit[1].JUN ? this.GenStationUnit[1].JUN : 0, 0],
                ['JUL', this.GenStationUnit[0].JUL ? this.GenStationUnit[0].JUL : 0, this.GenStationUnit[1].JUL ? this.GenStationUnit[1].JUL : 0, 0],
                ['AUG', this.GenStationUnit[0].AUG ? this.GenStationUnit[0].AUG : 0, this.GenStationUnit[1].AUG ? this.GenStationUnit[1].AUG : 0, 0],
                ['SEP', this.GenStationUnit[0].SEP ? this.GenStationUnit[0].SEP : 0, this.GenStationUnit[1].SEP ? this.GenStationUnit[1].SEP : 0, 0],
                ['OCT', this.GenStationUnit[0].OCT ? this.GenStationUnit[0].OCT : 0, this.GenStationUnit[1].OCT ? this.GenStationUnit[1].OCT : 0, 0],
                ['NOV', this.GenStationUnit[0].NOV ? this.GenStationUnit[0].NOV : 0, this.GenStationUnit[1].NOV ? this.GenStationUnit[1].NOV : 0, 0],
                ['DEC', this.GenStationUnit[0].DEC ? this.GenStationUnit[0].DEC : 0, this.GenStationUnit[1].DEC ? this.GenStationUnit[1].DEC : 0, 0],
                ['JAN', this.GenStationUnit[0].JAN ? this.GenStationUnit[0].JAN : 0, this.GenStationUnit[1].JAN ? this.GenStationUnit[1].JAN : 0, 0],
                ['FEB', this.GenStationUnit[0].FEB ? this.GenStationUnit[0].FEB : 0, this.GenStationUnit[1].FEB ? this.GenStationUnit[1].FEB : 0, 0],
                ['MAR', this.GenStationUnit[0].MAR ? this.GenStationUnit[0].MAR : 0, this.GenStationUnit[1].MAR ? this.GenStationUnit[1].MAR : 0, 0],
              ];
              this.columnNames = ['', 'UNIT-1', 'UNIT-2', ''];
              this.options = {
                // hAxis: {
                //   title: 'Month',
                // },
                // vAxis: {
                //   title: 'Units Generated'
                // },
                seriesType: 'bars',
                bar: { groupWidth: '50%' },
                colors: ['#ed7d31', '#68c182', ''],
                chartArea: { width: '75%' },
                legend: { position: 'bottom', alignment: 'start' },
                // series: {3: {type: 'line'}}
              };
            }
          }
        },
        err => {

        });
    });
  }

  // Excel Export //
  exportgmtddataexcel(): void {
    const element = document.getElementById('unitgmtddata-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.gmtddatafileName);
  }

}
