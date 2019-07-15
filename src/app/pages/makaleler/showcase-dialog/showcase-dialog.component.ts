import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

import { MakalelerService } from '../makaleler.service';

@Component({
  selector: 'ngx-showcase-dialog',
  templateUrl: 'showcase-dialog.component.html',
  styleUrls: ['showcase-dialog.component.scss'],
})
export class ShowcaseDialogComponent {

  @Input() title: string;
  @Input() id: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>, private makalelerService: MakalelerService) {}

  dismiss() {
    this.ref.close();
  }

  sendDeleteSignal() {
    this.makalelerService.deleteDocMakale(this.id)
      .then(res => res)
      .catch(err => err);
    this.ref.close();
  }
}
