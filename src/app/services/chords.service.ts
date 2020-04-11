import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChordsService {

  constructor(public fireStore: AngularFirestore) { }
  loadAllChords() {
    return this.fireStore.collection('chords').snapshotChanges().pipe(map(chords => {
      return chords.map(a => {
        const data = a.payload.doc.data();
        // @ts-ignore
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  findChordsByArtist(artist) {
    return this.fireStore.collection('chords', ref => ref.where('artistCode', '==', artist)
    ).snapshotChanges().pipe(map(chords => {
      return chords.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  findChordsByName(keywords) {
    return this.fireStore.collection('chords', ref => ref.where('keywords', 'array-contains', keywords)
    ).snapshotChanges().pipe(map(chords => {
      return chords.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
}
