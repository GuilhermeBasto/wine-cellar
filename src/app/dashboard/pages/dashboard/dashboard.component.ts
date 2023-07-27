import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Subject,
  combineLatest,
  debounceTime,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import {
  Paginator,
  defaultPaginator,
} from 'src/app/shared/models/paginator.model';
import { WineModel } from 'src/app/shared/models/wine.model';
import { WineService } from 'src/app/shared/services/wine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly querySubject = new BehaviorSubject<string>('');
  private readonly paginationSubject = new BehaviorSubject<Paginator>(
    defaultPaginator
  );
  private readonly destroyed$ = new Subject<boolean>();

  wines$ = combineLatest([this.querySubject, this.paginationSubject]).pipe(
    tap((res) => console.log(res)),
    switchMap(([query, pagination]) =>
      this.wineService.getWineList(pagination, query)
    )
  );

  error$ = this.wineService.error$;
  paginator$ = this.paginationSubject.asObservable();

  searchForm = this.fb.group({
    query: this.fb.control(''),
  });

  constructor(
    private wineService: WineService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(takeUntil(this.destroyed$), debounceTime(300))
      .subscribe((form) => {
        this.querySubject.next(form.query ?? '');
      });
  }

  handleUpdateFavorite(wine: WineModel) {
    const newWine = { ...wine, favorite: !wine.favorite };
    this.wineService
      .updateWine(newWine)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.paginationSubject.next({
            ...this.paginationSubject.value,
          });
        }
      });
  }

  handleDetails(id: string) {
    this.router.navigateByUrl(`/wine/${id}`);
  }

  handleLoadMore() {
    const { page, pageSize } = this.paginationSubject.value;
    this.paginationSubject.next({
      page,
      pageSize: pageSize + 4,
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.querySubject.unsubscribe();
    this.paginationSubject.unsubscribe();
    this.destroyed$.unsubscribe();
  }
}
