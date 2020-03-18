import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  API_LOGIN,
  API_CHANGE_PASS,
  API_USER_LIST,
  API_USER_SAVE,
  API_FORGOT_PASS,
  API_MIS_DETAILS,
  API_DASH_COLCHART,
  API_DASH_GENMTD,
  API_DASH_GENDAILY,
  API_DASH_GENSTATIONUNIT,

  API_PARAMETERS,
  API_DASH_COALSUMMARY,
  API_DASH_LDOSUMMARY,
  // API_QUS_LIST,
  API_COMPANY_LIST,
  API_DEPTGRP_LIST,
  API_REG,
  API_DASH_GENSTATIONUNIT_YTD,
  // API_SURVEY_LIST,
  // API_EMPSURV_LIST,
  // API_EMPSURV_INS,
  // API_SURVEY_DTLS,
  // API_EMPLOYEE_DTLS
} from '../_common/constant';
import { DefaultHelper } from '../../_helpers/default';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private helper: DefaultHelper) { }

  _appLogin(loginData: any) {
    return this.httpClient.post(API_LOGIN, loginData);
  }

  _appChangePass(changePassData: any) {
    return this.httpClient.post(API_CHANGE_PASS, changePassData, this.helper.getHeaders());
  }

  _appUserList(userListData: any) {
    return this.httpClient.post(API_USER_LIST, userListData, this.helper.getHeaders());
  }

  _appUserSave(userSaveData: any) {
    return this.httpClient.post(API_USER_SAVE, userSaveData, this.helper.getHeaders());
  }

  _appForgotPass(forPassData: any) {
    return this.httpClient.post(API_FORGOT_PASS, forPassData);
  }

  _appGetMisDetails(searchDate: any) {
    return this.httpClient.post(API_MIS_DETAILS, searchDate);
  }

  _appGetDashColChart() {
    return this.httpClient.get(API_DASH_COLCHART);
  }

  _appGetDashGenMtd(searchDate: any) {
    return this.httpClient.post(API_DASH_GENMTD, searchDate);
  }

  _appGetDashGenDaily(searchDate: any) {
    return this.httpClient.post(API_DASH_GENDAILY, searchDate);
  }

  _appGetDashGenStation(searchDate: any) {
    return this.httpClient.post(API_DASH_GENSTATIONUNIT, searchDate);
  }

  _getCompanyList() {
    return this.httpClient.get(API_COMPANY_LIST);
  }

  _appGetDashCoalSummary(searchDate: any) {
    return this.httpClient.post(API_DASH_COALSUMMARY, searchDate);
  }

  _appGetDashLdoSummary(searchDate: any) {
    return this.httpClient.post(API_DASH_LDOSUMMARY, searchDate);
  }
  _appGetDashGenStationUnitYtd(searchDate: any) {
    return this.httpClient.post(API_DASH_GENSTATIONUNIT_YTD, searchDate);
  }

  _getParameterList() {
    return this.httpClient.get(API_PARAMETERS);
  }

  _getdeptGrpList(companyData: any) {
    return this.httpClient.post(API_DEPTGRP_LIST, companyData);
  }

  _appRegistration(registrationData: any) {
    return this.httpClient.post(API_REG, registrationData);
  }

  // _getSurveyList() {
  //   return this.httpClient.get(API_SURVEY_LIST, this.helper.getHeaders());
  // }

  // _appEmpSurvey(empsurvey: any) {
  //   return this.httpClient.post(API_EMPSURV_LIST, empsurvey, this.helper.getHeaders());
  // }

  // _finalSubmit(ansData: any) {
  //   return this.httpClient.post(API_EMPSURV_INS, ansData, this.helper.getHeaders());
  // }

  // _appSurveyDtls(surveydtls: any) {
  //   return this.httpClient.post(API_SURVEY_DTLS, surveydtls, this.helper.getHeaders());
  // }

  // _getEmployeeDtls() {
  //   return this.httpClient.get(API_EMPLOYEE_DTLS, this.helper.getHeaders());
  // }

}
