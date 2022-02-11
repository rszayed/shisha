import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import{ AngularFirestore} from '@Angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {
[x: string]: any;
sa: any;

constructor(private da:DataService , private fs:AngularFirestore , private route:Router) { }

ngOnInit(): void {
}
register(f: any): void{
// console.log(_f.value)
let data=f.value
this.da.singUp(data.email,data.password).then((users: { user: any })=>{
this.fs.collection("users").doc(users.user!.uid).set({
name:data.name,
email:data.email,
famely:data.famely,
uid:users.user!.uid
}).then(()=>{
  this.route.navigate(['/'])

})
console.log("done !")

})
.catch(()=>{
console.log("error ")
})
}

}
