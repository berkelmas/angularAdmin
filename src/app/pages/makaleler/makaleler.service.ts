import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
    this.fireStore.collection('makaleler').doc(id).update({
      makale_baslik: makale_baslik,
      makale_kategori: makale_kategori,
      makale_mesaj: makale_mesaj,
      makale_meta_description: makale_meta_description,
    });
  }
}
