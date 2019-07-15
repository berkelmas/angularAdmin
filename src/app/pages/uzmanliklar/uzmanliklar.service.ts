import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UzmanliklarService {
  constructor(private fireStore: AngularFirestore) {}

  // gets all articles; name will be changed later.
  getDocUzmanliklar() {
    return this.fireStore.collection('uzmanliklar').snapshotChanges();
  }

  getSingleDocUzmanlik(id: string) {
    return this.fireStore.collection('uzmanliklar').doc(id);
  }

  updateDocUzmanlik(
    id: string,
    uzmanlik_baslik: string,
    uzmanlik_kategori: string,
  ) {
    return this.fireStore.collection('uzmanliklar').doc(id).update({
      uzmanlik_baslik: uzmanlik_baslik,
      uzmanlik_mesaj: uzmanlik_kategori,
    });
  }

}
