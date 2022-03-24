import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) { }

  // Firebase Firestore
  public getCollection(name: string, queryFn?: QueryFn) {
    return this.afs.collection(name, queryFn ? queryFn:undefined);
  }

  public getCollectionStream(name: string, withIdField = false) {
    return this.getCollection(name).valueChanges({idField: withIdField});
  }

  public getDocument<T = any>(collectionName: string, docId: string) {
    return this.afs.collection<T>(collectionName).doc(docId);
  }

  public getDocumentStream(collectionName: string, docId: string, withIdField = false) {
    return this.getDocument(collectionName, docId).valueChanges({idField: withIdField});
  }

  public addToCollection(name: string, data: any) {
    return this.getCollection(name).add(data);
  }

  public updateDocument(collectionName: string, docId: string, data: any) {
    return this.afs.collection(collectionName).doc(docId).update(data);
  }

  public deleteDocument(collectionName: string, docId: string) {
    return this.getDocument(collectionName, docId).delete();
  }

  // Firebase RealTimeDatabase

  public getDBList(name: string) {
    return this.db.list(name);
  }

  public getDBObject(name: string) {
    return this.db.object(name);
  }

  public setDBObject(name: string, data: any) {
    return this.getDBObject(name).set(data);
  }

  public addToDBList(name: string, data: any) {
    return this.getDBList(name).push(data);
  }

  public removeDBObject(name: string) {
    return this.getDBObject(name).remove();
  }

  public removeItemFormDBList(name: string, item: any) {
    return this.getDBList(name).remove(item);
  }

  public updateDBObject(name: string, data: any) {
    return this.getDBObject(name).update({...data});
  }

  public queryDBList(name: string, queryFn: any) {
    return this.db.list(name, ref => queryFn(ref))
  }

}
