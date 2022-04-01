import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: AngularFireStorage) { }

  public upload(file: File, path: string, uid: string, fileName?: string) {
    this.checkTypeAndSize(file)
    const ref = this.storage.ref(`${path}/${uid}`)
    const blob = this.createBlob(file, fileName || file.name)
    const task = ref.put(blob);
    return {task, ref};
  }

  getDownloadURL(collection: string, uid: string) {
    return this.storage.ref(`${collection}/${uid}`).getDownloadURL();
  }

  private checkTypeAndSize(file: File) {
    if (file.type === 'svg') return;
    if (file.size > 100000) return;
  }

  private createBlob(file: File, name: string) {
    const ext = file.type === 'image/png' ? 'png' : file.type === 'image/jpg' ? 'jpg' : 'jpeg';
    const blob = file.slice(0, file.size, file.type);
    return new File([blob], `${name}.${ext}`, {type: file.type});
  };

}
