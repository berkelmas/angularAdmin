import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UzmanliklarService } from '../uzmanliklar.service';

@Component({
  selector: 'ngx-edituzmanlik',
  templateUrl: './edituzmanlik.component.html',
  styleUrls: ['./edituzmanlik.component.scss'],
})
export class EdituzmanlikComponent implements OnInit {

  constructor(private route: ActivatedRoute, private uzmanliklarService: UzmanliklarService) { }
  ID: string;
  uzmanlik_baslik: string;
  uzmanlik_mesaj: string;

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.uzmanliklarService.getSingleDocUzmanlik(res.id).get().subscribe(uzmanlik => {

          this.ID = uzmanlik.id;
          this.uzmanlik_baslik = uzmanlik.data().uzmanlik_baslik;
          this.uzmanlik_mesaj = uzmanlik.data().uzmanlik_mesaj;

      });
    });
  }

  handleUpdateSubmit(form: NgForm) {
    this.uzmanliklarService.updateDocUzmanlik(
      this.ID,
      this.uzmanlik_baslik,
      this.uzmanlik_mesaj,
    ).then(res => {
      return res;
    })
    .catch(err => err);
  }

}
