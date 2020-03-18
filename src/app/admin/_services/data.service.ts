import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  public paramSource = new BehaviorSubject('default message');
  currentParams = this.paramSource.asObservable();

  // -------------------------------- //
  public centerFocus = new BehaviorSubject('');
  focusParams = this.centerFocus.asObservable();

  constructor() { }

  sendParams(message: any) {
    this.paramSource.next(message);
  }

  sendFocus(message: any) {
    this.centerFocus.next(message);
  }

}
