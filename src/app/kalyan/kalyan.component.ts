import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from '../service/data.service';
import { AngularFirestore } from '@Angular/fire/firestore';


@Component({
  selector: 'app-kalyan',
  templateUrl: './kalyan.component.html',
  styleUrls: ['./kalyan.component.css']
})
export class KalyanComponent implements OnInit {
  //Uid: any
  //successMessage: string | undefined


  constructor(private fs:AngularFirestore,  private fa:DataService ) {
    //this.fa.user.subscribe(user=>{
     // this.Uid=user?.uid
   // })
  
   }





  ngOnInit(): void {
  }
  //addproduct(f: any){
  // let data=f.value
  // this.fs.collection("products").doc().set({
   ///  title:data.title,
   //  Description:data.Description,
   //  image:data.image,
    // uid:this.Uid

   //})
   //.then(()=>{
//this.successMessage='added'
  // })

  // }
  
}
