import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalStatus } from '../enums/modal-status.enum';

@Injectable({
  providedIn: 'root',
})
export class ModalService implements OnDestroy {
  private readonly displaySubject = new BehaviorSubject<ModalStatus>(
    ModalStatus.CLOSE
  );

  watch(): Observable<ModalStatus> {
    return this.displaySubject.asObservable();
  }

  open() {
    this.displaySubject.next(ModalStatus.OPEN);
  }

  close() {
    this.displaySubject.next(ModalStatus.CLOSE);
  }

  ngOnDestroy(): void {
    this.displaySubject.unsubscribe();
  }
}
