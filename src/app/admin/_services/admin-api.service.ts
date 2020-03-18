import { Injectable } from '@angular/core';
import {
  API_ADMIN_LOGIN,
  API_COMPANY_LIST,
  API_DEPTGRP_LIST,
  API_SURVEY_REPORT,
  API_EMP_ENTRY,
  API_ADMIN_QLIST,
  API_ADMIN_EMPSUR,
  API_ADMIN_SURVEYLIST,
  API_ADMIN_DETAILS,
  API_COMDEPTGRP_LIST,
  API_ADMIN_SURVIEW,
  API_ADMIN_SURRESPONSE,
  API_ADMIN_SURRESCOUNT
} from '../_common/admin_constant';

import { DefaultHelper } from '../../_helpers/default';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private httpClient: HttpClient,
              private helper: DefaultHelper,
              private router: Router) { }

  _adminLogin(loginData: any) {
    return this.httpClient.post(API_ADMIN_LOGIN, loginData);
  }

  _getCompanyList() {
    return this.httpClient.get(API_COMPANY_LIST);
  }

  _getdeptGrpList(companyData: any) {
    return this.httpClient.post(API_DEPTGRP_LIST, companyData);
  }

  _getnewdeptGrpList(companyData: any) {
    return this.httpClient.post(API_COMDEPTGRP_LIST, companyData);
  }

  _surveyReport(srchParams: any) {
    return this.httpClient.post(API_SURVEY_REPORT, srchParams, this.helper.getAdminHeaders());
  }

  _empEntry(empData: any) {
    return this.httpClient.post(API_EMP_ENTRY, empData, this.helper.getAdminHeaders());
  }

  _questionList(surveyData: any) {
    return this.httpClient.post(API_ADMIN_QLIST, surveyData, this.helper.getAdminHeaders());
  }

  _adminAnswerSubmit(ansData: any) {
    return this.httpClient.post(API_ADMIN_EMPSUR, ansData, this.helper.getAdminHeaders());
  }

  _adminSurveyList(searchData) {
    return this.httpClient.post(API_ADMIN_SURVEYLIST, searchData, this.helper.getAdminHeaders());
  }

  _adminDetails() {
    return this.httpClient.get(API_ADMIN_DETAILS, this.helper.getAdminHeaders());
  }

  _adminAnswerView(answerdata: any) {
    return this.httpClient.post(API_ADMIN_SURVIEW, answerdata, this.helper.getAdminHeaders());
  }

  _adminSurveyResponse(answerdata: any) {
    return this.httpClient.post(API_ADMIN_SURRESPONSE, answerdata, this.helper.getAdminHeaders());
  }

  _adminResponseBreakCount(answerdata: any) {
    return this.httpClient.post(API_ADMIN_SURRESCOUNT, answerdata, this.helper.getAdminHeaders());
  }
}
