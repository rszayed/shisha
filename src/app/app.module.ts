import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ElementComponent } from './element/element.component';
import { KalyanComponent } from './kalyan/kalyan.component';
import { TabakComponent } from './tabak/tabak.component';
import { EkcecComponent } from './ekcec/ekcec.component';
import { RegesterComponent } from './regester/regester.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http'



import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
import{ AngularFirestoreModule} from '@Angular/fire/firestore';
import{ AngularFireStorageModule} from '@Angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
//import{ AngularFireStorage} from '@Angular/fire/storage';
import { ProfailComponent } from './profail/profail.component';
//import { AngularFirestore } from '@Angular/fire/firestore';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ElementComponent,
    KalyanComponent,
    TabakComponent,
    EkcecComponent,
    RegesterComponent,
    NewsComponent,
    LoginComponent,
    ProfailComponent,
 
    

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    //AngularFireStorage,
   //AngularFirestore
   
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
