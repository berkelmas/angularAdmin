import { Component, Input } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        Makale İçeriği
      </nb-card-header>
      <nb-card-body>
        <ckeditor [(ngModel)]="data" [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
  @Input() data: string;
}
