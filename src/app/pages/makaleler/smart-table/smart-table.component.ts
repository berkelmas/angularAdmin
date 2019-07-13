import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../showcase-dialog/showcase-dialog.component';
import { LocalDataSource } from 'ng2-smart-table';

import { MakalelerService } from '../makaleler.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  settings = {
    actions: {
      columnTitle: 'İşlemler',
      add: false,
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
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    mode: 'external',
    columns: {
      ID: {
        title: 'ID',
        type: 'string',
      },
      makale_baslik: {
        title: 'Makale Başlığı',
        type: 'string',
      },
      makale_kategori: {
        title: 'Makale Kategorisi',
        type: 'string',
        valuePrepareFunction: (cell: any, row: any) => {
          switch (true) {
            case (cell === 'ishukuku'):
              return 'İş Hukuku';
            default:
              return cell;
          }
        },
      },
      makale_meta_description: {
        title: 'Makale Meta Açıklaması',
        type: 'string',
        valuePrepareFunction: (cell: any, row: any) => {
          switch (true) {
            case (cell === ''):
              return 'Açıklama Girilmemiş';
            default:
              return cell;
          }
        },
      },
    },
  };

  data: LocalDataSource = new LocalDataSource();
  gotData: any = [];

  constructor(private dialogService: NbDialogService, private makalelerService: MakalelerService) {
  }

  ngOnInit() {

    this.makalelerService.denemeFunc()
      .subscribe(res => {
        res.map(action =>
          this.gotData.push(
            {
              ...action.payload.doc.data(),
              ID: action.payload.doc.id,
            },
          ));
          this.data.load(this.gotData);
      },

          );

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  openEditDialog(event) {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: `${event.data.makaleId}`,
      },
    });
  }
}
