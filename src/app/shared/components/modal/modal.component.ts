import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalStatus } from '../../enums/modal-status.enum';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  display$: Observable<ModalStatus> = new Observable();

  readonly ModalStatus = ModalStatus;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }
}
