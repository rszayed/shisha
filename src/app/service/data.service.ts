import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import{ AngularFirestoreModule} from '@Angular/fire/firestore';
import { AngularFirestore } from '@Angular/fire/firestore';
//import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
 
 
  user
  data!: Observable<string>;

  constructor(private fa:AngularFireAuth ,fs:AngularFirestore) {
 this.user=this.fa.user

 

  }
 

 

  singUp(_email: any,_password: any){
    return this.fa.createUserWithEmailAndPassword(_email,_password)
  }

  signIn(_email: any,_password: any){
    
    return this.fa.signInWithEmailAndPassword(_email,_password)
  }

  ngOnDestroy(){
    this.datas.unsubscribe
  }
  

}