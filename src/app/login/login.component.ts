import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AngularFirestore } from '@Angular/fire/firestore';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  [x: string]: any;
massageError: any
  fs: any;
  dataprofail: any;
  uid: string | undefined;
  image: any
  datas!: Subscription;
  constructor(private da:DataService ,private route:Router , fs:AngularFirestore , private af:AngularFireAuth) {
    this.da.user.subscribe((user: any) =>{
      this.uid=user?.uid

    })

  }


  ngOnInit(): void {
this.fs.collection("users").snapshotChanges().subscribe((data: any)=>{
  this.dataprofail=data.map((_element: any)=>{
    return{
      id:_element.payload.doc.id,
      name:_element.payload.doc.data()['name'],
      email:_element.payload.doc.data()['email'],
      password:_element.payload.doc.data()['password'],
      image:_element.payload.doc.data()['image']
    }

  })
})



//this.da.collection("users").snapshotChanges().subscribe((_data: any)=>{
  //this.datafo=this.data.map((_foto: any)=>{
  //return {
  // id:_foto.payload.doc.id,
 // image:_foto.payload.doc.data()['image'],
 // name:_foto.payload.doc.data()['name']

 //}
//})
//})


  }

  login(f: any){
    let data=f.value
    this.da.signIn(data.email,data.password)
    .then((_user: any)=>{
      console.log("login !")
      this.route.navigate(['/'])
     //localStorage.setItem("userConnect", user.user)
    })
    .catch(()=>{
     this.massageError="Емайл или пороль не провилний"
    })
    }
 ngOnDestroy(){
  //  this.datas.unsubscribe
 }


 }


