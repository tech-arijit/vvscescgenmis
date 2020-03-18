import { Component, OnInit } from '@angular/core';
import { DefaultHelper } from '../../../_helpers/default';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../../_services/api.service';
import * as XLSX from 'xlsx';  // For Excel Export
import * as moment from 'moment';

@Component({
  selector: 'app-bbgsmis',
  templateUrl: './bbgsmis.component.html',
  styleUrls: ['./bbgsmis.component.scss']
})
export class BbgsmisComponent implements OnInit {

  public formData: any;
  onDate: '';
  status1 = false;
  status2 = false;
  status3 = false;
  showdaily = false;
  showmtd = true;
  showytd = true;
  showcoal = false;
  show = false;
  hide = true;

  dailyData: any = [];
  MtmData: any = [];
  YtdData: any = [];
  DailyDataDCLR: any = [];
  MtdDataDCLR: any = [];
  YtdDataDCLR: any = [];
  DailyDataASHSR: any = [];
  DailyDataCLREC: any = [];
  MTDDataCLREC: any = [];
  YTDDataCLREC: any = [];
  CoalLDOSTockReport: any = [];

  alldatafileName = 'AllDataMISReport.xlsx';

  constructor(
    private fb: FormBuilder,
    private helper: DefaultHelper,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.formData = this.fb.group({
      searchDate: new FormControl('', [Validators.required])
    });
    this.appSearchByDateLoad();

  }

  appSearchByDateLoad() {
    const date: Date = new Date(Date.now() - 86400000);
    // tslint:disable-next-line:max-line-length
    const searchDateLoad: any = { data: JSON.stringify({ searchDate: (date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate()) }) };
    this.apiService._appGetMisDetails(searchDateLoad).subscribe(
      (res: any) => {
        if (res.length > 0) {

          this.onDate = res.sdate;
          this.dailyData = res.Dailydata;
          this.MtmData = res.MTDdata;
          this.YtdData = res.YTDdata;
          this.DailyDataDCLR = res.DailydataDCLR;
          this.MtdDataDCLR = res.MTDdataDCLR;
          this.YtdDataDCLR = res.YTDdataDCLR;
          this.DailyDataASHSR = res.DailyDataAshSR;
          this.DailyDataCLREC = res.DailydataCLREC;
          this.MTDDataCLREC = res.MTDdataCLREC;
          this.YTDDataCLREC = res.YTDdataCLREC;
          this.CoalLDOSTockReport = res.CoalLDOStockReport;
          this.show = true;
          this.hide = false;
          this.status1 = !this.status1;
          this.status2 = false;
          this.status3 = false;
          this.showdaily = false;
          this.showcoal = false;
          this.showmtd = true;
          this.showytd = true;

        } else {
          this.onDate = res.sdate;
          this.show = true;
          this.hide = false;
          this.status1 = !this.status1;
          this.status2 = false;
          this.status3 = false;
          this.showdaily = false;
          this.showcoal = false;
          this.showmtd = true;
          this.showytd = true;
        }
      },
      err => {

      });
  }
  appSearchByDate() {
    const search = moment(this.formData.value.searchDate).format('YYYY-MM-DD');
    const searchData: any = { data: JSON.stringify({ searchDate: search }) };

    this.apiService._appGetMisDetails(searchData).subscribe(
      (res: any) => {
        if (res) {

          this.onDate = res.sdate;
          this.dailyData = res.Dailydata;
          this.MtmData = res.MTDdata;
          this.YtdData = res.YTDdata;
          this.DailyDataDCLR = res.DailydataDCLR;
          this.MtdDataDCLR = res.MTDdataDCLR;
          this.YtdDataDCLR = res.YTDdataDCLR;
          this.DailyDataASHSR = res.DailyDataAshSR;
          this.DailyDataCLREC = res.DailydataCLREC;
          this.MTDDataCLREC = res.MTDdataCLREC;
          this.YTDDataCLREC = res.YTDdataCLREC;
          this.CoalLDOSTockReport = res.CoalLDOStockReport;
          this.show = true;
          this.hide = false;
          this.status1 = !this.status1;
          this.status2 = false;
          this.status3 = false;
          this.showdaily = false;
          this.showcoal = false;
          this.showmtd = true;
          this.showytd = true;

        } else {
          this.onDate = res.sdate;
          this.show = true;
          this.hide = false;
          this.status1 = !this.status1;
          this.status2 = false;
          this.status3 = false;
          this.showdaily = false;
          this.showcoal = false;
          this.showmtd = true;
          this.showytd = true;
        }
      },
      err => {

      });
  }

  toggleDisplay(ptr) {

    if (ptr === 1) {
      this.status1 = !this.status1;
      this.status2 = false;
      this.status3 = false;
      this.showdaily = false;
      this.showcoal = false;
      this.showmtd = true;
      this.showytd = true;
    } else if (ptr === 2) {
      this.status2 = !this.status2;
      this.status1 = false;
      this.status3 = false;
      this.showdaily = true;
      this.showcoal = false;
      this.showmtd = false;
      this.showytd = true;
    } else if (ptr === 3) {
      this.status3 = !this.status3;
      this.status1 = false;
      this.status2 = false;
      this.showdaily = true;
      this.showcoal = false;
      this.showmtd = true;
      this.showytd = false;
    } else {
      this.status1 = false;
      this.status2 = false;
      this.status3 = false;
      this.showdaily = true;
      this.showmtd = true;
      this.showytd = true;
      this.showcoal = true;
    }
  }

  // Excel Export //
  exportalldataexcel(): void {
    const element = document.getElementById('alldata-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.alldatafileName);
  }
}
