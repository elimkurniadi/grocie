import { Injectable } from '@angular/core';
import { Page, Sort, Example } from '@shared/models';
import { Observable } from 'rxjs';
import { ApiService } from './core/api.service';
import { GlobalService } from './global.service';
import { tap } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private api: ApiService, private gs: GlobalService) {}

  getData(pagination: Page = null, ordering: Sort = null, filter: object = null): Observable<any> {
    return this.api.getData(`${environment.api_url}station-list`, pagination, ordering, filter).pipe(
      tap((data) => {
        this.gs.log('getData');
        return data;
      })
    );
  }

  getDataById(id: string): Observable<any> {
    return this.api.getData(`${environment.api_url}station-list/${id}`).pipe(
      tap((data) => {
        this.gs.log('getDataById');
        return data;
      })
    );
  }

  createData(body: Example): Observable<any> {
    return this.api.postData(`${environment.api_url}station-list`, body).pipe(
      tap((data) => {
        this.gs.log('createData');
        return data;
      })
    );
  }

  updateData(body: Example, id: any): Observable<any> {
    return this.api.putData(`${environment.api_url}station-list/${id}`, body).pipe(
      tap((data) => {
        this.gs.log('updateData');
        return data;
      })
    );
  }

  deleteData(id: any): Observable<any> {
    return this.api.deleteData(`${environment.api_url}station-list/${id}`).pipe(
      tap((data) => {
        this.gs.log('deleteData');
        return data;
      })
    );
  }
}
