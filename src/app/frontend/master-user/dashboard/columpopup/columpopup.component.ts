import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/frontend/_services/api.service';

@Component({
  selector: 'app-columpopup',
  templateUrl: './columpopup.component.html',
  styleUrls: ['./columpopup.component.scss']
})
export class ColumpopupComponent implements OnInit {

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
  StationName: any;
  Month: any;
  GenStationUnitData: any;
  FinYear: any;

  constructor(
    public dialogRef: MatDialogRef<ColumpopupComponent>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public rowData) { }

  ngOnInit() {
    this.appDashGenMtdLoad();
  }
  appDashGenMtdLoad() {
    const searchStnMntYr: any = { station: this.rowData.station, sdate: this.rowData.date };
    const searchStnMntYrx: any = { data: JSON.stringify(searchStnMntYr) };

    this.apiService._appGetDashGenStation(searchStnMntYrx).subscribe(
      (res: any) => {
        if (res) {
          this.StationName = res.Station;
          this.FinYear = res.FinYear;

          /* tslint:disable */
          this.GenStationUnitData = res.GenStationUnitData;
          if (this.rowData.station == 'BBGS') {
            this.data = [
              ['APR', this.GenStationUnitData[0].APR ? this.GenStationUnitData[0].APR : 0, this.GenStationUnitData[1].APR ? this.GenStationUnitData[1].APR : 0, this.GenStationUnitData[2].APR ? this.GenStationUnitData[2].APR : 0],
              ['MAY', this.GenStationUnitData[0].MAY ? this.GenStationUnitData[0].MAY : 0, this.GenStationUnitData[1].MAY ? this.GenStationUnitData[1].MAY : 0, this.GenStationUnitData[2].MAY ? this.GenStationUnitData[2].MAY : 0],
              ['JUN', this.GenStationUnitData[0].JUN ? this.GenStationUnitData[0].JUN : 0, this.GenStationUnitData[1].JUN ? this.GenStationUnitData[1].JUN : 0, this.GenStationUnitData[2].JUN ? this.GenStationUnitData[2].JUN : 0],
              ['JUL', this.GenStationUnitData[0].JUL ? this.GenStationUnitData[0].JUL : 0, this.GenStationUnitData[1].JUL ? this.GenStationUnitData[1].JUL : 0, this.GenStationUnitData[2].JUL ? this.GenStationUnitData[2].JUL : 0],
              ['AUG', this.GenStationUnitData[0].AUG ? this.GenStationUnitData[0].AUG : 0, this.GenStationUnitData[1].AUG ? this.GenStationUnitData[1].AUG : 0, this.GenStationUnitData[2].AUG ? this.GenStationUnitData[2].AUG : 0],
              ['SEP', this.GenStationUnitData[0].SEP ? this.GenStationUnitData[0].SEP : 0, this.GenStationUnitData[1].SEP ? this.GenStationUnitData[1].SEP : 0, this.GenStationUnitData[2].SEP ? this.GenStationUnitData[2].SEP : 0],
              ['OCT', this.GenStationUnitData[0].OCT ? this.GenStationUnitData[0].OCT : 0, this.GenStationUnitData[1].OCT ? this.GenStationUnitData[1].OCT : 0, this.GenStationUnitData[2].OCT ? this.GenStationUnitData[2].OCT : 0],
              ['NOV', this.GenStationUnitData[0].NOV ? this.GenStationUnitData[0].NOV : 0, this.GenStationUnitData[1].NOV ? this.GenStationUnitData[1].NOV : 0, this.GenStationUnitData[2].NOV ? this.GenStationUnitData[2].NOV : 0],
              ['DEC', this.GenStationUnitData[0].DEC ? this.GenStationUnitData[0].DEC : 0, this.GenStationUnitData[1].DEC ? this.GenStationUnitData[1].DEC : 0, this.GenStationUnitData[2].DEC ? this.GenStationUnitData[2].DEC : 0],
              ['JAN', this.GenStationUnitData[0].JAN ? this.GenStationUnitData[0].JAN : 0, this.GenStationUnitData[1].JAN ? this.GenStationUnitData[1].JAN : 0, this.GenStationUnitData[2].JAN ? this.GenStationUnitData[2].JAN : 0],
              ['FEB', this.GenStationUnitData[0].FEB ? this.GenStationUnitData[0].FEB : 0, this.GenStationUnitData[1].FEB ? this.GenStationUnitData[1].FEB : 0, this.GenStationUnitData[2].FEB ? this.GenStationUnitData[2].FEB : 0],
              ['MAR', this.GenStationUnitData[0].MAR ? this.GenStationUnitData[0].MAR : 0, this.GenStationUnitData[1].MAR ? this.GenStationUnitData[1].MAR : 0, this.GenStationUnitData[2].MAR ? this.GenStationUnitData[2].MAR : 0],
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
              ['APR', this.GenStationUnitData[0].APR ? this.GenStationUnitData[0].APR : 0, this.GenStationUnitData[1].APR ? this.GenStationUnitData[1].APR : 0, 0],
              ['MAY', this.GenStationUnitData[0].MAY ? this.GenStationUnitData[0].MAY : 0, this.GenStationUnitData[1].MAY ? this.GenStationUnitData[1].MAY : 0, 0],
              ['JUN', this.GenStationUnitData[0].JUN ? this.GenStationUnitData[0].JUN : 0, this.GenStationUnitData[1].JUN ? this.GenStationUnitData[1].JUN : 0, 0],
              ['JUL', this.GenStationUnitData[0].JUL ? this.GenStationUnitData[0].JUL : 0, this.GenStationUnitData[1].JUL ? this.GenStationUnitData[1].JUL : 0, 0],
              ['AUG', this.GenStationUnitData[0].AUG ? this.GenStationUnitData[0].AUG : 0, this.GenStationUnitData[1].AUG ? this.GenStationUnitData[1].AUG : 0, 0],
              ['SEP', this.GenStationUnitData[0].SEP ? this.GenStationUnitData[0].SEP : 0, this.GenStationUnitData[1].SEP ? this.GenStationUnitData[1].SEP : 0, 0],
              ['OCT', this.GenStationUnitData[0].OCT ? this.GenStationUnitData[0].OCT : 0, this.GenStationUnitData[1].OCT ? this.GenStationUnitData[1].OCT : 0, 0],
              ['NOV', this.GenStationUnitData[0].NOV ? this.GenStationUnitData[0].NOV : 0, this.GenStationUnitData[1].NOV ? this.GenStationUnitData[1].NOV : 0, 0],
              ['DEC', this.GenStationUnitData[0].DEC ? this.GenStationUnitData[0].DEC : 0, this.GenStationUnitData[1].DEC ? this.GenStationUnitData[1].DEC : 0, 0],
              ['JAN', this.GenStationUnitData[0].JAN ? this.GenStationUnitData[0].JAN : 0, this.GenStationUnitData[1].JAN ? this.GenStationUnitData[1].JAN : 0, 0],
              ['FEB', this.GenStationUnitData[0].FEB ? this.GenStationUnitData[0].FEB : 0, this.GenStationUnitData[1].FEB ? this.GenStationUnitData[1].FEB : 0, 0],
              ['MAR', this.GenStationUnitData[0].MAR ? this.GenStationUnitData[0].MAR : 0, this.GenStationUnitData[1].MAR ? this.GenStationUnitData[1].MAR : 0, 0],
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
  }

  onNoColumClick(): void {
    this.dialogRef.close();
  }

}
