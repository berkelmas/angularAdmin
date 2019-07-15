import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
const slugify = require('slugify');

@Injectable({
  providedIn: 'root',
})
export class MakalelerService {
  constructor(private fireStore: AngularFirestore) {}

  // gets all articles; name will be changed later.
  denemeFunc() {
    return this.fireStore.collection('makaleler').snapshotChanges();
  }

  getSingleDocMakale(id: string) {
    return this.fireStore.collection('makaleler').doc(id);
  }

  updateDocMakale(
    id: string,
    makale_baslik: string,
    makale_kategori: string,
    makale_mesaj: string,
    makale_meta_description: string,
  ) {
    return this.fireStore.collection('makaleler').doc(id).update({
      makale_baslik: makale_baslik,
      makale_kategori: makale_kategori,
      makale_mesaj: makale_mesaj,
      makale_meta_description: makale_meta_description,
    });
  }

  addDocMakale(
    makale_baslik: string,
    makale_kategori: string,
    makale_mesaj: string,
    makale_meta_description: string,
  ) {
    const makale_slug = slugify(makale_baslik, {lower : true});
    const makale_yayintarihi = new Date();
    return this.fireStore.collection('makaleler').add({
      makale_baslik: makale_baslik,
      makale_kategori: makale_kategori,
      makale_mesaj: makale_mesaj,
      makale_meta_description: makale_meta_description,
      makale_slug: makale_slug,
      makale_yayintarihi: makale_yayintarihi,
    });
  }

  deleteDocMakale(id: string) {
    return this.fireStore.collection('makaleler').doc(id).delete();
  }
}
