import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { UzmanliklarService } from '../uzmanliklar.service';

@Component({
  selector: 'ngx-smart-table-uzmanliklar',
  templateUrl: './smart-table-uzmanliklar.component.html',
  styleUrls: ['./smart-table-uzmanliklar.component.scss'],
})
export class SmartTableUzmanliklarComponent implements OnInit {

  settings = {
    actions: {
      columnTitle: 'Düzenle',
      add: false,
      delete: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    mode: 'external',
    columns: {
      uzmanlik_baslik: {
        title: 'Uzmanlık Başlığı',
        type: 'string',
      },
    },
  };

  data: LocalDataSource = new LocalDataSource();
  gotData: any = [];

  constructor(
    private uzmanliklarService: UzmanliklarService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.uzmanliklarService.getDocUzmanliklar()
      .subscribe(res => {
        this.gotData = [];
        res.map(action => {
          this.gotData.push({
            ...action.payload.doc.data(),
            ID : action.payload.doc.id,
          });
        });
        this.data.load(this.gotData);
      });
    }

  openEditWindow(event) {
    this.router.navigate(['/pages/uzmanliklar', `${event.data.ID}`, `${event.data.uzmanlik_baslik_nondisplay}`]);
  }
}
