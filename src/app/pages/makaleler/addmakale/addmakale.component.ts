import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MakalelerService } from '../makaleler.service';

@Component({
  selector: 'ngx-addmakale',
  templateUrl: './addmakale.component.html',
  styleUrls: ['./addmakale.component.scss'],
})
export class AddmakaleComponent implements OnInit {

  makale_baslik: string;
  makale_kategori: string;
  makale_mesaj: string;
  makale_meta_description: string;

  constructor(private makalelerService: MakalelerService) { }

  ngOnInit() {
  }

  handleAddSubmit(form: NgForm) {
    if (
      this.makale_baslik &&
      this.makale_kategori &&
      this.makale_mesaj &&
      this.makale_mesaj &&
      this.makale_meta_description &&
      this.makale_kategori !== 'kategorisec'
    ) {

      this.makalelerService.addDocMakale(
        this.makale_baslik,
        this.makale_kategori,
        this.makale_mesaj,
        this.makale_meta_description,
      )
      .then(res => {
        form.reset();
        this.makale_kategori = 'kategorisec';
        this.makale_mesaj = '';
      })
      .catch(err => err);

    } else {

      return;

    }
  }

}
