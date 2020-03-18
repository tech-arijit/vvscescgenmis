import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../_services/api.service';
import * as XLSX from 'xlsx';  // For Excel Export

@Component({
  selector: 'app-genmtd',
  templateUrl: './genmtd.component.html',
  styleUrls: ['./genmtd.component.scss']
})
export class GenmtdComponent implements OnInit {
  dailymtddata: any[];
  gmtddatafileName = 'GenerationMTD.xlsx';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.getDailyData();
  }

  getDailyData() {
    this.activatedRoute.queryParams.subscribe((search: any) => {
      const searchDateLoadx: any = { data: JSON.stringify(search) };
      this.apiService._appGetDashGenDaily(searchDateLoadx).subscribe(
        (res: any) => {
          if (res) {
            this.dailymtddata = res;
          }
        },
        err => {

        });
    });
  }

  // Excel Export //
  exportgmtddataexcel(): void {
    const element = document.getElementById('gmtd-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.gmtddatafileName);
  }

}
