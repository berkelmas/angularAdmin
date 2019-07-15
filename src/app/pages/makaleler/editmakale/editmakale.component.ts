import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MakalelerService } from '../makaleler.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'ngx-editmakale',
  templateUrl: './editmakale.component.html',
  styleUrls: ['./editmakale.component.scss'],
})
export class EditmakaleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private makalelerService: MakalelerService) { }
  ID: string;
  makale_baslik: string;
  makale_kategori: string;
  makale_meta_description: string;
  makale_mesaj: string;

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.makalelerService.getSingleDocMakale(res.id).get().subscribe(makale => {

          this.ID = makale.id;
          this.makale_baslik = makale.data().makale_baslik;
          this.makale_kategori = makale.data().makale_kategori;
          this.makale_meta_description = makale.data().makale_meta_description;
          this.makale_mesaj = makale.data().makale_mesaj;

      });
    });
  }

  handleUpdateSubmit(form: NgForm) {
    this.makalelerService.updateDocMakale(
      this.ID,
      this.makale_baslik,
      this.makale_kategori,
      this.makale_mesaj,
      this.makale_meta_description,
    ).then(res => {
      return res;
    })
    .catch(err => err);
  }
}
