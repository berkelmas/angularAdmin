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
  makaleData: {};

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.makalelerService.getSingleDocMakale(res.id).get().subscribe(makale => {
        this.makaleData = {
          ID: makale.id,
          ...makale.data(),
        };
        console.log(this.makaleData);
      });
    });
  }

  handleUpdateSubmit(form: NgForm) {
    console.log(form.value);
  }

}
