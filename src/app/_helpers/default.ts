import { DatePipe } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

/**
 * Use : Helper functions
 * Descriprion : Default Helper Class
 * Author : VVS
 */
export class DefaultHelper {
    constructor() { }

    dateFormat(dateValue = '', format = 'dd/MM/yyyy') {
        if (dateValue === '') { return dateValue; }
        const datePipe = new DatePipe('en-US');
        dateValue = datePipe.transform(dateValue, format);
        return dateValue;
    }

    removeNullElement(formData: any) {
        const filteredData = {};
        for (const [key, value] of Object.entries(formData)) {
            if (value == null || value === '') { continue; }
            filteredData[key] = value;
        }
        return filteredData;
    }

    isEmptyObject(obj = {}) {
        return !Object.keys(obj).length;
    }

    isObjectEmpty(Obj) {
        for (const key in Obj) {
            if (Obj.hasOwnProperty(key)) { return false; }
        }
        return true;
    }

    scrollTop(content = null) {
        if (content != null) { content.scrollToTop(1500); }
    }

    getHeaders() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded', // 'application/json'
                Authorization: JSON.parse(localStorage.getItem('appKey'))
            })
        };
        return httpOptions;
    }

    getAdminHeaders() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded', // 'application/json'
                Authorization: JSON.parse(localStorage.getItem('adminKey'))
            })
        };
        return httpOptions;
    }

    ucFirst(inputString: string) {
        // tslint:disable-next-line: max-line-length
        return (typeof inputString === 'string' && inputString.length > 0) ? inputString.charAt(0).toUpperCase() + inputString.substr(1).toLowerCase() : inputString;
    }

    getUserDetails() {
        return JSON.parse(localStorage.getItem('userDetails'));
    }

    arraytoString(arr: any) {
        return arr.toString();
    }


}



