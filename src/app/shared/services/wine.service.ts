import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, shareReplay } from 'rxjs';
import { WineModel } from '../models/wine.model';
import { Paginator } from '../models/paginator.model';
import { BaseHttpService } from './base-http.service';
import { ErrorMessages } from '../constants/app.contants';

@Injectable({
  providedIn: 'root',
})
export class WineService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  getWineList(pagination: Paginator, query?: string): Observable<WineModel[]> {
    const params = this.getParams(pagination, query);
    return this.http.get<WineModel[]>('wine', { params }).pipe(
      map((res) => res),
      this.handleError(ErrorMessages.getWineList)
    );
  }

  getWine(id: string): Observable<WineModel> {
    return this.http.get<WineModel>(`wine/${id}`).pipe(
      map((res) => res),
      this.handleError(ErrorMessages.getWine)
    );
  }

  deleteWine(id: string): Observable<void> {
    return this.http.delete<void>(`wine/${id}`).pipe(
      map((res) => res),
      this.handleError(ErrorMessages.deleteWine)
    );
  }

  updateWine(wine: Partial<WineModel>): Observable<WineModel> {
    return this.http.put<WineModel>(`wine/${wine.id}`, wine).pipe(
      map((res) => res),
      this.handleError(ErrorMessages.updateWine)
    );
  }

  addWine(wine: Partial<WineModel>): Observable<WineModel> {
    const newWine = {
      ...wine,
      favorite: false,
      imagePath: 'assets/default-wine.jpeg',
    };
    return this.http.post<WineModel>(`wine`, newWine).pipe(
      map((res) => res),
      this.handleError(ErrorMessages.addWine)
    );
  }

  private getParams(pagination: Paginator, query?: string) {
    let params = new HttpParams();
    params = params.append('_page', pagination.page);
    params = params.append('_limit', pagination.pageSize);
    if (!!query) {
      params = params.append('q', query);
    }
    return params;
  }
}
