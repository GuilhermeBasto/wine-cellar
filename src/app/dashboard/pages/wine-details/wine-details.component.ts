import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, filter, switchMap, take } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';
import { WineService } from 'src/app/shared/services/wine.service';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.scss'],
})
export class WineDetailsComponent implements OnInit, OnDestroy {
  isEditing: boolean = false;
  showDescription: boolean = false;

  private wineSubject = new BehaviorSubject<string>('');

  wine$ = this.wineSubject.pipe(
    filter((id) => !!id),
    switchMap((id) => this.wineService.getWine(id))
  );
  error$ = this.wineService.error$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wineService: WineService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      this.wineSubject.next(params['id']);
    });
  }

  handleEdit(id: string): void {
    this.router.navigateByUrl(`/wine/${id}/edit`);
  }

  handleDelete(id: string): void {
    this.wineService
      .deleteWine(id)
      .pipe(take(1))
      .subscribe(() => this.router.navigateByUrl('/'));
  }

  handleDeleteModal(): void {
    this.modalService.open();
  }

  handleClose(): void {
    this.modalService.close();
  }

  handleShowDescription() {
    this.showDescription = !this.showDescription;
  }

  ngOnDestroy(): void {
    this.wineSubject.unsubscribe();
  }
}
