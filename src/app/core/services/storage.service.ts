import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: AngularFireStorage) { }

  public put(file: File, path: string) {
    const ref = this.storage.ref(path);
    return ref.put(file);
  }

  public putString(data: string, path: string) {
    const ref = this.storage.ref(path);
    return ref.putString(data);
  }

  public upload(file: File, path: string) {
    return this.storage.upload(path, file);
  }

}
