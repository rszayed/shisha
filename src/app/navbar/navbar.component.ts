import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AngularFirestore } from '@Angular/fire/firestore';
import { Subscription } from 'rxjs';
import firebase from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit   {
isuser: any
user: any
uid: any
  fs: any;
  datas!: Subscription;
  data: any;
  dataprofail: any;
  datafo: any
  fa: any;
  constructor(private af:AngularFireAuth , private route:Router , private da:DataService , _fs:AngularFirestore) { 
    this.datas=this.da.user.subscribe((user: any)=>{
     if(user){
       this.isuser=true
     }else{
       this.isuser=false
        
     }
      
        
   })
  // this.da.user.subscribe((_user)=>{
   //// this.fa=this.user.uid
  // })
  }
 

  ngOnInit(): void {
//this.fs.collection("users").ref.doc(this.uid).get().then((_data: any)=>{

//})

//this.da.collection("users").snapshotChanges().subscribe((_data: any)=>{
  //this.datafo=this.data.map((_foto: any)=>{
   //return {
     // id:_foto.payload.doc.id,
  // image:_foto.payload.doc.data()['image'],
   //name:_foto.payload.doc.data()['name']

  //}
 //})
//})

  }
  logout(){
    this.af.signOut().then(()=>{
     console.log("singout done") 
     this.route.navigate(['/news'])
    })
    .catch(()=>{
      console.log("error")
    })
  }
  

}

