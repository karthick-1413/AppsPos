import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) {
  }

  apiDataFromParent$ = new Subject() ;

  postApi(body: any) {
    let api = `http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId`;
    return this.http.post(api, body);
  }
}
