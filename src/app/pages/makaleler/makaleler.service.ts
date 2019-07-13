import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MakalelerService {
  constructor(private fireStore: AngularFirestore) {}

  denemeFunc() {
    return this.fireStore.collection('makaleler').snapshotChanges();
  }
}
