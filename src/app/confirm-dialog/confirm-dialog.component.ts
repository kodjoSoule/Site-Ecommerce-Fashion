// confirm-dialog.component.ts
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" (click)="activeModal.dismiss(false)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ message }}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss(false)">Annuler</button>
      <button type="button" class="btn btn-danger" (click)="activeModal.close(true)">Supprimer</button>
    </div>
  `
})
export class ConfirmDialogComponent {
  @Input() title: string = 'Confirmation';
  @Input() message: string = '';

  constructor(public activeModal: NgbActiveModal) {}
}
