import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../_services/api.service';
@Component({
  selector: 'app-gsmd',
  templateUrl: './gsmd.component.html',
  styleUrls: ['./gsmd.component.scss']
})
export class GsmdComponent implements OnInit {
  GenMtdDailyData: any;
  StationName: any;
  Month: any;
  Year: any;

  constructor(public dialogRef: MatDialogRef<GsmdComponent>,
              private apiService: ApiService,
              @Inject(MAT_DIALOG_DATA) public res) { }

  ngOnInit() {
    this.appDashGenMtdLoad();
  }
  appDashGenMtdLoad() {
    const searchStnMntYr: any = { station: this.res.station, month: this.res.month, year: this.res.year };
    const searchStnMntYrx: any = { data: JSON.stringify(searchStnMntYr) };
    this.apiService._appGetDashGenDaily(searchStnMntYrx).subscribe(
      (res: any) => {
        if (res) {
          this.StationName = res.StationName;
          this.Month = res.Month;
          this.Year = res.Year;
          this.GenMtdDailyData = res.GenMTDDailyData;
        }
      },
      err => {

      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
