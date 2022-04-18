import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { pipe } from 'rxjs';
// import { map } from 'rxjs/operators';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// };
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getProduct() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  postData(data: any) {
    return this.http.post<any>('http://localhost:3000/dataList', data);
    // .pipe(
    //   map((res: any) => {
    //     return res;
    //   })
    // );
  }
  getData() {
    return this.http.get<any>('http://localhost:3000/dataList');
  }
}
